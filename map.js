/* EasyGo 地图板块：真实底图 + 公开地点检索，服务不可用时使用明确标注的演示地点。 */
(function () {
  'use strict';

  const INITIAL_CENTER = [39.9163, 116.3972];
  const CATEGORY_NAMES = {
    transport: ['Transport', '交通'],
    food: ['Food', '美食'],
    sights: ['Sights', '景点'],
    fun: ['Entertainment', '娱乐'],
    hotels: ['Hotels', '酒店']
  };
  const CATEGORY_ICONS = {
    transport: '🚇', food: '🍜', sights: '🏛', fun: '🎭', hotels: '🏨'
  };

  // 这些是演示点位，不代表真实商家或精确地点。
  const SAMPLE_PLACES = [
    { id: 'demo-s1', name: '景点示例 · 古城漫步', en: 'Sample sight · Old city walk', category: 'sights', lat: 39.921, lon: 116.397, keywords: '历史 景点 古城 culture history' },
    { id: 'demo-s2', name: '景点示例 · 文化展馆', en: 'Sample sight · Cultural gallery', category: 'sights', lat: 39.913, lon: 116.404, keywords: '博物馆 展览 museum gallery' },
    { id: 'demo-t1', name: '交通示例 · 地铁入口', en: 'Sample transport · Metro entrance', category: 'transport', lat: 39.918, lon: 116.408, keywords: '地铁 车站 subway metro station' },
    { id: 'demo-t2', name: '交通示例 · 公交站', en: 'Sample transport · Bus stop', category: 'transport', lat: 39.911, lon: 116.39, keywords: '公交 巴士 bus transport' },
    { id: 'demo-f1', name: '美食示例 · 北京风味', en: 'Sample food · Beijing cuisine', category: 'food', lat: 39.919, lon: 116.391, keywords: '烤鸭 餐馆 北京菜 restaurant roast duck' },
    { id: 'demo-f2', name: '美食示例 · 茶饮', en: 'Sample food · Tea', category: 'food', lat: 39.91, lon: 116.402, keywords: '茶 奶茶 饮品 tea drink' },
    { id: 'demo-e1', name: '娱乐示例 · 剧场', en: 'Sample entertainment · Theatre', category: 'fun', lat: 39.922, lon: 116.388, keywords: '剧院 演出 theatre show' },
    { id: 'demo-e2', name: '娱乐示例 · 公园', en: 'Sample entertainment · Park', category: 'fun', lat: 39.908, lon: 116.396, keywords: '公园 休闲 park' },
    { id: 'demo-h1', name: '酒店示例 · 城市住宿', en: 'Sample hotel · City stay', category: 'hotels', lat: 39.915, lon: 116.391, keywords: '酒店 住宿 hotel stay' },
    { id: 'demo-h2', name: '酒店示例 · 庭院旅舍', en: 'Sample hotel · Courtyard hostel', category: 'hotels', lat: 39.924, lon: 116.405, keywords: '民宿 旅舍 hostel guesthouse' }
  ];

  let map = null;
  let markerLayer = null;
  let abortController = null;
  let root = null;
  let language = 'en';
  let category = 'sights';
  let center = INITIAL_CENTER;
  let currentPlaces = [];
  let cache = new Map();
  let requestNumber = 0;
  let tileLoaded = false;
  let tileErrors = 0;

  const label = (en, zh) => language === 'en' ? en : zh;
  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
  const get = id => root && root.querySelector('#' + id);

  function setStatus(message) {
    const status = get('mapStatus');
    if (status) status.textContent = message;
  }

  function setActiveCategory() {
    root.querySelectorAll('[data-map-category]').forEach(button => {
      const active = button.dataset.mapCategory === category;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function setHeading(query) {
    const title = get('mapResultsTitle');
    if (!title) return;
    title.textContent = query
      ? label('Results for “' + query + '”', '“' + query + '”的搜索结果')
      : label(CATEGORY_NAMES[category][0] + ' nearby', '附近的' + CATEGORY_NAMES[category][1]);
  }

  function drawPlaces(places, source) {
    currentPlaces = places;
    if (markerLayer) markerLayer.clearLayers();
    const list = get('mapResults');
    if (!list) return;

    if (!places.length) {
      list.innerHTML = '<div class="map-empty">' + label(
        'No matching places found here. Try another keyword or move the map.',
        '这里暂时没有匹配地点。试试其他关键词，或拖动地图再搜索。'
      ) + '</div>';
      return;
    }

    list.innerHTML = places.map((place, index) => {
      const name = language === 'en' ? (place.en || place.name) : place.name;
      const sourceText = source === 'live'
        ? label('OpenStreetMap place', 'OpenStreetMap 地点')
        : label('Sample place · not a real listing', '演示地点 · 非真实商家');
      const extra = place.address ? '<span class="map-result-address">' + escapeHtml(place.address) + '</span>' : '';
      return '<button type="button" class="map-result" data-map-result="' + index + '">' +
        '<span class="map-result-icon">' + CATEGORY_ICONS[place.category] + '</span>' +
        '<span class="map-result-copy"><strong>' + escapeHtml(name) + '</strong>' +
        '<small>' + escapeHtml(sourceText) + '</small>' + extra + '</span><span aria-hidden="true">›</span></button>';
    }).join('');

    if (!markerLayer) return;
    places.forEach((place, index) => {
      const name = language === 'en' ? (place.en || place.name) : place.name;
      const marker = L.marker([place.lat, place.lon], {
        icon: L.divIcon({
          className: 'easygo-pin-wrap',
          html: '<span class="easygo-pin ' + place.category + '"><span>' + CATEGORY_ICONS[place.category] + '</span></span>',
          iconSize: [42, 49], iconAnchor: [21, 46], popupAnchor: [0, -40]
        }),
        title: name
      });
      const sourceText = source === 'live' ? label('OpenStreetMap place', 'OpenStreetMap 地点') : label('Sample place', '演示地点');
      marker.bindPopup('<strong>' + escapeHtml(name) + '</strong><br><small>' + escapeHtml(sourceText) + '</small>');
      marker.on('click', () => highlightResult(index));
      marker.addTo(markerLayer);
      place.marker = marker;
    });
  }

  function highlightResult(index) {
    root.querySelectorAll('.map-result').forEach((node, i) => node.classList.toggle('selected', i === index));
  }

  function sampleFor(query) {
    const nearby = SAMPLE_PLACES.filter(p => distanceKm(center, [p.lat, p.lon]) < 8);
    if (!query) return nearby.filter(p => p.category === category);
    const term = query.toLowerCase();
    return nearby.filter(p => (p.name + ' ' + p.en + ' ' + p.keywords).toLowerCase().includes(term));
  }

  function distanceKm(a, b) {
    const dLat = (a[0] - b[0]) * 111;
    const dLon = (a[1] - b[1]) * 85;
    return Math.hypot(dLat, dLon);
  }

  function queryFor(query) {
    const lat = center[0].toFixed(5), lon = center[1].toFixed(5);
    const around = '(around:2200,' + lat + ',' + lon + ')';
    const byCategory = {
      transport: ['["public_transport"]', '["railway"~"^(station|subway_entrance|tram_stop)$"]', '["amenity"~"^(bus_station|taxi|bicycle_rental)$"]', '["highway"="bus_stop"]'],
      food: ['["amenity"~"^(restaurant|cafe|fast_food|food_court)$"]', '["shop"~"^(bakery|tea|pastry)$"]'],
      sights: ['["tourism"~"^(attraction|museum|gallery|viewpoint)$"]', '["historic"]'],
      fun: ['["leisure"~"^(park|sports_centre)$"]', '["amenity"~"^(cinema|theatre|arts_centre)$"]', '["tourism"="zoo"]'],
      hotels: ['["tourism"~"^(hotel|hostel|guest_house|motel)$"]']
    };
    let filters = byCategory[category];
    if (query) {
      const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/["\\]/g, '\\$&');
      filters = ['["name"~"' + escaped + '",i]', '["name:en"~"' + escaped + '",i]', '["brand"~"' + escaped + '",i]'];
      const lower = query.toLowerCase();
      if (/茶|tea/.test(lower)) filters.push('["shop"="tea"]');
      if (/咖啡|coffee|cafe/.test(lower)) filters.push('["amenity"="cafe"]');
      if (/烤鸭|roast duck/.test(lower)) filters.push('["cuisine"~"duck|chinese",i]');
    }
    return '[out:json][timeout:15];(' + filters.map(f => 'nwr' + f + around + ';').join('') + ');out center 80;';
  }

  function categorize(tags) {
    if (tags.tourism && /hotel|hostel|guest_house|motel/.test(tags.tourism)) return 'hotels';
    if (tags.amenity && /restaurant|cafe|fast_food|food_court/.test(tags.amenity) || tags.shop && /bakery|tea|pastry/.test(tags.shop)) return 'food';
    if (tags.railway || tags.public_transport || tags.highway === 'bus_stop' || tags.amenity === 'taxi') return 'transport';
    if (tags.leisure || tags.amenity && /cinema|theatre|arts_centre/.test(tags.amenity)) return 'fun';
    return 'sights';
  }

  function normalize(data) {
    const seen = new Set();
    return (data.elements || []).map(element => {
      const tags = element.tags || {};
      const lat = element.lat ?? element.center?.lat;
      const lon = element.lon ?? element.center?.lon;
      const name = tags['name:zh'] || tags.name || tags['name:en'];
      if (!name || !Number.isFinite(lat) || !Number.isFinite(lon)) return null;
      const key = name + ':' + lat.toFixed(4) + ':' + lon.toFixed(4);
      if (seen.has(key)) return null;
      seen.add(key);
      return {
        id: element.type + '/' + element.id,
        name, en: tags['name:en'] || tags.name || name,
        lat, lon, category: categorize(tags),
        address: [tags['addr:street'], tags['addr:housenumber']].filter(Boolean).join(' ')
      };
    }).filter(Boolean).slice(0, 70);
  }

  async function searchPlaces(query = '') {
    if (!root) return;
    if (abortController) abortController.abort();
    const currentRequest = ++requestNumber;
    abortController = new AbortController();
    const signal = abortController.signal;
    const timeout = setTimeout(() => abortController.abort(), 15000);
    setHeading(query);
    const sample = sampleFor(query);
    drawPlaces(sample, 'sample');
    setStatus(label('Looking up public map places… Sample pins shown meanwhile.', '正在查询公开地图地点…暂时显示演示图钉。'));
    const key = [category, query.toLowerCase(), center.map(v => v.toFixed(3)).join(',')].join('|');
    try {
      let places = cache.get(key);
      if (!places) {
        const response = await fetch('https://overpass.openstreetmap.fr/api/interpreter', {
          method: 'POST',
          body: new URLSearchParams({ data: queryFor(query) }),
          signal
        });
        if (!response.ok) throw new Error('Map place service returned ' + response.status);
        places = normalize(await response.json());
        cache.set(key, places);
      }
      if (currentRequest !== requestNumber || !root) return;
      drawPlaces(places, 'live');
      setStatus(places.length
        ? label(places.length + ' public map places found. Tap a pin for details.', '找到 ' + places.length + ' 个公开地图地点，点击图钉查看。')
        : label('No public map places matched. Try another search.', '公开地图中没有匹配地点，请换个词试试。'));
    } catch (error) {
      if (currentRequest !== requestNumber || !root) return;
      drawPlaces(sample, 'sample');
      setStatus(label('Place service unavailable. Showing labeled sample places.', '地点服务暂时不可用，当前显示明确标注的演示地点。'));
    } finally {
      clearTimeout(timeout);
    }
  }

  function mount(options) {
    root = document.getElementById('mapWorkspace');
    if (!root) return;
    language = options.lang;
    category = 'sights';
    setActiveCategory();
    root.addEventListener('click', onClick);
    root.addEventListener('submit', onSubmit);

    if (typeof L === 'undefined') {
      get('mapCanvas').innerHTML = '<div class="map-empty">' + label('Map library could not load.', '地图组件加载失败。') + '</div>';
      drawPlaces(sampleFor(''), 'sample');
      setStatus(label('Map unavailable. Sample places shown in the list.', '地图不可用，列表显示演示地点。'));
      return;
    }

    map = L.map('mapCanvas', { zoomControl: true }).setView(center, 14);
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'
    });
    tiles.on('load', () => { tileLoaded = true; });
    tiles.on('tileerror', () => {
      if (tileLoaded || ++tileErrors < 3) return;
      if (map.hasLayer(tiles)) map.removeLayer(tiles);
      const fallback = get('mapTileFallback');
      if (fallback) fallback.hidden = false;
      setStatus(label('Map background unavailable. Open through Live Server and refresh.', '地图底图不可用。请用 Live Server 打开并刷新。'));
    });
    tiles.addTo(map);
    markerLayer = L.layerGroup().addTo(map);
    map.on('moveend', () => { center = [map.getCenter().lat, map.getCenter().lng]; });
    searchPlaces();
  }

  function onClick(event) {
    const categoryButton = event.target.closest('[data-map-category]');
    if (categoryButton) {
      category = categoryButton.dataset.mapCategory;
      get('mapSearchInput').value = '';
      setActiveCategory();
      searchPlaces();
      return;
    }
    if (event.target.closest('#mapSearchArea')) {
      searchPlaces(get('mapSearchInput').value.trim());
      return;
    }
    const resultButton = event.target.closest('[data-map-result]');
    if (resultButton && map) {
      const index = Number(resultButton.dataset.mapResult);
      const place = currentPlaces[index];
      if (!place) return;
      highlightResult(index);
      map.setView([place.lat, place.lon], Math.max(map.getZoom(), 16));
      place.marker?.openPopup();
    }
  }

  function onSubmit(event) {
    if (event.target.id !== 'mapSearchForm') return;
    event.preventDefault();
    searchPlaces(get('mapSearchInput').value.trim());
  }

  function unmount() {
    requestNumber++;
    if (abortController) abortController.abort();
    abortController = null;
    if (root) {
      root.removeEventListener('click', onClick);
      root.removeEventListener('submit', onSubmit);
    }
    if (map) map.remove();
    map = null;
    markerLayer = null;
    root = null;
    tileLoaded = false;
    tileErrors = 0;
  }

  window.EasyGoMap = { mount, unmount };
})();
