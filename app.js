const translations = {
  en:
  {
    tagline: 'Your China travel companion',
    demo: 'INTERACTIVE CONCEPT',
    demoNote: 'Explore a sample journey through Beijing.',
    beijing: 'Beijing, China',
    myTrip: 'My trip',
    footerText: 'A concept experience for visiting China',
    viewConcept: 'View original mobile concept',
    home: 'Explore',
    guide: 'Travel guide',
    book: 'Bookings',
    maps: 'Routes',
    translate: 'Translate',
    locals: 'Local guides',
    shop: 'Shop',
    welcome: 'Welcome to China.',
    homeLead: 'Find the places, practical answers and local help you need for a smoother journey.',
    exploreRoutes: 'Explore routes',
    beforeYouGo: 'Before you go',
    sixWays: 'One journey, everything in reach',
    picked: 'A good place to start',
    view: 'Explore',
    added: 'Added to your trip',
    sample: 'Sample experience · Prices and availability are illustrative.',
    try: 'Try this feature',
    feedback: 'Feedback'
  },
  zh:
  {
    tagline: '你的来华旅行伙伴',
    demo: '交互概念展示',
    demoNote: '从北京开启一段示例旅程。',
    beijing: '中国·北京',
    myTrip: '我的行程',
    footerText: '来华旅行产品概念演示',
    viewConcept: '查看原手机设计稿',
    home: '探索',
    guide: '出行攻略',
    book: '一站式预订',
    maps: '路线导航',
    translate: '翻译',
    locals: '在地向导',
    shop: '来华购物',
    welcome: '欢迎来到中国。',
    homeLead: '路线、实用攻略和本地帮助，都可以在这里找到。',
    exploreRoutes: '探索路线',
    beforeYouGo: '行前须知',
    sixWays: '一段旅程，六种帮助',
    picked: '从这里出发',
    view: '进入板块',
    added: '已加入行程',
    sample: '示例演示 · 价格与可订状态仅供展示。',
    try: '体验功能',
    feedback: '问题反馈'
  }
};
const pageInfo = {
  guide:
  {
    icon: '▤',
    en: ['Travel guide',
      'Start with the practical details, then discover the stories behind each destination.'
    ],
    zh: ['出行攻略', '从实用的来华准备开始，逐步了解目的地背后的文化。']
  },
  book:
  {
    icon: '▣',
    en: ['Bookings', 'Explore sample travel packages, tickets and stays.'],
    zh: ['一站式预订', '搜索示例旅游包，查看逐日住宿、交通与费用。']
  },
  maps:
  {
    icon: '⌖',
    en: ['Routes', 'See how the sights fit together before you set off.'],
    zh: ['路线导航', '出发前先看看景点之间如何串联。']
  },
  translate:
  {
    icon: '文',
    en: ['Translate',
      'Understand signs and useful travel phrases alongside the culture behind them.'
    ],
    zh: ['翻译', '读懂标识与旅行用语，也了解其中的文化含义。']
  },
  locals:
  {
    icon: '◎',
    en: ['Local guides', 'Find a guide who speaks your language and knows the city.'],
    zh: ['在地向导', '寻找懂你的语言、熟悉这座城市的向导。']
  },
  shop:
  {
    icon: '◇',
    en: ['Shop in China', 'Travel essentials and locally inspired finds, all in one place.'],
    zh: ['来华购物', '旅行必需品与本地好物，一站查看。']
  }
};
const items = {
  ticket:
  {
    name: ['Palace Museum entry', '故宫博物院门票'],
    price: 18,
    icon: '🏛'
  },
  hotel:
  {
    name: ['Courtyard stay near the Forbidden City', '故宫附近四合院住宿'],
    price: 128,
    icon: '🏠'
  },
  dinner:
  {
    name: ['Beijing roast duck dinner', '北京烤鸭晚餐'],
    price: 24,
    icon: '🥢'
  },
  esim:
  {
    name: ['China travel eSIM · 15 GB', '中国旅行 eSIM · 15 GB'],
    price: 12.99,
    icon: '◈'
  },
  scarf:
  {
    name: ['Silk scarf', '丝巾'],
    price: 29,
    icon: '🎁'
  },
  tea:
  {
    name: ['Porcelain tea set', '青花瓷茶具'],
    price: 45,
    icon: '🍵'
  }
};
const routes = [
{
  id: 'imperial',
  icon: '🏛',
  name: ['Imperial Beijing', '中轴线·古都北京'],
  desc: ['Palace Museum → Jingshan Park → Shichahai', '故宫 → 景山公园 → 什刹海'],
  meta: ['A day of palaces, city views and old neighborhoods', '一日走过宫殿、城市风景与胡同']
},
{
  id: 'wall',
  icon: '⛰',
  name: ['Great Wall day trip', '长城一日游'],
  desc: ['Beijing → Mutianyu Great Wall', '北京市区 → 慕田峪长城'],
  meta: ['A full day · plan transport in advance', '全天行程 · 建议提前规划交通']
},
{
  id: 'food',
  icon: '🥟',
  name: ['Hutong food walk', '胡同美食漫步'],
  desc: ['Shichahai → Nanluoguxiang → local eats', '什刹海 → 南锣鼓巷 → 本地小吃'],
  meta: ['An easy afternoon on foot', '适合步行的轻松午后']
}];
// 课程演示数据：按每人计价，交通票与住宿都是预设示例。
const travelPackages = [
  {
    id: 'beijing',
    name: ['Beijing heritage · 2 days', '北京古都文化 · 2 天'],
    keywords: '北京 故宫 中轴线 胡同 文化 beijing palace museum culture',
    days: [
      { title: ['Palace Museum and Jingshan', '故宫与景山'], hotel: ['Courtyard hotel', '四合院酒店'], transport: ['Metro day pass', '地铁一日票'], hotelCost: 128, transportCost: 8, activityCost: 18 },
      { title: ['Hutong and Shichahai', '胡同与什刹海'], hotel: ['Courtyard hotel', '四合院酒店'], transport: ['Bus ticket', '公交车票'], hotelCost: 128, transportCost: 4, activityCost: 12 }
    ]
  },
  {
    id: 'greatwall',
    name: ['Great Wall discovery · 2 days', '长城探索 · 2 天'],
    keywords: '北京 长城 慕田峪 自然 徒步 great wall mutianyu hiking',
    days: [
      { title: ['Mutianyu Great Wall', '慕田峪长城'], hotel: ['Mountain guesthouse', '山景民宿'], transport: ['Round-trip coach ticket', '往返大巴车票'], hotelCost: 96, transportCost: 42, activityCost: 28 },
      { title: ['Beijing city stroll', '北京市区漫步'], hotel: ['City hotel', '市区酒店'], transport: ['Metro day pass', '地铁一日票'], hotelCost: 110, transportCost: 8, activityCost: 12 }
    ]
  }
];
const packageTotal = pkg => pkg.days.reduce((sum, day) => sum + day.hotelCost + day.transportCost + day.activityCost, 0);
const state = {
  lang: 'en',
  page: 'home',
  bookFilter: 'all',
  bookQuery: '',
  guideTab: 'essentials',
  translationTab: 'text',
  guideFilter: 'all',
  shopFilter: 'all',
  route: 'imperial',
  trip: JSON.parse(localStorage.getItem('easygo-trip') || '[]')
};
const t = (key) => translations[state.lang][key];
const tr = (pair) => pair[state.lang === 'en' ? 0 : 1];
const content = document.getElementById('content');
const navPages = ['home', 'guide', 'book', 'maps', 'translate', 'locals', 'shop'];
const navIcons = {
  home: '⌂',
  guide: '▤',
  book: '▣',
  maps: '⌖',
  translate: '文',
  locals: '◎',
  shop: '◇'
};

function nav()
{
  document.getElementById('nav').innerHTML = navPages.map(p =>
    `<button type="button" class="${state.page===p?'active':''}" data-page="${p}"><span class="nav-icon">${navIcons[p]}</span>${t(p)}</button>`
    ).join('');
  document.getElementById('mobileNav').innerHTML = ['home', 'book', 'maps', 'translate', 'guide']
    .map(p =>
      `<button type="button" class="${state.page===p?'active':''}" data-page="${p}"><span>${navIcons[p]}</span>${t(p)}</button>`
      ).join('');
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
  document.getElementById('langToggle').textContent = state.lang === 'en' ? '中文' : 'EN';
  document.getElementById('tripCount').textContent = state.trip.length
}
const header = (page) =>
  `<div class="page-head"><div><p class="section-label">EASYGO / ${t(page).toUpperCase()}</p><h1>${pageInfo[page][state.lang][0]}</h1><p class="lead">${pageInfo[page][state.lang][1]}</p></div><div class="page-icon" aria-hidden="true">${pageInfo[page].icon}</div></div>`;
const chips = (values, active, attr) =>
  `<div class="filter-row">${values.map(([key,en,zh])=>`<button type="button" class="chip ${key===active?'active':''}" data-${attr}="${key}">${state.lang==='en'?en:zh}</button>`).join('')}</div>`;

function home()
{
  const cards = navPages.slice(1).map(p =>
    `<article class="card"><span class="card-icon">${pageInfo[p].icon}</span><h3>${t(p)}</h3><p>${pageInfo[p][state.lang][1]}</p><button type="button" data-page="${p}">${t('view')} ↗</button></article>`
    ).join('');
  return `<div class="home-top"><section class="hero"><p class="section-label">EASYGO · CHINA</p><h1>${t('welcome')}</h1><p class="lead">${t('homeLead')}</p><div class="hero-actions"><button type="button" class="primary" data-page="maps">${t('exploreRoutes')} ↗</button><button type="button" class="secondary" data-page="guide">${t('beforeYouGo')}</button></div></section><aside class="welcome-card"><span class="small">${state.lang==='en'?'THIS WEEK’S PICK':'本周推荐'}</span><div><span class="big-number">01</span><h2>${tr(routes[0].name)}</h2><p>${tr(routes[0].meta)}</p></div><button type="button" data-page="maps">${t('exploreRoutes')} →</button></aside></div><div class="section-head"><div><p class="section-label">${t('picked')}</p><h2>${t('sixWays')}</h2></div></div><div class="cards">${cards}</div>`
}

function guide()
{
  const tabs = [
    ['essentials', 'Before you go', '行前准备'],
    ['culture', 'Culture tips', '文化礼仪'],
    ['beijing', 'Discover Beijing', '发现北京'],
    ['food', 'Food & routes', '美食与路线']
  ];
  let data = {
    essentials: [
      ['01', 'Visa & entry', '签证与入境',
        'Check current entry requirements with official sources before travel.',
        '出发前请通过官方渠道确认最新入境要求。'
      ],
      ['02', 'Payments & connectivity', '支付与网络',
        'Learn about common payment apps, mobile data and useful local services.',
        '了解常用支付应用、移动网络与本地服务。'
      ],
      ['03', 'Stay ready', '安心出发',
        'Save emergency contacts, weather notes and a packing checklist.', '整理紧急联系方式、天气信息与打包清单。'
      ]
    ],
    culture: [
      ['01', 'Greetings & distance', '问候与社交距离',
        'A few local etiquette notes can make everyday encounters easier.', '了解日常社交礼仪，让交流更自然。'
      ],
      ['02', 'At the table', '餐桌礼仪',
        'Explore shared dishes, dining customs and practical ordering phrases.',
        '认识合餐习惯、餐桌礼仪与点餐用语。'
      ],
      ['03', 'Places of worship', '参观礼仪',
        'Follow each site’s signs and respect its photography rules.', '遵守场所告示与拍摄规定。'
      ]
    ],
    beijing: [
      ['01', 'Palace Museum', '故宫博物院',
        'Explore the architecture and stories of the imperial city.', '在宫殿建筑中读懂古都的故事。'
      ],
      ['02', 'The central axis', '北京中轴线',
        'Follow the landmarks that shape the city’s historic layout.', '沿地标认识北京的历史格局。'
      ],
      ['03', 'Hutong life', '胡同生活',
        'Discover neighborhoods, local shops and everyday city life.', '走进街巷、店铺与日常生活。'
      ]
    ],
    food: [
      ['01', 'Beijing roast duck', '北京烤鸭',
        'Learn how the dish is served and what to order alongside it.', '了解烤鸭的吃法与搭配。'
      ],
      ['02', 'Local bites', '本地小吃', 'Look for regional flavors and useful dietary phrases.',
        '认识风味小吃与饮食沟通用语。'
      ],
      ['03', 'Themed walks', '文化主题路线', 'Link landmarks, food and local stories into a day out.',
        '用景点、食物与故事串起一天的旅程。'
      ]
    ]
  };
  return header('guide') + chips(tabs, state.guideTab, 'guide-tab') +
    `<div class="split"><div class="stack">${data[state.guideTab].map(([n,en,zh,de,dz])=>`<article class="panel step"><span class="step-number">${n}</span><div><h3>${state.lang==='en'?en:zh}</h3><p>${state.lang==='en'?de:dz}</p></div></article>`).join('')}</div><aside class="summary"><p class="section-label">EASYGO TIP</p><h3>${state.lang==='en'?'Make culture part of the route':'让文化融入路线'}</h3><p class="muted">${state.lang==='en'?'Explore a Beijing itinerary that connects places with the stories behind them.':'看看把景点与背后故事连起来的北京行程。'}</p><button class="primary" type="button" data-page="maps">${t('exploreRoutes')} →</button></aside></div><p class="inline-note">${state.lang==='en'?'Entry rules can change. Verify official guidance before traveling.':'入境政策可能变化，出行前请核对官方信息。'}</p>`
}

function book()
{
  const filters = [
    ['all', 'All', '全部'],
    ['stays', 'Stays', '住宿'],
    ['tickets', 'Tickets', '门票'],
    ['dining', 'Dining', '餐饮']
  ];
  const shown = state.bookFilter === 'all' ? ['hotel', 'ticket', 'dinner'] : state.bookFilter ===
    'stays' ? ['hotel'] : state.bookFilter === 'tickets' ? ['ticket'] : ['dinner'];
  const query = state.bookQuery.trim().toLowerCase();
  const matched = travelPackages.filter(pkg => !query || (pkg.keywords + ' ' + pkg.name.join(' ')).toLowerCase().includes(query));
  return header('book') + `
    <section class="package-section">
      <form id="packageSearch" class="package-search" role="search">
        <label for="packageKeyword">${state.lang === 'en' ? 'Find a travel package' : '搜索旅游包'}</label>
        <div><input id="packageKeyword" type="search" maxlength="50" value="${escapeHTML(state.bookQuery)}" placeholder="${state.lang === 'en' ? 'Try Beijing, Great Wall, culture…' : '试试：北京、长城、文化…'}"><button class="primary" type="submit">${state.lang === 'en' ? 'Search' : '搜索'}</button></div>
      </form>
      <p class="section-label">${state.lang === 'en' ? 'SAMPLE TRAVEL PACKAGES' : '示例旅游包'}</p>
      <div class="package-grid">${matched.length ? matched.map(packageCard).join('') : `<p class="package-empty">${state.lang === 'en' ? 'No sample package matched. Try “Beijing” or “Great Wall”.' : '暂无匹配的示例旅游包，试试“北京”或“长城”。'}</p>`}</div>
      <p class="inline-note">${state.lang === 'en' ? 'Prices are illustrative per person in USD. These are sample plans, not live bookings.' : '费用按每人美元示例计算；均为演示方案，不代表实时价格或实际可订。'}</p>
    </section>` + chips(filters, state.bookFilter, 'book-filter') +
    `<div class="split"><div class="stack">${shown.map(id=>itemCard(id)).join('')}</div><aside class="summary"><p class="section-label">YOUR DAY IN BEIJING</p><h3>${state.lang==='en'?'Build a simple itinerary':'安排一天的行程'}</h3><p class="muted">${state.lang==='en'?'Add a stay, a museum ticket or dinner. Your choices appear in My trip.':'加入住宿、门票或晚餐后，可在“我的行程”查看。'}</p><button type="button" class="secondary" data-modal="trip">${t('myTrip')} →</button><p class="inline-note">${t('sample')}</p></aside></div>`
}

function packageCard(pkg)
{
  return `<article class="panel package-card"><h3>${tr(pkg.name)}</h3>
    ${pkg.days.map((day, i) => `<div class="package-day"><strong>${state.lang === 'en' ? 'Day' : '第'} ${i + 1} ${state.lang === 'en' ? '' : '天'} · ${tr(day.title)}</strong><p>${state.lang === 'en' ? 'Stay' : '住宿'}：${tr(day.hotel)} $${day.hotelCost.toFixed(2)}<br>${state.lang === 'en' ? 'Transport ticket' : '交通票'}：${tr(day.transport)} $${day.transportCost.toFixed(2)}<br>${state.lang === 'en' ? 'Attractions' : '景点门票'}：$${day.activityCost.toFixed(2)}<br>${state.lang === 'en' ? 'Day subtotal' : '当日小计'}：$${(day.hotelCost + day.transportCost + day.activityCost).toFixed(2)}</p></div>`).join('')}
    <div class="package-total"><strong>${state.lang === 'en' ? 'Total per person' : '每人费用合计'}：$${packageTotal(pkg).toFixed(2)}</strong><button class="primary" type="button" data-add-package="${pkg.id}">${state.lang === 'en' ? 'Add sample plan' : '加入示例行程'}</button></div></article>`
}

function itemCard(id)
{
  let item = items[id];
  return `<article class="panel item-card"><div class="item-symbol">${item.icon}</div><div class="item-detail"><h3>${tr(item.name)}</h3><p class="muted small">${id==='hotel'?(state.lang==='en'?'Near the Palace Museum · 1 night':'故宫附近 · 1 晚'):id==='ticket'?(state.lang==='en'?'Visit the imperial palace':'参观古代宫殿'):id==='dinner'?(state.lang==='en'?'A taste of Beijing':'品尝北京风味'):state.lang==='en'?'Travel-ready pick':'旅行精选'}</p><div class="item-bottom"><span class="price">$${item.price.toFixed(2)}</span><button class="primary" type="button" data-add="${id}">${state.lang==='en'?'Add to trip':'加入行程'}</button></div></div></article>`
}

function maps()
{
  let route = routes.find(r => r.id === state.route);
  const categories = [
    ['transport', '🚇', 'Transport', '交通'],
    ['food', '🍜', 'Food', '美食'],
    ['sights', '🏛', 'Sights', '景点'],
    ['fun', '🎭', 'Entertainment', '娱乐'],
    ['hotels', '🏨', 'Hotels', '酒店']
  ];

  return header('maps') + `
    <section class="map-workspace" id="mapWorkspace">
      <form class="map-search" id="mapSearchForm" role="search">
        <label class="sr-only" for="mapSearchInput">${state.lang === 'en' ? 'Search places nearby' : '搜索附近地点'}</label>
        <span aria-hidden="true">⌕</span>
        <input id="mapSearchInput" type="search" maxlength="40"
          placeholder="${state.lang === 'en' ? 'Search a business, food or place near the map…' : '搜索附近商家、食物或地点…'}" />
        <button type="submit" class="primary">${state.lang === 'en' ? 'Search' : '搜索'}</button>
      </form>
      <div class="map-categories" role="group" aria-label="${state.lang === 'en' ? 'Place categories' : '地点分类'}">
        ${categories.map(([key, icon, en, zh]) => `
          <button type="button" class="map-category" data-map-category="${key}">
            <span aria-hidden="true">${icon}</span>${state.lang === 'en' ? en : zh}
          </button>`).join('')}
      </div>
      <div class="map-layout">
        <div class="map-surface">
          <div id="mapCanvas" class="interactive-map" aria-label="${state.lang === 'en' ? 'Interactive map of nearby places' : '附近地点交互地图'}"></div>
          <div id="mapTileFallback" class="map-tile-fallback" hidden role="status">${state.lang === 'en' ? 'The map background could not load on this network. Pins and the place list remain available.' : '当前网络暂时无法加载地图底图，图钉和地点列表仍可使用。'}</div>
          <button id="mapSearchArea" type="button" class="map-area-button">${state.lang === 'en' ? 'Search this area' : '搜索当前区域'}</button>
        </div>
        <aside class="map-results-panel">
          <div class="map-results-heading">
            <p class="section-label">${state.lang === 'en' ? 'PLACES NEARBY' : '附近地点'}</p>
            <h2 id="mapResultsTitle">${state.lang === 'en' ? 'Sights around Beijing' : '北京附近的景点'}</h2>
            <p id="mapStatus" role="status" aria-live="polite">${state.lang === 'en' ? 'Loading places…' : '正在查找地点…'}</p>
          </div>
          <div id="mapResults" class="map-results-list"></div>
        </aside>
      </div>
      <p class="map-disclaimer">${state.lang === 'en'
        ? 'Map data © OpenStreetMap contributors. Place search uses public map data when available; sample places are labeled. Product stock and turn-by-turn navigation are not provided.'
        : '地图数据 © OpenStreetMap 贡献者。地点搜索尽可能使用公开地图数据；演示地点会明确标注。商品库存与实时逐路导航暂不提供。'}</p>
    </section>
    <section class="route-section">
      <p class="section-label">${state.lang === 'en' ? 'CULTURAL ROUTES' : '文化主题路线'}</p>
      <h2>${state.lang === 'en' ? 'Make a day of it' : '串起一日行程'}</h2>
      ${chips(routes.map(r => [r.id, r.name[0], r.name[1]]), state.route, 'route')}
      <div class="panel route-detail">
        <div>
          <h3>${route.icon} ${tr(route.name)}</h3>
          <p class="muted">${tr(route.desc)}</p>
          <p>${tr(route.meta)}</p>
        </div>
        <button class="primary" type="button" data-add-route="${route.id}">${state.lang === 'en' ? 'Save route' : '保存路线'}</button>
      </div>
    </section>`;
}

function translate()
{
  let tabs = [
    ['text', 'Text', '文字'],
    ['camera', 'Camera', '拍照'],
    ['voice', 'Voice', '语音']
  ];
  let panel = state.translationTab === 'text' ?
    `<label class="field-label" for="sourceText">${state.lang==='en'?'Enter a word or phrase':'输入词语或句子'}</label><textarea class="textarea" id="sourceText" placeholder="${state.lang==='en'?'Try: 请问地铁站在哪里？':'试试：Where is the subway station?'}"></textarea><button class="primary" type="button" id="translateButton" style="margin-top:12px">${state.lang==='en'?'Show example translation':'查看示例翻译'}</button><div id="translationResult" aria-live="polite"></div>` :
    state.translationTab === 'camera' ?
    `<div class="summary"><p class="section-label">CAMERA EXPERIENCE</p><h3>太和殿 · Hall of Supreme Harmony</h3><p class="muted">${state.lang==='en'?'Point your camera at a sign to see a translation with cultural context. This prototype uses a prepared example.':'拍摄标识后可查看翻译与文化背景。本原型展示预设示例。'}</p><button class="primary" type="button" id="cameraExample">${state.lang==='en'?'View sign example':'查看标识示例'}</button><div id="translationResult" aria-live="polite"></div></div>` :
    `<div class="summary"><p class="section-label">VOICE EXPERIENCE</p><h3>${state.lang==='en'?'A phrase for the road':'旅途中的一句话'}</h3><p class="muted">${state.lang==='en'?'Preview a useful spoken phrase. Live speech recognition will require an external service.':'体验一条实用旅行用语。实时语音识别需要后续接入服务。'}</p><button class="primary" type="button" id="voiceExample">${state.lang==='en'?'View voice example':'查看语音示例'}</button><div id="translationResult" aria-live="polite"></div></div>`;
  return header('translate') +
    `<div class="split"><section class="panel"><div class="translation-tabs">${tabs.map(([key,en,zh])=>`<button type="button" class="chip ${key===state.translationTab?'active':''}" data-translation-tab="${key}">${state.lang==='en'?en:zh}</button>`).join('')}</div><div style="margin-top:24px">${panel}</div></section><aside class="summary"><p class="section-label">MORE THAN WORDS</p><h3>${state.lang==='en'?'Translation + cultural insight':'翻译 + 文化解读'}</h3><p class="muted">${state.lang==='en'?'A landmark name can lead to the story behind the place, not just a dictionary definition.':'从一个地名出发，继续了解它背后的故事。'}</p><p class="inline-note">${state.lang==='en'?'Prepared examples in this concept.':'本概念版使用预设示例。'}</p></aside></div>`
}

function locals()
{
  let filters = [
    ['all', 'All languages', '全部语言'],
    ['english', 'English', '英语'],
    ['french', 'French', '法语']
  ];
  let guides = [
  {
    name: 'Zhang',
    lang: 'english',
    icon: '张',
    detail: ['English · Japanese · Imperial Beijing', '英语 · 日语 · 中轴线'],
    price: 19
  },
  {
    name: 'Li',
    lang: 'french',
    icon: '李',
    detail: ['French · Spanish · Hutong walks', '法语 · 西班牙语 · 胡同漫步'],
    price: 24
  }].filter(g => state.guideFilter === 'all' || g.lang === state.guideFilter);
  return header('locals') + chips(filters, state.guideFilter, 'guide-filter') +
    `<div class="split"><div class="stack">${guides.map(g=>`<article class="panel"><div class="guide-row"><div class="guide-photo">${g.icon}</div><div><h3>${g.name}</h3><p class="muted small" style="margin:0">${tr(g.detail)}</p></div><strong>★ 4.9</strong></div><div class="item-bottom" style="display:flex;justify-content:space-between;align-items:center;margin-top:20px"><span class="price">$${g.price} <small class="muted" style="font-size:.8rem;font-weight:400">/ half day</small></span><button class="primary" data-guide="${g.name}" type="button">${state.lang==='en'?'Request guide':'预约咨询'}</button></div></article>`).join('')||`<div class="panel empty">${state.lang==='en'?'No guides for this filter.':'此筛选条件下暂无向导。'}</div>`}</div><aside class="summary"><p class="section-label">LOCAL CONNECTIONS</p><h3>${state.lang==='en'?'Meet the city through its people':'跟着当地人认识城市'}</h3><p class="muted">${state.lang==='en'?'Browse languages and themed routes, then send a sample request.':'按语言和主题路线筛选，体验预约流程。'}</p><p class="inline-note">${state.lang==='en'?'Profiles and requests shown here are illustrative.':'此处资料和预约均为演示内容。'}</p></aside></div>`
}

function shop()
{
  let filters = [
    ['all', 'All', '全部'],
    ['essentials', 'Essentials', '旅行必需'],
    ['gifts', 'Gifts', '特色礼物']
  ];
  let shown = state.shopFilter === 'all' ? ['esim', 'scarf', 'tea'] : state.shopFilter ===
    'essentials' ? ['esim'] : ['scarf', 'tea'];
  return header('shop') +
    `<div class="notice">${state.lang==='en'?'Tax refunds may be available for eligible purchases. Check current rules at the store and airport.':'符合条件的商品可能享受退税；请在商店和机场核对现行规定。'}</div>` +
    chips(filters, state.shopFilter, 'shop-filter') +
    `<div class="split"><div class="stack">${shown.map(itemCard).join('')}</div><aside class="summary"><p class="section-label">TRAVEL ESSENTIALS</p><h3>${state.lang==='en'?'Pick up what you need':'为旅程准备好物'}</h3><p class="muted">${state.lang==='en'?'Add products to your sample trip, then review them together.':'将商品加入示例行程，再一起查看。'}</p><button class="secondary" type="button" data-modal="trip">${t('myTrip')} →</button><p class="inline-note">${t('sample')}</p></aside></div>`
}

function tripModal()
{
  let sum = state.trip.reduce((total, e) => total + (items[e]?.price || (e.startsWith('package-') ? packageTotal(travelPackages.find(p => p.id === e.slice(8)) || { days: [] }) : 0)), 0);
  return `<p class="section-label">EASYGO</p><h2>${t('myTrip')}</h2>${state.trip.length?state.trip.map((id,i)=>{const pkg = id.startsWith('package-') && travelPackages.find(p => p.id === id.slice(8)); return `<div class="cart-line"><span>${items[id]?tr(items[id].name):pkg?tr(pkg.name):tr(routes.find(r=>r.id===id.slice(6))?.name||['Route','路线'])}</span><span>${items[id]?'$'+items[id].price.toFixed(2):pkg?'$'+packageTotal(pkg).toFixed(2):''} <button type="button" data-remove="${i}">${state.lang==='en'?'Remove':'移除'}</button></span></div>`}).join(''):`<div class="empty">${state.lang==='en'?'Your trip is empty. Explore routes or add a booking.':'行程还是空的，去挑选路线或预订项目吧。'}</div>`}<h3 style="margin-top:22px">${state.lang==='en'?'Sample total':'示例合计'} · $${sum.toFixed(2)}</h3><p class="inline-note">${t('sample')} ${state.lang==='en'?'Nothing is purchased or reserved.':'这里不会产生真实购买或预约。'}</p>`
}

function render()
{
  if (window.EasyGoMap) window.EasyGoMap.unmount();
  nav();
  content.innerHTML = (
  {
    home,
    guide,
    book,
    maps,
    translate,
    locals,
    shop
  })[state.page]();
  if (state.page === 'maps' && window.EasyGoMap) window.EasyGoMap.mount({ lang: state.lang });
  document.documentElement.lang = state.lang;
  window.scrollTo(
  {
    top: 0,
    behavior: 'instant'
  })
}

function toast(message)
{
  let el = document.getElementById('toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove('show'), 2400)
}

function showModal(html)
{
  document.getElementById('modalBody').innerHTML = html;
  const dialog = document.getElementById('modal');
  if (!dialog.open) dialog.showModal()
}
document.addEventListener('submit', event =>
{
  if (event.target.id !== 'packageSearch') return;
  event.preventDefault();
  state.bookQuery = document.getElementById('packageKeyword').value.trim();
  render();
});
document.addEventListener('click', e =>
{
  let btn = e.target.closest('button');
  if (!btn) return;
  let d = btn.dataset;
  if (d.page)
  {
    state.page = d.page;
    render()
  }
  else if (d.guideTab)
  {
    state.guideTab = d.guideTab;
    render()
  }
  else if (d.bookFilter)
  {
    state.bookFilter = d.bookFilter;
    render()
  }
  else if (d.route)
  {
    state.route = d.route;
    render()
  }
  else if (d.translationTab)
  {
    state.translationTab = d.translationTab;
    render()
  }
  else if (d.guideFilter)
  {
    state.guideFilter = d.guideFilter;
    render()
  }
  else if (d.shopFilter)
  {
    state.shopFilter = d.shopFilter;
    render()
  }
  else if (d.add || d.addRoute || d.addPackage)
  {
    let id = d.add || (d.addPackage ? 'package-' + d.addPackage : 'route-' + d.addRoute);
    state.trip.push(id);
    localStorage.setItem('easygo-trip', JSON.stringify(state.trip));
    nav();
    toast(t('added'))
  }
  else if (d.remove !== undefined)
  {
    state.trip.splice(Number(d.remove), 1);
    localStorage.setItem('easygo-trip', JSON.stringify(state.trip));
    nav();
    showModal(tripModal())
  }
  else if (d.modal === 'trip' || btn.id === 'tripButton')
  {
    showModal(tripModal())
  }
  else if (btn.id === 'feedbackButton')
  {
    showModal(`<h2>${t('feedback')}</h2><p class="muted">${state.lang === 'en' ? 'Write down the problem you found. This demo does not send messages yet; you can copy your text and share it with the project team.' : '写下遇到的问题。目前演示版不会自动发送反馈，你可以复制内容后发给项目组。'}</p><label for="feedbackText">${state.lang === 'en' ? 'Your feedback' : '反馈内容'}</label><textarea id="feedbackText" class="textarea" maxlength="1000" placeholder="${state.lang === 'en' ? 'Describe the page and the issue…' : '请描述页面和遇到的问题…'}"></textarea><button class="primary" id="copyFeedback" type="button">${state.lang === 'en' ? 'Copy feedback' : '复制反馈内容'}</button><p id="feedbackStatus" role="status"></p>`)
  }
  else if (btn.id === 'copyFeedback')
  {
    const input = document.getElementById('feedbackText');
    if (!input.value.trim()) { document.getElementById('feedbackStatus').textContent = state.lang === 'en' ? 'Please enter your feedback first.' : '请先填写反馈内容。'; return; }
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(input.value).then(() => { document.getElementById('feedbackStatus').textContent = state.lang === 'en' ? 'Copied. You can share it with the team.' : '已复制，可以发给项目组。'; }).catch(() => { input.select(); document.getElementById('feedbackStatus').textContent = state.lang === 'en' ? 'Select and copy your text with Ctrl+C.' : '已选中文字，请按 Ctrl+C 复制。'; });
    else { input.select(); document.getElementById('feedbackStatus').textContent = state.lang === 'en' ? 'Select and copy your text with Ctrl+C.' : '已选中文字，请按 Ctrl+C 复制。'; }
  }
  else if (btn.id === 'langToggle')
  {
    state.lang = state.lang === 'en' ? 'zh' : 'en';
    render()
  }
  else if (btn.id === 'conceptButton')
  {
    showModal(
      `<h2>${state.lang==='en'?'Original mobile concept':'原手机设计稿'}</h2><p class="muted">${state.lang==='en'?'The supplied mobile layouts informed this web concept.':'这个网页原型参考了你提供的手机布局。'}</p><img class="concept-image" src="assets/original-concept.png" alt="Original EasyGo mobile screen concepts">`
      )
  }
  else if (btn.id === 'closeModal')
  {
    document.getElementById('modal').close()
  }
  else if (btn.id === 'translateButton')
  {
    const value = document.getElementById('sourceText').value.trim();
    document.getElementById('translationResult').innerHTML =
      `<div class="result"><strong>${state.lang==='en'?'Example translation':'示例翻译'}</strong><br>${state.lang==='en'?'Where is the subway station?':'地铁站在哪里？'}<p class="inline-note">${state.lang==='en'?'This prepared example does not translate arbitrary text.':'这是预设示例，暂不翻译任意输入。'} ${value?`${state.lang==='en'?'You entered:':'你输入了：'}${escapeHTML(value)}`:''}</p></div>`
  }
  else if (btn.id === 'cameraExample' || btn.id === 'voiceExample')
  {
    let camera = btn.id === 'cameraExample';
    document.getElementById('translationResult').innerHTML =
      `<div class="result"><strong>${camera?'太和殿 · Hall of Supreme Harmony':state.lang==='en'?'请问地铁站在哪里？ · Where is the subway station?':'Where is the subway station? · 请问地铁站在哪里？'}</strong><p>${camera?(state.lang==='en'?'The ceremonial heart of the Forbidden City.':'故宫的礼制核心空间。'):(state.lang==='en'?'A useful phrase when asking for directions.':'问路时可以使用的句子。')}</p></div>`
  }
  else if (d.guide)
  {
    showModal(
      `<p class="section-label">LOCAL GUIDES</p><h2>${state.lang==='en'?'Request a guide':'预约向导咨询'} · ${d.guide}</h2><p class="muted">${state.lang==='en'?'This is a sample request. No message will be sent.':'这是预约流程演示，不会实际发送消息。'}</p><label class="field-label" for="requestDate">${state.lang==='en'?'Preferred date':'希望的日期'}</label><input id="requestDate" type="date" class="input"><button type="button" class="primary" id="requestSubmit" style="margin-top:16px">${state.lang==='en'?'Send sample request':'提交模拟预约'}</button>`
      )
  }
  else if (btn.id === 'requestSubmit')
  {
    document.getElementById('modal').close();
    toast(state.lang === 'en' ? 'Sample request received' : '模拟预约已提交')
  }
});
document.getElementById('modal').addEventListener('click', e =>
{
  if (e.target.id === 'modal') e.target.close()
});

function escapeHTML(s)
{
  return s.replace(/[&<>"']/g, c => (
  {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  } [c]))
}
render();
