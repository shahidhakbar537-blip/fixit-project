/* ==========================================================================
   AURELIA FIXIT — ULTRA-LUXURY HOME SERVICES & MECHANICS RADAR
   Full Real-Time Application Engine, GPS Telemetry & Verified Reviews
   ========================================================================== */

'use strict';

// ==========================================================================
// 1. DATA REPOSITORY & INITIAL APPLICATION STATE
// ==========================================================================
const FIXIT_DATA = {
  city: 'Bengaluru (Indiranagar)',
  customer: {
    name: 'Vikram Aditya',
    phone: '+91 98450 12891',
    address: 'Flat 402, Oakwood Manor, 12th Main Indiranagar, Bengaluru',
    lat: 12.9716,
    lng: 77.6412
  },

  // Verified Nearby Mechanics in Indiranagar / Bengaluru corridor
  nearbyMechanics: [
    {
      id: 'mech-1',
      name: 'Suresh Kumar',
      initials: 'SK',
      trade: 'ac',
      role: 'Master HVAC & Refrigeration Mechanic',
      category: 'Climate & AC Care',
      distance: '0.7 km away',
      distNum: 0.7,
      eta: '6 mins',
      etaMinutes: 6,
      vehicle: 'KA-03-ET-4821',
      rating: '4.98',
      reviews: 412,
      jobs: '1,420+ completed',
      phone: '+91 98450 48210',
      license: 'KA-2024-8891',
      badge: 'Govt. Grade-A Certified',
      lat: 12.9780,
      lng: 77.6445,
      icon: '❄️',
      status: 'Online • Available Now'
    },
    {
      id: 'mech-2',
      name: 'Ramesh Varma',
      initials: 'RV',
      trade: 'electrical',
      role: 'Senior Electrical Engineer & Circuits Lead',
      category: 'Power & Circuits',
      distance: '1.2 km away',
      distNum: 1.2,
      eta: '9 mins',
      etaMinutes: 9,
      vehicle: 'KA-04-MB-2219',
      rating: '4.95',
      reviews: 320,
      jobs: '980+ completed',
      phone: '+91 98450 22190',
      license: 'KA-2023-4102',
      badge: 'Govt. Licensed Wireman',
      lat: 12.9698,
      lng: 77.6360,
      icon: '⚡',
      status: 'Online • In Range'
    },
    {
      id: 'mech-3',
      name: 'Manjunath B.',
      initials: 'MB',
      trade: 'plumbing',
      role: 'Master Plumbing & Acoustic Leak Specialist',
      category: 'Water & Sanitary',
      distance: '1.8 km away',
      distNum: 1.8,
      eta: '12 mins',
      etaMinutes: 12,
      vehicle: 'KA-01-JK-7741',
      rating: '4.99',
      reviews: 580,
      jobs: '1,650+ completed',
      phone: '+91 98450 77410',
      license: 'KA-2022-9901',
      badge: 'Master Acoustic Diagnostic',
      lat: 12.9650,
      lng: 77.6490,
      icon: '🚿',
      status: 'Online • Available Now'
    },
    {
      id: 'mech-4',
      name: 'Anil Patil',
      initials: 'AP',
      trade: 'carpentry',
      role: 'Fine Woodcraft & Hardware Artisan',
      category: 'Woodcraft',
      distance: '2.4 km away',
      distNum: 2.4,
      eta: '15 mins',
      etaMinutes: 15,
      vehicle: 'KA-05-CX-5512',
      rating: '4.93',
      reviews: 290,
      jobs: '820+ completed',
      phone: '+91 98450 55120',
      license: 'KA-2024-1123',
      badge: 'Woodcraft Guild Certified',
      lat: 12.9810,
      lng: 77.6320,
      icon: '🪵',
      status: 'Online • In Range'
    },
    {
      id: 'mech-5',
      name: 'Deepak Sharma',
      initials: 'DS',
      trade: 'appliance',
      role: 'Appliance Diagnostics & Inverter Lead',
      category: 'Appliances',
      distance: '3.1 km away',
      distNum: 3.1,
      eta: '18 mins',
      etaMinutes: 18,
      vehicle: 'KA-51-MM-9034',
      rating: '4.91',
      reviews: 215,
      jobs: '650+ completed',
      phone: '+91 98450 90340',
      license: 'KA-2023-7728',
      badge: 'Inverter PCB Specialist',
      lat: 12.9620,
      lng: 77.6250,
      icon: '🧺',
      status: 'Online • In Range'
    },
    {
      id: 'mech-6',
      name: 'Farhan Qureshi',
      initials: 'FQ',
      trade: 'cleaning',
      role: 'Eco-Luxury Deep Sanitization Specialist',
      category: 'Deep Sanitization',
      distance: '1.4 km away',
      distNum: 1.4,
      eta: '10 mins',
      etaMinutes: 10,
      vehicle: 'KA-03-PL-3390',
      rating: '4.97',
      reviews: 340,
      jobs: '1,100+ completed',
      phone: '+91 98450 33900',
      license: 'KA-2024-5501',
      badge: 'Hospital-Grade Steam Certified',
      lat: 12.9730,
      lng: 77.6520,
      icon: '✨',
      status: 'Online • Available Now'
    }
  ],

  // Curated Services Catalog (Pure Vector Icons & Gradients - Zero AI Stock Images)
  services: [
    {
      id: 'ac',
      title: 'AC Repair & Servicing',
      tag: 'CLIMATE CARE',
      categoryHeadline: 'Climate & Refrigeration Systems',
      category: 'ac',
      price: 499,
      rating: '4.96',
      reviewsCount: 1420,
      icon: '❄️',
      desc: 'Deep chemical coil sanitization, eco-gas pressure diagnostic, power draw test & quiet compressor tune-up.',
      inclusions: [
        'Complete jet-spray filter & indoor coil sanitization',
        'Eco-refrigerant pressure & laser leak diagnostic test',
        'Whisper-quiet compressor tune-up & electrical draw check',
        '30-Day Happiness & Workmanship Guarantee'
      ],
      exclusions: [
        'Major compressor replacement parts (billed at transparent MRP)',
        'External copper piping extension beyond 3 meters'
      ],
      artisanId: 'mech-1'
    },
    {
      id: 'electrical',
      title: 'Electrical Repairs & Smart Fitments',
      tag: 'POWER & CIRCUITS',
      categoryHeadline: 'Electrical Infrastructure & Smart Power',
      category: 'electrical',
      price: 349,
      rating: '4.95',
      reviewsCount: 980,
      icon: '⚡',
      desc: 'Precision fault tracing, fuse/MCB diagnostic, smart switchboard installation & designer chandelier wiring.',
      inclusions: [
        'Laser-guided voltage, earth leakage & insulation testing',
        'MCB trip diagnostics & sub-panel safety audit',
        'Clean wiring dress & flame-retardant insulated fittings',
        '30-Day Workmanship Guarantee'
      ],
      exclusions: [
        'Civil masonry channeling beyond 2 meters',
        'Main BESCOM meter supply-line faults (statutory jurisdiction)'
      ],
      artisanId: 'mech-2'
    },
    {
      id: 'plumbing',
      title: 'Plumbing & Acoustic Leak Diagnostics',
      tag: 'WATER & SANITARY',
      categoryHeadline: 'Hydraulic Systems & Concealed Pipe Care',
      category: 'plumbing',
      price: 299,
      rating: '4.98',
      reviewsCount: 1650,
      icon: '🚿',
      desc: 'Acoustic leak detection, concealed pipe repair, sanitary fittings, pressure pumps & water heater descaling.',
      inclusions: [
        'Acoustic pipe leak diagnostic test with zero wall damage',
        'Complete seal replacement on high-pressure mixers & faucets',
        'Water pressure optimization & aerator sanitization',
        '30-Day No-Leak Revisit Guarantee'
      ],
      exclusions: [
        'Excavation of municipal intake piping outside residence compound'
      ],
      artisanId: 'mech-3'
    },
    {
      id: 'carpentry',
      title: 'Bespoke Carpentry & Restorations',
      tag: 'WOODCRAFT',
      categoryHeadline: 'Architectural Woodcraft & Hardware Care',
      category: 'carpentry',
      price: 399,
      rating: '4.97',
      reviewsCount: 820,
      icon: '🪵',
      desc: 'Soft-close hinge alignment, electronic digital door locks, teak polish refresh & custom wardrobe repairs.',
      inclusions: [
        'Precision level calibration & soft-close damper adjustment',
        'Hardware lubrication & anti-creak mechanical treatment',
        'Concealed magnetic latch realignment'
      ],
      exclusions: [
        'Custom raw lumber and imported veneer costs'
      ],
      artisanId: 'mech-4'
    },
    {
      id: 'appliance',
      title: 'Premium Appliance Care',
      tag: 'APPLIANCE',
      categoryHeadline: 'Household Electronics & Mechanical Inverters',
      category: 'appliance',
      price: 349,
      rating: '4.92',
      reviewsCount: 650,
      icon: '🧺',
      desc: 'Refrigerator inverter diagnostics, washing machine drain pump restoration & microwave calibration.',
      inclusions: [
        'Motor coil resistance check & inverter PCB inspection',
        'Drum vibration damper tuning & drive belt tensioning',
        'Thermostat temperature accuracy verification'
      ],
      exclusions: [
        'Imported logic PCB replacement board cost'
      ],
      artisanId: 'mech-5'
    },
    {
      id: 'cleaning',
      title: 'Eco-Luxury Deep Sanitization',
      tag: 'HYGIENE & RESTORATION',
      categoryHeadline: 'Deep Sanitization & Micro-Allergen Care',
      category: 'cleaning',
      price: 699,
      rating: '4.99',
      reviewsCount: 1100,
      icon: '✨',
      desc: 'High-temperature steam sanitization, organic citrus fabric refreshment, marble buffing & allergen neutralization.',
      inclusions: [
        'Hospital-grade steam extraction (140°C kill-rate for mites)',
        'Eco-certified organic sanitizers (child & pet safe)',
        'HEPA-13 air allergen filtration treatment'
      ],
      exclusions: [
        'External high-rise glass facade exterior washing'
      ],
      artisanId: 'mech-6'
    }
  ],

  // Verified Customer Reviews Feed (Populates #reviewsFeedGrid)
  verifiedReviews: [
    {
      id: 'rev-1',
      author: 'Ananya Deshmukh',
      location: '100ft Road, Indiranagar',
      avatar: 'AD',
      stars: 5,
      date: 'Yesterday',
      tags: ['Punctual & On-Time', 'Spotless Cleanliness', 'Expert Diagnostic'],
      quote: 'Suresh Kumar arrived in less than 10 minutes with complete diagnostic gauges. He discovered a hairline condenser leak that two other services had missed, repaired it cleanly, and restored ice-cold airflow. Incredibly polite and tidy.',
      mechanicName: 'Suresh Kumar',
      serviceTitle: 'AC Repair & Servicing'
    },
    {
      id: 'rev-2',
      author: 'Karthik Ramanathan',
      location: 'Koramangala 4th Block',
      avatar: 'KR',
      stars: 5,
      date: '2 days ago',
      tags: ['Transparent Pricing', 'Genuine Parts', 'Polite & Respectful'],
      quote: 'Ramesh traced an elusive tripping MCB in our duplex sub-panel within 15 minutes using an insulation multimeter. No unnecessary component replacements, total price was exactly what was quoted online.',
      mechanicName: 'Ramesh Varma',
      serviceTitle: 'Electrical Repairs & Smart Fitments'
    },
    {
      id: 'rev-3',
      author: 'Sunil & Preeti Mehta',
      location: 'Lavelle Road, Central Bengaluru',
      avatar: 'SM',
      stars: 5,
      date: '4 days ago',
      tags: ['Acoustic Detection', 'Zero Mess', 'Guaranteed Revisit'],
      quote: 'Manjunath diagnosed a concealed pipeline seepage behind our imported Italian tiles using acoustic sensors without damaging a single tile. He replaced the brass connector flawlessly.',
      mechanicName: 'Manjunath B.',
      serviceTitle: 'Plumbing & Acoustic Leak Diagnostics'
    },
    {
      id: 'rev-4',
      author: 'Dr. Radhika Sen',
      location: 'Sadashivanagar',
      avatar: 'RS',
      stars: 5,
      date: 'Last week',
      tags: ['Master Craftsmanship', 'Punctual & On-Time'],
      quote: 'Anil restored our custom Burma teak wardrobe doors and aligned the Blum soft-close dampers so smoothly. Truly artisan-level attention to detail.',
      mechanicName: 'Anil Patil',
      serviceTitle: 'Bespoke Carpentry & Restorations'
    }
  ],

  // Active Dispatch State
  activeBooking: {
    id: 'FX-918231',
    serviceTitle: 'AC Repair & Servicing',
    mechanic: null, // Will default to Suresh Kumar
    slotTime: 'Immediate Dispatch (ETA ~6 mins)',
    address: 'Flat 402, Oakwood Manor, 12th Main Indiranagar, Bengaluru',
    basePrice: 499,
    gst: 89.82,
    total: 588.82,
    stepIndex: 1, // 1: Dispatched, 2: En Route, 3: Arrived, 4: Completed
    tipAmount: 50
  },

  // Home Care Asset Vault
  assets: [
    {
      id: 'ast-1',
      name: 'Daikin 1.5T Inverter AC',
      location: 'Master Suite',
      category: 'Air Conditioner',
      warranty: 'Warranty Active',
      reminderLabel: 'Filter & coil sanitization due',
      daysDue: 14,
      progressPct: 75
    },
    {
      id: 'ast-2',
      name: 'Kent Grand Plus RO+UV',
      location: 'Kitchen Island',
      category: 'Water Purifier',
      warranty: 'Warranty Active',
      reminderLabel: 'Sediment & carbon cartridge check',
      daysDue: 38,
      progressPct: 40
    },
    {
      id: 'ast-3',
      name: 'Samsung 324L Double Door Refrigerator',
      location: 'Kitchen Pantry',
      category: 'Refrigerator',
      warranty: 'Standard Warranty',
      reminderLabel: 'Compressor health check optimal',
      daysDue: 90,
      progressPct: 15
    },
    {
      id: 'ast-4',
      name: 'Bosch 7kg Front Load Washer',
      location: 'Utility Balcony',
      category: 'Washing Machine',
      warranty: 'Extended Care',
      reminderLabel: 'Descaling cycle complete',
      daysDue: 120,
      progressPct: 5
    }
  ]
};

// Application State Variables
let selectedService = FIXIT_DATA.services[0];
let selectedMechanic = FIXIT_DATA.nearbyMechanics[0];
let activeSlotTime = 'Immediate Dispatch (ETA ~6-15 mins)';
let currentTradeFilter = 'all';
let userCurrentRating = 5;
let userSelectedTip = 50;

// Set default active booking mechanic
FIXIT_DATA.activeBooking.mechanic = FIXIT_DATA.nearbyMechanics[0];

// ==========================================================================
// 2. BACKGROUND AMBIENT PARTICLES CANVAS
// ==========================================================================
(function initAmbientParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  const palette = ['#F2AD55', '#D9C08A', '#FFFFFF', '#A7A7AC'];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.4,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.35 + 0.1,
      color: palette[Math.floor(Math.random() * palette.length)]
    };
  }

  function initPool() {
    particles = [];
    const count = Math.min(Math.floor((W * H) / 14000), 75);
    for (let i = 0; i < count; i++) particles.push(createParticle());
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H + 10) p.y = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', () => {
    resize();
    initPool();
  });

  resize();
  initPool();
  tick();
})();

// ==========================================================================
// 3. HEADER CONTROLS (City Picker, Notifications, Mobile Nav & Scrollspy)
// ==========================================================================
const cityBtn = document.getElementById('citySelectorBtn');
const cityMenu = document.getElementById('cityDropdownMenu');
const currentCityLabel = document.getElementById('currentCityLabel');

if (cityBtn && cityMenu) {
  cityBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    cityMenu.classList.toggle('active');
    document.getElementById('notificationDropdown')?.classList.remove('active');
  });

  cityMenu.querySelectorAll('.city-dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      cityMenu.querySelectorAll('.city-dropdown-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const selectedCity = item.dataset.city;
      FIXIT_DATA.city = selectedCity;
      if (currentCityLabel) currentCityLabel.textContent = selectedCity;
      cityMenu.classList.remove('active');

      // Update location status on map top bar
      const userLocLabel = document.getElementById('mapUserLocationLabel');
      if (userLocLabel) userLocLabel.textContent = `📍 Your Location: ${selectedCity}`;
      showToastNotification(`Switched service zone to ${selectedCity}`);
    });
  });
}

// Notifications
const notifBell = document.getElementById('btnNotificationBell');
const notifDropdown = document.getElementById('notificationDropdown');
const notifCount = document.getElementById('notifCount');
const btnMarkAllRead = document.getElementById('btnMarkAllRead');

if (notifBell && notifDropdown) {
  notifBell.addEventListener('click', (e) => {
    e.stopPropagation();
    notifDropdown.classList.toggle('active');
    cityMenu?.classList.remove('active');
  });

  btnMarkAllRead?.addEventListener('click', () => {
    document.querySelectorAll('.notif-item').forEach(item => item.classList.remove('unread'));
    if (notifCount) {
      notifCount.textContent = '0';
      notifCount.style.display = 'none';
    }
  });
}

// Close dropdowns on document click
document.addEventListener('click', () => {
  cityMenu?.classList.remove('active');
  notifDropdown?.classList.remove('active');
});

// Mobile menu drawer
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileNavDrawer = document.getElementById('mobileNavDrawer');

if (mobileMenuToggle && mobileNavDrawer) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileNavDrawer.classList.toggle('active');
  });
}

window.closeMobileMenu = function() {
  mobileNavDrawer?.classList.remove('active');
};

// Scrollspy for active navigation links
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 130;

  sections.forEach(sec => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.nav === id);
      });
    }
  });
});

// ==========================================================================
// 4. LIVE TELEMETRY & NEARBY MECHANICS RADAR (Leaflet Engine)
// ==========================================================================
let radarMap = null;
let userMarker = null;
let mechanicMarkers = {};
let activeRoutePolyline = null;

function initNearbyMechanicsMap() {
  const mapContainer = document.getElementById('nearbyMechanicsMap');
  if (!mapContainer || radarMap) return;

  const userLat = FIXIT_DATA.customer.lat;
  const userLng = FIXIT_DATA.customer.lng;

  // Initialize Leaflet Map centered between user and nearest mechanic
  radarMap = L.map('nearbyMechanicsMap', {
    zoomControl: true,
    attributionControl: false
  }).setView([userLat + 0.003, userLng], 14);

  // Carto Dark high-contrast luxury map layer
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    subdomains: 'abcd'
  }).addTo(radarMap);

  // Home GPS User Marker with radar wave
  const userIcon = L.divIcon({
    className: 'custom-leaflet-user',
    html: `
      <div class="user-gps-marker">
        <div class="user-radar-wave"></div>
        <span style="font-size:16px;">🏠</span>
      </div>
    `,
    iconSize: [42, 42],
    iconAnchor: [21, 21]
  });

  userMarker = L.marker([userLat, userLng], { icon: userIcon, zIndexOffset: 1000 }).addTo(radarMap);
  userMarker.bindPopup(`
    <div style="color:#101113; font-family:'Plus Jakarta Sans',sans-serif; padding:4px;">
      <strong style="font-size:13px;">Your Residence</strong><br>
      <span style="font-size:11px; color:#555;">${FIXIT_DATA.customer.address}</span>
    </div>
  `);

  // Render mechanic markers
  renderMechanicMapMarkers();

  // Highlight and draw route to default mechanic
  selectNearbyMechanic(selectedMechanic, false);
}

function renderMechanicMapMarkers() {
  if (!radarMap) return;

  // Remove existing markers
  Object.values(mechanicMarkers).forEach(m => radarMap.removeLayer(m));
  mechanicMarkers = {};

  const filtered = FIXIT_DATA.nearbyMechanics.filter(m => {
    return currentTradeFilter === 'all' || m.trade === currentTradeFilter;
  });

  filtered.forEach(m => {
    const isSelected = selectedMechanic && selectedMechanic.id === m.id;
    const pinHtml = `
      <div class="mechanic-radar-pin ${isSelected ? 'selected' : ''}" id="pin-${m.id}">
        <span class="pin-emoji">${m.icon}</span>
        <span class="pin-eta">${m.eta}</span>
      </div>
    `;

    const icon = L.divIcon({
      className: 'custom-leaflet-pin',
      html: pinHtml,
      iconSize: [60, 36],
      iconAnchor: [30, 34]
    });

    const marker = L.marker([m.lat, m.lng], { icon: icon }).addTo(radarMap);

    marker.on('click', () => {
      selectNearbyMechanic(m, true);
    });

    mechanicMarkers[m.id] = marker;
  });

  // Update counters
  const countBadge = document.getElementById('mapMechanicsCountBadge');
  const radarStatus = document.getElementById('radarStatusText');
  const heroCount = document.getElementById('heroActiveCountVal');

  if (countBadge) countBadge.textContent = `${filtered.length} Mechanics in Range`;
  if (radarStatus) radarStatus.textContent = `RADAR ACTIVE • ${filtered.length} MECHANICS ONLINE`;
  if (heroCount) heroCount.textContent = `${filtered.length} Near You`;
}

function selectNearbyMechanic(mech, panToTarget = true) {
  if (!mech) return;
  selectedMechanic = mech;

  // Update Floating Bottom Card on Map
  const avatarBadge = document.getElementById('mapSelectedAvatarBadge');
  const nameEl = document.getElementById('mapSelectedName');
  const distEl = document.getElementById('mapSelectedDist');
  const etaEl = document.getElementById('mapSelectedEta');
  const tradeEl = document.getElementById('mapSelectedTrade');

  if (avatarBadge) avatarBadge.textContent = mech.initials;
  if (nameEl) nameEl.textContent = mech.name;
  if (distEl) distEl.textContent = mech.distance;
  if (etaEl) etaEl.textContent = `ETA ~${mech.eta}`;
  if (tradeEl) tradeEl.textContent = `${mech.role} • Vehicle: ${mech.vehicle}`;

  // Update Directory List Highlight
  document.querySelectorAll('.mechanic-item-card').forEach(card => {
    card.classList.toggle('active', card.dataset.mechanicId === mech.id);
  });

  // Draw or update route polyline
  if (radarMap) {
    if (activeRoutePolyline) {
      radarMap.removeLayer(activeRoutePolyline);
    }

    const userLat = FIXIT_DATA.customer.lat;
    const userLng = FIXIT_DATA.customer.lng;

    // Curved waypoint realistic route
    const midLat = (userLat + mech.lat) / 2 + (mech.lat > userLat ? -0.001 : 0.001);
    const midLng = (userLng + mech.lng) / 2 + 0.002;

    activeRoutePolyline = L.polyline([
      [mech.lat, mech.lng],
      [midLat, midLng],
      [userLat, userLng]
    ], {
      color: '#F2AD55',
      weight: 4,
      opacity: 0.9,
      dashArray: '7, 9',
      lineCap: 'round'
    }).addTo(radarMap);

    if (panToTarget) {
      radarMap.flyTo([(userLat + mech.lat) / 2, (userLng + mech.lng) / 2], 14, {
        animate: true,
        duration: 0.6
      });
    }
  }

  // Sync with Service Studio tech card
  syncStudioMechanic(mech);
}

function renderNearbyMechanicsList(filterTrade = 'all') {
  currentTradeFilter = filterTrade;
  const listContainer = document.getElementById('nearbyMechanicsList');
  if (!listContainer) return;

  const filtered = FIXIT_DATA.nearbyMechanics.filter(m => {
    return filterTrade === 'all' || m.trade === filterTrade;
  });

  if (filtered.length === 0) {
    listContainer.innerHTML = `
      <div style="padding:2rem; text-align:center; color:var(--text-secondary); background:var(--bg-secondary); border-radius:var(--radius-md);">
        No mechanics currently online for this trade filter. Showing all available nearby specialists.
      </div>
    `;
    return;
  }

  listContainer.innerHTML = filtered.map(m => `
    <div class="mechanic-item-card ${selectedMechanic && selectedMechanic.id === m.id ? 'active' : ''}" data-mechanic-id="${m.id}">
      <div class="mcard-left">
        <div class="mechanic-avatar-badge">${m.initials}</div>
        <div class="mcard-info">
          <div class="mcard-name-row">
            <h4 class="mcard-name">${m.name}</h4>
            <span class="mcard-dist-pill">📍 ${m.distance}</span>
          </div>
          <span class="mcard-role">${m.role}</span>
          <span class="mcard-meta-line">★ ${m.rating} (${m.reviews} reviews) • ETA ~${m.eta}</span>
        </div>
      </div>
      <div class="mcard-right">
        <button class="btn-dispatch-m-item" onclick="event.stopPropagation(); triggerDispatchFromDirectory('${m.id}')">
          Dispatch →
        </button>
      </div>
    </div>
  `).join('');

  // Attach card click handlers
  listContainer.querySelectorAll('.mechanic-item-card').forEach(card => {
    card.addEventListener('click', () => {
      const mId = card.dataset.mechanicId;
      const found = FIXIT_DATA.nearbyMechanics.find(m => m.id === mId);
      if (found) {
        selectNearbyMechanic(found, true);
      }
    });
  });

  // Re-render map markers for the filter
  renderMechanicMapMarkers();
}

// Trade Filter Chips Click Handlers
document.querySelectorAll('#mechanicTradeFilters .mfilter-chip').forEach(chip => {
  chip.addEventListener('click', function() {
    document.querySelectorAll('#mechanicTradeFilters .mfilter-chip').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    const trade = this.dataset.trade;
    renderNearbyMechanicsList(trade);
  });
});

// GPS Detection Trigger Handlers
function executeGpsDetection() {
  const statusLabel = document.getElementById('mapUserLocationLabel');
  if (statusLabel) statusLabel.textContent = '📍 Acquiring high-precision GPS lock...';

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        FIXIT_DATA.customer.lat = lat;
        FIXIT_DATA.customer.lng = lng;

        if (userMarker) {
          userMarker.setLatLng([lat, lng]);
        }
        if (radarMap) {
          radarMap.flyTo([lat, lng], 15);
        }
        if (statusLabel) {
          statusLabel.textContent = `📍 GPS Locked: ${lat.toFixed(4)}° N, ${lng.toFixed(4)}° E • High Accuracy`;
        }
        showToastNotification('GPS location detected and locked. Nearby mechanics calibrated.');
      },
      (err) => {
        // Fallback to prime Bengaluru Indiranagar coordinates
        FIXIT_DATA.customer.lat = 12.9716;
        FIXIT_DATA.customer.lng = 77.6412;
        if (userMarker) userMarker.setLatLng([12.9716, 77.6412]);
        if (radarMap) radarMap.flyTo([12.9716, 77.6412], 14);
        if (statusLabel) {
          statusLabel.textContent = '📍 GPS Locked: Indiranagar 12th Main, Bengaluru (12.9716° N)';
        }
        showToastNotification('Location calibrated to Indiranagar, Bengaluru.');
      },
      { timeout: 5000, enableHighAccuracy: true }
    );
  } else {
    if (statusLabel) statusLabel.textContent = '📍 GPS Locked: Indiranagar, Bengaluru';
    showToastNotification('Location locked to Indiranagar.');
  }
}

document.getElementById('btnDetectGPS')?.addEventListener('click', executeGpsDetection);
document.getElementById('btnHeroLocateGPS')?.addEventListener('click', () => {
  executeGpsDetection();
  document.getElementById('nearby-mechanics')?.scrollIntoView({ behavior: 'smooth' });
});

// Hero Location Search Bar
document.getElementById('btnHeroSearchMechanics')?.addEventListener('click', () => {
  const query = document.getElementById('heroLocationSearch')?.value.trim();
  if (query) {
    const userLocLabel = document.getElementById('mapUserLocationLabel');
    if (userLocLabel) userLocLabel.textContent = `📍 Custom Area: ${query}, Bengaluru`;
    showToastNotification(`Scanning mechanics nearest to ${query}...`);
  }
  document.getElementById('nearby-mechanics')?.scrollIntoView({ behavior: 'smooth' });
});

// Refresh Radar Button
document.getElementById('btnRefreshMechanics')?.addEventListener('click', () => {
  showToastNotification('Scanning Bengaluru mesh network for newly active mechanics...');
  const radarStatus = document.getElementById('radarStatusText');
  if (radarStatus) radarStatus.textContent = 'RADAR SCANNING TELEMETRY...';
  setTimeout(() => {
    renderMechanicMapMarkers();
    showToastNotification('Radar refreshed: 5 certified mechanics active within 5 km.');
  }, 600);
});

// Quick Dispatch Button from Map Floating Card
document.getElementById('btnMapQuickDispatch')?.addEventListener('click', () => {
  if (selectedMechanic) {
    initiateDispatchFlow(selectedMechanic, selectedService);
  }
});

// Dispatch Trigger from Directory List Card
window.triggerDispatchFromDirectory = function(mechId) {
  const mech = FIXIT_DATA.nearbyMechanics.find(m => m.id === mechId);
  if (mech) {
    selectNearbyMechanic(mech, false);
    initiateDispatchFlow(mech, selectedService);
  }
};

// ==========================================================================
// 5. ACTIVE DISPATCH JOURNEY & REAL-TIME PROGRESSION
// ==========================================================================
function initiateDispatchFlow(mechanic, service) {
  const newBookingId = 'FX-' + Math.floor(200000 + Math.random() * 800000);
  const address = document.getElementById('studioCustomerAddress')?.value || FIXIT_DATA.customer.address;
  const price = service ? service.price : 499;
  const gst = Math.round(price * 0.18 * 100) / 100;
  const total = Math.round((price + gst) * 100) / 100;

  FIXIT_DATA.activeBooking = {
    id: newBookingId,
    serviceTitle: service ? service.title : 'AC Repair & Servicing',
    mechanic: mechanic,
    slotTime: 'Immediate Rapid Dispatch',
    address: address,
    basePrice: price,
    gst: gst,
    total: total,
    stepIndex: 1,
    tipAmount: 50
  };

  // Populate Active Dispatch Panel UI
  const panel = document.getElementById('activeDispatchPanel');
  const bHeader = document.getElementById('dispatchStatusHeader');
  const bId = document.getElementById('dispatchBookingId');
  const bAvatar = document.getElementById('dispatchAvatarBadge');
  const bName = document.getElementById('dispatchName');
  const bSub = document.getElementById('dispatchSub');
  const bEta = document.getElementById('dispatchEtaDisplay');
  const banner = document.getElementById('serviceCompletedBanner');

  if (bHeader) bHeader.textContent = 'DISPATCH IN PROGRESS • EN ROUTE';
  if (bId) bId.textContent = `Ref: ${newBookingId}`;
  if (bAvatar) bAvatar.textContent = mechanic.initials;
  if (bName) bName.textContent = mechanic.name;
  if (bSub) bSub.textContent = `${mechanic.role} • Vehicle: ${mechanic.vehicle}`;
  if (bEta) bEta.textContent = `Approaching your location • ETA ~${mechanic.eta}`;
  if (banner) banner.style.display = 'none';

  // Set Milestone Steps (Step 1 Completed, Step 2 Active)
  updateMilestoneStepsUI(1);

  // Reveal Active Dispatch Panel
  if (panel) {
    panel.style.display = 'flex';
  }

  // Scroll smoothly to radar section
  document.getElementById('nearby-mechanics')?.scrollIntoView({ behavior: 'smooth' });

  // Update Review Modal default placeholders for this booking
  updateReviewModalState(mechanic, service, newBookingId, total);

  showToastNotification(`Dispatched! ${mechanic.name} is on the way (ETA ${mechanic.eta}).`);
}

function updateMilestoneStepsUI(stepIndex) {
  // Step 1: Dispatched, Step 2: En Route, Step 3: Arrived, Step 4: Completed
  const s1 = document.getElementById('mStep1');
  const l1 = document.getElementById('mLine1');
  const s2 = document.getElementById('mStep2');
  const d2 = document.getElementById('mDot2');
  const l2 = document.getElementById('mLine2');
  const s3 = document.getElementById('mStep3');
  const d3 = document.getElementById('mDot3');
  const l3 = document.getElementById('mLine3');
  const s4 = document.getElementById('mStep4');
  const d4 = document.getElementById('mDot4');

  // Reset
  [s1, s2, s3, s4].forEach(s => s && s.classList.remove('completed', 'active'));
  [l1, l2, l3].forEach(l => l && l.classList.remove('completed'));

  if (stepIndex === 1) {
    s1?.classList.add('completed');
    l1?.classList.add('completed');
    s2?.classList.add('active');
    if (d2) d2.textContent = '2';
  } else if (stepIndex === 2) {
    // Arrived at Door
    s1?.classList.add('completed');
    l1?.classList.add('completed');
    s2?.classList.add('completed');
    if (d2) d2.textContent = '✓';
    l2?.classList.add('completed');
    s3?.classList.add('active');
    if (d3) d3.textContent = '3';
  } else if (stepIndex === 3) {
    // Completed
    s1?.classList.add('completed');
    l1?.classList.add('completed');
    s2?.classList.add('completed');
    if (d2) d2.textContent = '✓';
    l2?.classList.add('completed');
    s3?.classList.add('completed');
    if (d3) d3.textContent = '✓';
    l3?.classList.add('completed');
    s4?.classList.add('completed');
    if (d4) d4.textContent = '✓';
  }
}

// Prototype Live Service Simulation Trigger
window.simulateDispatchProgress = function(stepIdx) {
  const b = FIXIT_DATA.activeBooking;
  const mech = b.mechanic || selectedMechanic;
  const statusHeader = document.getElementById('dispatchStatusHeader');
  const etaDisplay = document.getElementById('dispatchEtaDisplay');
  const banner = document.getElementById('serviceCompletedBanner');

  if (stepIdx === 2) {
    // 1. Mark Arrived at Door
    b.stepIndex = 2;
    updateMilestoneStepsUI(2);

    if (statusHeader) {
      statusHeader.textContent = 'MECHANIC ARRIVED AT RESIDENCE';
      statusHeader.style.color = 'var(--accent-primary)';
    }
    if (etaDisplay) {
      etaDisplay.textContent = `Arrived at ${b.address} • Diagnostic & service underway`;
    }

    // Move mechanic marker on map directly to customer location
    if (mechanicMarkers[mech.id]) {
      mechanicMarkers[mech.id].setLatLng([FIXIT_DATA.customer.lat, FIXIT_DATA.customer.lng]);
    }

    showToastNotification(`${mech.name} has arrived at your residence! Service in progress.`);
  } else if (stepIdx === 3) {
    // 2. Complete Service & Leave Review
    b.stepIndex = 3;
    updateMilestoneStepsUI(3);

    if (statusHeader) {
      statusHeader.textContent = 'SERVICE DELIGHTFULLY COMPLETED';
      statusHeader.style.color = 'var(--success)';
    }
    if (etaDisplay) {
      etaDisplay.textContent = `Service completed & certified • 30-Day Happiness Guarantee Active`;
    }

    // Reveal Service Completed Banner
    if (banner) {
      banner.style.display = 'flex';
      const btnBanner = document.getElementById('btnOpenReviewBannerModal');
      if (btnBanner) btnBanner.textContent = `Rate & Review ${mech.name} →`;
    }

    // Automatically trigger Review Modal after smooth pause
    setTimeout(() => {
      openReviewModal();
    }, 450);

    showToastNotification('Service successfully completed! Please share your verified homeowner review.');
  }
};

// Dispatched Mechanic Direct Phone and Chat
document.getElementById('btnCallDispatchedMechanic')?.addEventListener('click', () => {
  const b = FIXIT_DATA.activeBooking;
  const mech = b.mechanic || selectedMechanic;
  alert(`Connecting to ${mech.name} via Aurelia encrypted concierge line:\n${mech.phone}`);
});

document.getElementById('btnChatDispatchedMechanic')?.addEventListener('click', () => {
  const b = FIXIT_DATA.activeBooking;
  const mech = b.mechanic || selectedMechanic;
  openConciergeChatModal(mech);
});

// ==========================================================================
// 6. POST-SERVICE RATING & VERIFIED CUSTOMER REVIEWS
// ==========================================================================
function updateReviewModalState(mechanic, service, bookingId, total) {
  const badge = document.getElementById('reviewMechanicAvatarBadge');
  const title = document.getElementById('reviewJobTitle');
  const subtitle = document.getElementById('reviewModalSubtitle');
  const submitBtn = document.getElementById('btnSubmitReview');

  const mechName = mechanic ? mechanic.name : 'Suresh Kumar';
  const svcTitle = service ? service.title : 'AC Repair & Servicing';

  if (badge) badge.textContent = mechanic ? mechanic.initials : 'SK';
  if (title) title.textContent = `${svcTitle} • ${mechName}`;
  if (subtitle) {
    subtitle.textContent = `Your feedback directly rewards ${mechName} and helps fellow Bengaluru homeowners.`;
  }
  if (submitBtn) {
    submitBtn.innerHTML = `
      <span>Publish Verified Review for ${mechName}</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    `;
  }
}

function openReviewModal() {
  const modal = document.getElementById('ratingReviewModal');
  const b = FIXIT_DATA.activeBooking;
  const mech = b.mechanic || selectedMechanic;
  updateReviewModalState(mech, selectedService, b.id, b.total);
  modal?.classList.add('active');
}

// Close review modal
document.getElementById('btnCloseReviewModal')?.addEventListener('click', () => {
  document.getElementById('ratingReviewModal')?.classList.remove('active');
});

// Banner review button
document.getElementById('btnOpenReviewBannerModal')?.addEventListener('click', openReviewModal);

// Manual write review button
document.getElementById('btnWriteReviewManual')?.addEventListener('click', openReviewModal);

// Interactive Star Rating Clicks
const starScoreDescriptions = {
  1: '1.0 — Unsatisfactory & Needs Rectification',
  2: '2.0 — Below Expectations',
  3: '3.0 — Satisfactory & Prompt',
  4: '4.0 — Very Good & Professional',
  5: '5.0 — Exceptional Service & Craftsmanship!'
};

document.querySelectorAll('#starRatingGroup .star-rating-item').forEach(star => {
  star.addEventListener('click', function() {
    const val = parseInt(this.dataset.val, 10);
    userCurrentRating = val;

    // Update stars appearance
    document.querySelectorAll('#starRatingGroup .star-rating-item').forEach(s => {
      const sVal = parseInt(s.dataset.val, 10);
      s.classList.toggle('active', sVal <= val);
    });

    // Update descriptive label
    const label = document.getElementById('starScoreLabel');
    if (label && starScoreDescriptions[val]) {
      label.textContent = starScoreDescriptions[val];
    }
  });
});

// Compliment Chips Toggle
document.querySelectorAll('#complimentChipsGroup .comp-chip').forEach(chip => {
  chip.addEventListener('click', function() {
    this.classList.toggle('selected');
  });
});

// Tip Options Chips Toggle
document.querySelectorAll('#tipOptionsRow .tip-chip').forEach(chip => {
  chip.addEventListener('click', function() {
    document.querySelectorAll('#tipOptionsRow .tip-chip').forEach(c => c.classList.remove('active'));
    this.classList.add('active');
    userSelectedTip = parseInt(this.dataset.tip, 10);
  });
});

// Submit Review Handler
document.getElementById('btnSubmitReview')?.addEventListener('click', () => {
  const b = FIXIT_DATA.activeBooking;
  const mech = b.mechanic || selectedMechanic;
  const commentInput = document.getElementById('reviewCommentInput');
  const commentText = commentInput ? commentInput.value.trim() : '';

  // Gather selected compliment tags
  const selectedTags = [];
  document.querySelectorAll('#complimentChipsGroup .comp-chip.selected').forEach(c => {
    selectedTags.push(c.dataset.tag || c.textContent.trim());
  });

  if (selectedTags.length === 0) {
    selectedTags.push('Punctual & On-Time', 'Verified Quality');
  }

  // Create new verified review item
  const newReview = {
    id: 'rev-' + Date.now(),
    author: `${FIXIT_DATA.customer.name} (You)`,
    location: FIXIT_DATA.customer.address.split(',')[1]?.trim() || 'Indiranagar, Bengaluru',
    avatar: 'VA',
    stars: userCurrentRating,
    date: 'Just now',
    tags: selectedTags,
    quote: commentText || `${mech.name} did an outstanding job with prompt diagnostic and flawless execution. Highly recommended!`,
    mechanicName: mech.name,
    serviceTitle: b.serviceTitle || selectedService.title,
    isNewUserReview: true
  };

  // Add to top of dataset
  FIXIT_DATA.verifiedReviews.unshift(newReview);

  // Re-render Reviews Grid
  renderReviewsFeed();

  // Close Modal
  document.getElementById('ratingReviewModal')?.classList.remove('active');

  // Reset Input
  if (commentInput) commentInput.value = '';

  // Scroll to verified reviews section
  document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });

  // Confirmation Toast
  showToastNotification(`★ Verified Review Published! 30-Day Workmanship Warranty Activated.`);
});

// Render Verified Reviews Feed into #reviewsFeedGrid
function renderReviewsFeed() {
  const container = document.getElementById('reviewsFeedGrid');
  if (!container) return;

  container.innerHTML = FIXIT_DATA.verifiedReviews.map(r => {
    const starString = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
    const newClass = r.isNewUserReview ? 'new-user-review' : '';
    const tagsHtml = r.tags.map(t => `<span class="rc-tag">${t}</span>`).join('');

    return `
      <div class="review-card ${newClass}" data-review-id="${r.id}">
        <div class="rc-top">
          <div class="rc-author">
            <div class="rc-avatar">${r.avatar}</div>
            <div class="rc-meta">
              <span class="rc-name">${r.author}</span>
              <span class="rc-loc">${r.location}</span>
            </div>
          </div>
          <span class="rc-badge">✓ Verified Homeowner</span>
        </div>

        <div class="rc-stars-row">
          <span class="rc-stars">${starString}</span>
          <span class="rc-date">${r.date}</span>
        </div>

        <div class="rc-tags">
          ${tagsHtml}
        </div>

        <p class="rc-quote">"${r.quote}"</p>

        <div class="rc-mechanic-tag">
          Serviced by <strong>${r.mechanicName}</strong> • ${r.serviceTitle}
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================================================
// 7. CURATED SERVICES CATALOG & INTERACTIVE BOOKING STUDIO
// ==========================================================================
function renderServicesCatalog(filterCategory = 'all', searchQuery = '') {
  const grid = document.getElementById('servicesCatalogGrid');
  if (!grid) return;

  const query = searchQuery.toLowerCase().trim();
  const filtered = FIXIT_DATA.services.filter(svc => {
    const matchesCategory = filterCategory === 'all' || svc.category === filterCategory || svc.id === filterCategory;
    const matchesSearch = !query ||
      svc.title.toLowerCase().includes(query) ||
      svc.desc.toLowerCase().includes(query) ||
      svc.tag.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 2.5rem; text-align:center; background:var(--bg-card); border-radius:var(--radius-lg); border:1px solid var(--border);">
        <div style="font-size:2rem; margin-bottom:0.5rem;">🔍</div>
        <h4 style="font-size:1.1rem; color:var(--text-primary); margin-bottom:0.35rem;">No matching services found</h4>
        <p style="font-size:0.85rem; color:var(--text-secondary);">Try searching for "AC", "electrical", "leak", or "sanitization".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(svc => `
    <div class="catalog-card ${svc.id === selectedService.id ? 'active' : ''}" data-service-id="${svc.id}">
      <div class="catalog-card-top">
        <div class="catalog-icon-wrap">${svc.icon}</div>
        <span class="catalog-price-badge">From ₹${svc.price}</span>
      </div>
      <div>
        <h4 class="catalog-card-title">${svc.title}</h4>
        <p class="catalog-card-desc">${svc.desc}</p>
      </div>
      <div class="catalog-card-meta">
        <span class="catalog-rating">★ ${svc.rating} (${svc.reviewsCount})</span>
        <span class="catalog-select-label">Select &amp; Book →</span>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.catalog-card').forEach(card => {
    card.addEventListener('click', () => {
      const sId = card.dataset.serviceId;
      const found = FIXIT_DATA.services.find(s => s.id === sId);
      if (found) {
        selectService(found);
      }
    });
  });
}

function selectService(svc) {
  selectedService = svc;

  // Highlight active card in grid
  document.querySelectorAll('.catalog-card').forEach(card => {
    card.classList.toggle('active', card.dataset.serviceId === svc.id);
  });

  // Find nearest mechanic for this trade
  const matchingMechanic = FIXIT_DATA.nearbyMechanics.find(m => m.trade === svc.category) || FIXIT_DATA.nearbyMechanics[0];

  // Update Studio Display
  const heroIcon = document.getElementById('studioHeroIcon');
  const headlineEl = document.getElementById('studioHeroCategoryHeadline');
  const tagEl = document.getElementById('studioServiceTag');
  const titleEl = document.getElementById('studioServiceTitle');
  const ratingEl = document.getElementById('studioRatingVal');
  const reviewsEl = document.getElementById('studioReviewsCount');
  const priceValEl = document.getElementById('studioPriceVal');
  const descEl = document.getElementById('studioServiceDesc');

  if (heroIcon) heroIcon.textContent = svc.icon;
  if (headlineEl) headlineEl.textContent = svc.categoryHeadline;
  if (tagEl) tagEl.textContent = svc.tag;
  if (titleEl) titleEl.textContent = svc.title;
  if (ratingEl) ratingEl.textContent = svc.rating;
  if (reviewsEl) reviewsEl.textContent = svc.reviewsCount;
  if (priceValEl) priceValEl.textContent = `₹${svc.price}`;
  if (descEl) descEl.textContent = svc.desc;

  // Sync Studio Mechanic Info
  syncStudioMechanic(matchingMechanic);

  // Populate Inclusions & Exclusions
  const inclusionsContainer = document.getElementById('studioInclusionsList');
  if (inclusionsContainer) {
    const incHtml = svc.inclusions.map(inc => `
      <div class="inclusion-line"><span class="inc-check">✓</span><span>${inc}</span></div>
    `).join('');
    const excHtml = svc.exclusions.map(exc => `
      <div class="inclusion-line"><span class="inc-cross">✕</span><span style="color:var(--text-muted);">${exc}</span></div>
    `).join('');
    inclusionsContainer.innerHTML = incHtml + excHtml;
  }

  // Calculate Transparent Bill
  const base = svc.price;
  const gst = Math.round(base * 0.18 * 100) / 100;
  const total = Math.round((base + gst) * 100) / 100;

  const billBaseFare = document.getElementById('billBaseFare');
  const billGstVal = document.getElementById('billGstVal');
  const billTotalVal = document.getElementById('billTotalVal');

  if (billBaseFare) billBaseFare.textContent = `₹${base}.00`;
  if (billGstVal) billGstVal.textContent = `₹${gst.toFixed(2)}`;
  if (billTotalVal) billTotalVal.textContent = `₹${total.toFixed(2)}`;
}

function syncStudioMechanic(mech) {
  if (!mech) return;
  const techAvatarBadge = document.getElementById('studioTechAvatarBadge');
  const techName = document.getElementById('studioTechName');
  const techDist = document.getElementById('studioTechDistanceBadge');
  const techRole = document.getElementById('studioTechRole');
  const techLicense = document.getElementById('studioTechLicense');

  if (techAvatarBadge) techAvatarBadge.textContent = mech.initials;
  if (techName) techName.textContent = mech.name;
  if (techDist) techDist.textContent = `📍 ${mech.distance}`;
  if (techRole) techRole.textContent = `${mech.role} • ETA ~${mech.eta}`;
  if (techLicense) techLicense.textContent = `${mech.license} • 99.4% On-time`;
}

// Category filter tabs
document.querySelectorAll('#serviceCategoryPills .cat-pill').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#serviceCategoryPills .cat-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderServicesCatalog(btn.dataset.cat);
  });
});

// Hero Quick Filter Tags
document.querySelectorAll('#heroQuickTags .qtag-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#heroQuickTags .qtag-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('#serviceCategoryPills .cat-pill').forEach(b => {
      b.classList.toggle('active', b.dataset.cat === filter);
    });
    renderServicesCatalog(filter);
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Slot selector chips
document.querySelectorAll('#studioSlotsGrid .studio-slot-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#studioSlotsGrid .studio-slot-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeSlotTime = btn.dataset.slot;
  });
});

// Booking Submission Handler from Studio
const btnConfirmBookingStudio = document.getElementById('btnConfirmBookingStudio');
const bookingConfirmModal = document.getElementById('bookingConfirmModal');
const btnCloseConfirmModal = document.getElementById('btnCloseConfirmModal');
const btnGoToTrackingModal = document.getElementById('btnGoToTrackingModal');

btnConfirmBookingStudio?.addEventListener('click', () => {
  const matchingMechanic = FIXIT_DATA.nearbyMechanics.find(m => m.trade === selectedService.category) || selectedMechanic;
  initiateDispatchFlow(matchingMechanic, selectedService);

  // Populate Booking Confirmation Modal
  const b = FIXIT_DATA.activeBooking;
  const mRef = document.getElementById('modalBookingIdText');
  const mArtisan = document.getElementById('modalArtisanName');
  const mSlot = document.getElementById('modalSlotTime');
  const mTitle = document.getElementById('modalServiceTitle');
  const mAddr = document.getElementById('modalAddressVal');
  const mPrice = document.getElementById('modalPriceVal');

  if (mRef) mRef.textContent = `Reference: ${b.id}`;
  if (mArtisan) mArtisan.textContent = matchingMechanic.name;
  if (mSlot) mSlot.textContent = activeSlotTime;
  if (mTitle) mTitle.textContent = selectedService.title;
  if (mAddr) mAddr.textContent = b.address;
  if (mPrice) mPrice.textContent = `₹${b.total.toFixed(2)}`;

  bookingConfirmModal?.classList.add('active');
});

btnCloseConfirmModal?.addEventListener('click', () => {
  bookingConfirmModal?.classList.remove('active');
});

btnGoToTrackingModal?.addEventListener('click', () => {
  bookingConfirmModal?.classList.remove('active');
  document.getElementById('nearby-mechanics')?.scrollIntoView({ behavior: 'smooth' });
});

// View Full Credentials from Studio
document.getElementById('btnStudioViewPro')?.addEventListener('click', () => {
  const matchingMechanic = FIXIT_DATA.nearbyMechanics.find(m => m.trade === selectedService.category) || selectedMechanic;
  openArtisanModal(matchingMechanic);
});

// View Profile button inside the card
document.getElementById('btnViewCredentialsBtn')?.addEventListener('click', (e) => {
  e.stopPropagation();
  const matchingMechanic = FIXIT_DATA.nearbyMechanics.find(m => m.trade === selectedService.category) || selectedMechanic;
  openArtisanModal(matchingMechanic);
});

// ==========================================================================
// 8. MECHANIC DETAILS & PROFILE CREDENTIALS MODAL
// ==========================================================================
const artisanProfileModal = document.getElementById('artisanProfileModal');
const btnCloseArtisanModal = document.getElementById('btnCloseArtisanModal');
const btnSelectFromProfileModal = document.getElementById('btnSelectFromProfileModal');

function openArtisanModal(mech) {
  if (!mech) return;
  const avatarBadge = document.getElementById('modalArtisanAvatarBadge');
  const fullTitle = document.getElementById('modalArtisanFullTitle');
  const badge = document.getElementById('modalArtisanBadge');
  const ratingEl = document.getElementById('modalMechanicRating');
  const distEl = document.getElementById('modalMechanicDistance');
  const etaEl = document.getElementById('modalMechanicEta');

  if (avatarBadge) avatarBadge.textContent = mech.initials;
  if (fullTitle) fullTitle.textContent = mech.name;
  if (badge) badge.textContent = `${mech.role} • Verified`;
  if (ratingEl) ratingEl.textContent = `${mech.rating} ★`;
  if (distEl) distEl.textContent = mech.distance;
  if (etaEl) etaEl.textContent = mech.eta;

  if (btnSelectFromProfileModal) {
    btnSelectFromProfileModal.onclick = () => {
      artisanProfileModal?.classList.remove('active');
      selectNearbyMechanic(mech, true);
      initiateDispatchFlow(mech, selectedService);
    };
  }

  artisanProfileModal?.classList.add('active');
}

btnCloseArtisanModal?.addEventListener('click', () => {
  artisanProfileModal?.classList.remove('active');
});

// ==========================================================================
// 9. AI HOME TRIAGE & EMERGENCY HAZARD DIAGNOSTIC
// ==========================================================================
function diagnoseProblem(description) {
  const lower = description.toLowerCase();

  // Safety Hazard Checks (Immediate priority)
  if (lower.includes('spark') || lower.includes('fire') || lower.includes('shock') || lower.includes('smoke') || lower.includes('smell gas') || lower.includes('burning')) {
    document.getElementById('safetyAlertModal')?.classList.add('active');
    const hazardBanner = document.getElementById('aiHazardBanner');
    if (hazardBanner) hazardBanner.style.display = 'flex';

    return {
      hazard: true,
      category: 'Electrical Repairs & Smart Fitments',
      confidence: '99% Urgent Hazard',
      headline: 'CRITICAL: Thermal Arcing or Gas Leak Risk Detected',
      explanation: 'Active arcing, sparks, or burning polymer odors indicate breakdown of electrical conduit insulation. Immediate current isolation is required.',
      action: '1. Switch off main circuit breaker (MCB) immediately. 2. A verified emergency technician has been prioritized.',
      priceRange: '₹349 (Priority emergency dispatch)'
    };
  }

  // Normal diagnoses
  if (lower.includes('leak') || lower.includes('pipe') || lower.includes('tap') || lower.includes('faucet') || lower.includes('drain') || lower.includes('flush')) {
    return {
      hazard: false,
      category: 'Plumbing & Acoustic Leak Diagnostics',
      confidence: '95% Confidence',
      headline: 'Likely: Concealed O-ring degradation or water hammer pressure spike',
      explanation: 'Acoustic resonance patterns match high-pressure hydraulic cartridge failure. Water loss can compromise adjoining subflooring if unaddressed.',
      action: 'Acoustic pipe testing & ceramic disc cartridge seal replacement.',
      priceRange: '₹299 - ₹499 (Flat diagnostic rate)'
    };
  }

  if (lower.includes('ac') || lower.includes('cool') || lower.includes('chilling') || lower.includes('air conditioner') || lower.includes('filter')) {
    return {
      hazard: false,
      category: 'AC Repair & Servicing',
      confidence: '94% Confidence',
      headline: 'Likely: Micro-dust evaporator clogging or low refrigerant gas',
      explanation: 'Warm air output and humming sounds correlate with evaporator airflow restriction and differential refrigerant pressure.',
      action: 'Jet-spray foam deep sanitization & eco-gas pressure diagnostic.',
      priceRange: '₹499 (Complete tune-up)'
    };
  }

  if (lower.includes('door') || lower.includes('hinge') || lower.includes('wood') || lower.includes('wardrobe') || lower.includes('drawer') || lower.includes('cabinet')) {
    return {
      hazard: false,
      category: 'Bespoke Carpentry & Restorations',
      confidence: '91% Confidence',
      headline: 'Likely: Misaligned soft-close hinge damper or humidity wood expansion',
      explanation: 'Seasonal humidity changes cause modular cabinet shutters to swell, putting excess friction on pivot hinges.',
      action: 'Master wood artisan for laser level realignment & hardware lubrication.',
      priceRange: '₹399 - ₹599 (Full alignment)'
    };
  }

  if (lower.includes('wash') || lower.includes('machine') || lower.includes('fridge') || lower.includes('refrigerator') || lower.includes('appliance') || lower.includes('oven')) {
    return {
      hazard: false,
      category: 'Premium Appliance Care',
      confidence: '86% Confidence',
      headline: 'Likely: Motor start capacitor or drain pump impeller obstruction',
      explanation: 'Symptoms point to mechanical friction in the rotary assembly or an electrical relay contact delay.',
      action: 'Appliance engineer for multi-meter electrical load audit.',
      priceRange: '₹349 - ₹599 (Comprehensive audit)'
    };
  }

  // Default Eco-Luxury Deep Sanitization
  return {
    hazard: false,
    category: 'Eco-Luxury Deep Sanitization',
    confidence: '84% Confidence',
    headline: 'Likely: Allergen accumulation or seasonal surface degradation',
    explanation: 'Environmental fine dust and particulate buildup require high-temperature pressurized steam extraction and anti-microbial treatment.',
    action: 'Schedule hygiene specialist for organic steam extraction.',
    priceRange: '₹699 - ₹1,199 (Complete residence)'
  };
}

function runAiDiagnosisExecution(text) {
  const res = diagnoseProblem(text);

  const catEl = document.getElementById('diagCategory');
  const confEl = document.getElementById('diagConfidence');
  const headEl = document.getElementById('diagHeadline');
  const expEl = document.getElementById('diagExplanation');
  const actEl = document.getElementById('diagAction');
  const priceEl = document.getElementById('diagPriceRange');

  if (catEl) catEl.textContent = res.category;
  if (confEl) confEl.textContent = res.confidence;
  if (headEl) headEl.textContent = res.headline;
  if (expEl) expEl.textContent = res.explanation;
  if (actEl) actEl.textContent = res.action;
  if (priceEl) priceEl.textContent = res.priceRange;

  const btnBookFromAi = document.getElementById('btnBookFromAi');
  if (btnBookFromAi) {
    btnBookFromAi.onclick = () => {
      const matched = FIXIT_DATA.services.find(s =>
        res.category.toLowerCase().includes(s.title.toLowerCase().split(' ')[0])
      ) || FIXIT_DATA.services[0];
      selectService(matched);
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    };
  }
}

// AI Diagnostic Event Listeners
document.getElementById('btnRunDiagnosis')?.addEventListener('click', () => {
  const input = document.getElementById('aiProblemInput')?.value.trim();
  if (!input) {
    alert('Please describe your household issue in the text area first.');
    return;
  }
  runAiDiagnosisExecution(input);
});

// Sample Query Chips
document.querySelectorAll('.sample-chip').forEach(chip => {
  chip.addEventListener('click', function() {
    const query = this.dataset.query;
    const input = document.getElementById('aiProblemInput');
    if (input) input.value = query;
    runAiDiagnosisExecution(query);
  });
});

// Visual Photo Upload Simulation
document.getElementById('btnAiUploadPhoto')?.addEventListener('click', () => {
  showToastNotification('Visual Diagnostic Scanner: Photo uploaded & neural telemetry analyzed.');
});

// Safety Modal Close
document.getElementById('btnCloseSafetyModal')?.addEventListener('click', () => {
  document.getElementById('safetyAlertModal')?.classList.remove('active');
});
document.getElementById('btnAcknowledgeSafety')?.addEventListener('click', () => {
  document.getElementById('safetyAlertModal')?.classList.remove('active');
});

// ==========================================================================
// 10. IN-APP CONCIERGE CHAT DRAWER
// ==========================================================================
function openConciergeChatModal(mech) {
  const modal = document.getElementById('chatModal');
  const avatarBadge = document.getElementById('chatAvatarBadge');
  const nameEl = document.getElementById('chatName');

  if (avatarBadge) avatarBadge.textContent = mech.initials;
  if (nameEl) nameEl.textContent = mech.name;

  modal?.classList.add('active');
}

document.getElementById('btnCloseChatModal')?.addEventListener('click', () => {
  document.getElementById('chatModal')?.classList.remove('active');
});

document.getElementById('chatForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('chatInputText');
  const msg = input.value.trim();
  if (!msg) return;

  const container = document.getElementById('chatMessages');
  const userBubble = document.createElement('div');
  userBubble.className = 'chat-bubble customer';
  userBubble.textContent = msg;
  container.appendChild(userBubble);
  input.value = '';
  container.scrollTop = container.scrollHeight;

  const b = FIXIT_DATA.activeBooking;
  const mechName = b.mechanic ? b.mechanic.name : 'Suresh Kumar';

  setTimeout(() => {
    const techBubble = document.createElement('div');
    techBubble.className = 'chat-bubble artisan';
    techBubble.textContent = `Received Vikram! I am en route on Indiranagar 100ft road with precision diagnostic gear. See you shortly.`;
    container.appendChild(techBubble);
    container.scrollTop = container.scrollHeight;
  }, 1000);
});

// ==========================================================================
// 11. HOME CARE ASSET VAULT & WARRANTY REGISTRY
// ==========================================================================
function renderAssetVault() {
  const container = document.getElementById('vaultAssetsGrid');
  const totalAssetsNum = document.getElementById('vaultTotalAssets');
  if (!container) return;

  if (totalAssetsNum) totalAssetsNum.textContent = FIXIT_DATA.assets.length;

  container.innerHTML = FIXIT_DATA.assets.map(ast => `
    <div class="vault-card" data-asset-id="${ast.id}">
      <div class="vault-card-top">
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <div class="vault-asset-icon">🛡️</div>
          <div>
            <h4 class="vault-asset-title">${ast.name}</h4>
            <span class="vault-asset-location">${ast.location} • ${ast.category}</span>
          </div>
        </div>
        <span class="vault-warranty-tag">${ast.warranty}</span>
      </div>

      <div class="vault-progress-block">
        <div class="vault-progress-meta">
          <span class="vault-reminder-lbl">${ast.reminderLabel}</span>
          <span class="vault-days-due">In ${ast.daysDue} days</span>
        </div>
        <div class="vault-track">
          <div class="vault-fill" style="width: ${ast.progressPct}%;"></div>
        </div>
      </div>

      <button class="btn-schedule-asset" onclick="scheduleRoutineAssetService('${ast.name}', '${ast.category}')">
        <span>Schedule Routine Service</span>
        <span>→</span>
      </button>
    </div>
  `).join('');
}

window.scheduleRoutineAssetService = function(assetName, category) {
  showToastNotification(`Scheduling routine service for ${assetName}...`);
  const matched = FIXIT_DATA.services.find(s =>
    s.title.toLowerCase().includes(category.toLowerCase().split(' ')[0])
  ) || FIXIT_DATA.services[0];
  selectService(matched);
  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
};

// Add Asset Modal
const btnRegisterNewAsset = document.getElementById('btnRegisterNewAsset');
const addAssetModal = document.getElementById('addAssetModal');
const btnCloseAddAsset = document.getElementById('btnCloseAddAsset');
const addAssetForm = document.getElementById('addAssetForm');

btnRegisterNewAsset?.addEventListener('click', () => {
  addAssetModal?.classList.add('active');
});

btnCloseAddAsset?.addEventListener('click', () => {
  addAssetModal?.classList.remove('active');
});

addAssetForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const cat = document.getElementById('assetCategoryInput').value;
  const model = document.getElementById('assetModelInput').value;
  const loc = document.getElementById('assetLocationInput').value;

  const newAsset = {
    id: 'ast-' + Date.now(),
    name: model,
    location: loc,
    category: cat,
    warranty: 'Owner Registered',
    reminderLabel: 'Automated 90-day preventive flush scheduled',
    daysDue: 90,
    progressPct: 15
  };

  FIXIT_DATA.assets.unshift(newAsset);
  renderAssetVault();
  addAssetModal?.classList.remove('active');
  addAssetForm.reset();
  showToastNotification(`${model} successfully added to your Care Vault!`);
});

// ==========================================================================
// 12. ADMINISTRATOR OPERATIONS CONSOLE
// ==========================================================================
window.adminApproveTech = function(name) {
  showToastNotification(`${name} approved! Background clearance certificate signed.`);
  const rows = document.querySelectorAll('#adminVerificationTableBody tr');
  rows.forEach(r => {
    if (r.textContent.includes(name)) {
      r.remove();
    }
  });

  const remaining = document.querySelectorAll('#adminVerificationTableBody tr').length;
  const badge = document.getElementById('verificationQueueBadge');
  if (badge) badge.textContent = `${remaining} Pending Review`;

  const kpiArtisans = document.getElementById('adminKpiArtisans');
  if (kpiArtisans) {
    const current = parseInt(kpiArtisans.textContent, 10) || 28;
    kpiArtisans.textContent = current + 1;
  }
};

// ==========================================================================
// 13. TOAST NOTIFICATION UTILITY
// ==========================================================================
function showToastNotification(message) {
  // Check if existing toast container exists
  let toastContainer = document.getElementById('appToastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'appToastContainer';
    toastContainer.style.position = 'fixed';
    toastContainer.style.bottom = '24px';
    toastContainer.style.right = '24px';
    toastContainer.style.zIndex = '99999';
    toastContainer.style.display = 'flex';
    toastContainer.style.flexDirection = 'column';
    toastContainer.style.gap = '8px';
    toastContainer.style.pointerEvents = 'none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.style.background = '#1A1B22';
  toast.style.color = '#FFFFFF';
  toast.style.border = '1px solid #F2AD55';
  toast.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.6)';
  toast.style.borderRadius = '12px';
  toast.style.padding = '12px 18px';
  toast.style.fontSize = '0.85rem';
  toast.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
  toast.style.fontWeight = '600';
  toast.style.display = 'flex';
  toast.style.alignItems = 'center';
  toast.style.gap = '10px';
  toast.style.pointerEvents = 'auto';
  toast.style.opacity = '0';
  toast.style.transform = 'translateY(12px)';
  toast.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';

  toast.innerHTML = `
    <span style="color:#F2AD55; font-size:1.1rem;">✦</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Animate In
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });

  // Remove after 3.8 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    setTimeout(() => {
      toast.remove();
    }, 350);
  }, 3800);
}

// ==========================================================================
// 14. BOOTSTRAP INITIALIZATION ON DOM READY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Render Nearby Mechanics Directory
  renderNearbyMechanicsList('all');

  // Render Services Catalog & Booking Studio
  renderServicesCatalog('all');
  selectService(FIXIT_DATA.services[0]);

  // Render Customer Reviews Feed
  renderReviewsFeed();

  // Render Asset Vault
  renderAssetVault();

  // Initialize Leaflet Radar Map after DOM layout stabilizes
  setTimeout(() => {
    initNearbyMechanicsMap();
  }, 250);
});
