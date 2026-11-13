/* =============================================
   FixIt — Live Concierge Tracking JavaScript
   Leaflet Map, Animated Movement, ETA, Reviews
   ============================================= */

'use strict';

/* =============================================
   CONFIGURATION — Bangalore Region
   ============================================= */
const CONFIG = {
  customerLat: 12.9352,
  customerLng: 77.6244,
  techStartLat: 12.9580,
  techStartLng: 77.6008,
  journeyDuration: 120, // 120s smooth demo
  tileUrl: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  initialETA: 18,
  initialDist: 4.2,
  initialSpeed: 28,
};

/* =============================================
   READ URL PARAMS (booking data)
   ============================================= */
function getParam(key) {
  return new URLSearchParams(window.location.search).get(key) || null;
}

function loadBookingData() {
  const bookingId = getParam('id') || 'FX-247831';
  const service = getParam('service') || 'Plumbing';
  const techName = getParam('tech') || 'Rahul K.';
  const techRole = getParam('role') || 'Master Plumber';
  const address = getParam('address') || 'Koramangala, Bangalore';
  const time = getParam('time') || 'Today, 12:00 PM';

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setAttr = (id, attr, val) => { const el = document.getElementById(id); if (el) el[attr] = val; };

  set('navBookingRef', 'Booking: ' + bookingId);
  set('techName', techName);
  set('techRole', techRole);
  set('chatTechName', techName);
  set('callTechName', techName);
  set('serviceDetail', service);
  set('bookingRefDetail', bookingId);
  set('scheduledTime', time);
  set('customerLocationLabel', address);

  const imgMap = {
    plumbing: 'worker_plumber.jpg',
    electrical: 'worker_electrician.jpg',
    carpentry: 'worker_carpenter.jpg',
    ac: 'worker_plumber.jpg',
    painting: 'worker_carpenter.jpg',
    cleaning: 'worker_electrician.jpg'
  };
  const img = imgMap[service.toLowerCase()] || 'worker_plumber.jpg';
  setAttr('techAvatar', 'src', img);
  setAttr('chatTechImg', 'src', img);
  setAttr('callAvatarImg', 'src', img);
  setAttr('reviewAvatar', 'src', img);

  set('arrivalTechName', techName);
  set('reviewTechName', techName);
  set('reviewTechRole', `${techRole} • Booking ${bookingId}`);
  set('receiptBookingId', bookingId);

  const arrivalDate = new Date(Date.now() + 18 * 60 * 1000);
  set('arrivalTime', arrivalDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }));

  const now = new Date();
  const m = (offset) => {
    const d = new Date(now.getTime() - offset * 60 * 1000);
    return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  };
  set('tl-booked-time', m(10));
  set('tl-assigned-time', m(7));
  set('tl-enroute-time', m(4));
}

/* =============================================
   INITIALIZE MAP
   ============================================= */
let map, techMarker, customerMarker, routePolyline;
let currentLat = CONFIG.techStartLat;
let currentLng = CONFIG.techStartLng;

function initMap() {
  map = L.map('map', {
    center: [
      (CONFIG.techStartLat + CONFIG.customerLat) / 2,
      (CONFIG.techStartLng + CONFIG.customerLng) / 2
    ],
    zoom: 14,
    zoomControl: false,
    attributionControl: false
  });

  L.tileLayer(CONFIG.tileUrl, {
    maxZoom: 19,
    subdomains: 'abcd'
  }).addTo(map);

  // Customer Marker
  const customerIcon = L.divIcon({
    className: '',
    html: `<div style="position:relative;">
      <div class="customer-marker-icon">
        <div class="customer-marker-icon-inner">&#127968;</div>
      </div>
    </div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 32],
    popupAnchor: [0, -32]
  });

  customerMarker = L.marker([CONFIG.customerLat, CONFIG.customerLng], { icon: customerIcon }).addTo(map);
  customerMarker.bindPopup(`
    <div class="popup-tech-info">
      <div class="popup-tech-name">&#127968; Your Destination</div>
      <div class="popup-tech-detail">Koramangala, Bangalore</div>
    </div>
  `, { closeButton: false });

  // Specialist Marker
  techMarker = L.marker([currentLat, currentLng], { icon: createTechIcon() }).addTo(map);
  techMarker.bindPopup(`
    <div class="popup-tech-info">
      <div class="popup-tech-name">✦ Specialist En Route</div>
      <div class="popup-tech-detail" id="popupTechDetail">Travelling peacefully to you</div>
      <div class="popup-tech-eta" id="popupETA">Arrival: ~18 min</div>
    </div>
  `, { closeButton: false });
  techMarker.openPopup();

  // Route Line in Calm Sky Cyan
  routePolyline = L.polyline(
    [[currentLat, currentLng], [CONFIG.customerLat, CONFIG.customerLng]],
    {
      color: '#38bdf8',
      weight: 3.5,
      opacity: 0.75,
      dashArray: '8, 12',
      dashOffset: '0'
    }
  ).addTo(map);

  animateRouteDash();

  L.circle([CONFIG.customerLat, CONFIG.customerLng], {
    radius: 90,
    color: '#fb923c',
    fillColor: '#fb923c',
    fillOpacity: 0.08,
    weight: 1.5,
    opacity: 0.5
  }).addTo(map);

  document.getElementById('zoomIn').addEventListener('click', () => map.zoomIn());
  document.getElementById('zoomOut').addEventListener('click', () => map.zoomOut());
  document.getElementById('centerBtn').addEventListener('click', () => {
    map.flyTo([currentLat, currentLng], 15, { duration: 1.2 });
  });
}

function createTechIcon() {
  return L.divIcon({
    className: '',
    html: `<div style="position:relative;width:48px;height:48px;">
      <div class="tech-marker-pulse"></div>
      <div class="tech-marker-pulse2"></div>
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);">
        <div class="tech-marker-icon">
          <div class="tech-marker-icon-inner">&#128295;</div>
        </div>
      </div>
    </div>`,
    iconSize: [48, 48],
    iconAnchor: [24, 42],
    popupAnchor: [0, -44]
  });
}

function animateRouteDash() {
  let offset = 0;
  setInterval(() => {
    offset = (offset + 1) % 20;
    if (routePolyline) routePolyline.setStyle({ dashOffset: `${offset}` });
  }, 60);
}

/* =============================================
   ETA RING ANIMATION
   ============================================= */
function updateETARing(progress) {
  const ring = document.getElementById('etaRingFill');
  if (!ring) return;
  const circumference = 326.7;
  const filled = circumference * progress;
  ring.style.strokeDashoffset = circumference - filled;
}

/* =============================================
   SPECIALIST MOVEMENT SIMULATION
   ============================================= */
let journeyStartTime = null;
let journeyComplete = false;

function startJourney() {
  journeyStartTime = Date.now();
  requestAnimationFrame(journeyTick);
}

function journeyTick(timestamp) {
  if (!journeyStartTime || journeyComplete) return;

  const elapsed = (Date.now() - journeyStartTime) / 1000;
  const progress = Math.min(elapsed / CONFIG.journeyDuration, 1);

  const easedProgress = easeInOut(progress);
  currentLat = CONFIG.techStartLat + (CONFIG.customerLat - CONFIG.techStartLat) * easedProgress;
  currentLng = CONFIG.techStartLng + (CONFIG.customerLng - CONFIG.techStartLng) * easedProgress;

  if (techMarker) techMarker.setLatLng([currentLat, currentLng]);
  if (routePolyline) {
    routePolyline.setLatLngs([[currentLat, currentLng], [CONFIG.customerLat, CONFIG.customerLng]]);
  }

  updateETARing(easedProgress);

  const remainingMin = Math.ceil(CONFIG.initialETA * (1 - progress));
  const remainingDist = (CONFIG.initialDist * (1 - progress)).toFixed(1);

  const etaVal = document.getElementById('etaValue');
  const distVal = document.getElementById('distValue');
  const mapStatusText = document.getElementById('mapStatusText');
  const speedVal = document.getElementById('speedValue');

  if (etaVal) etaVal.textContent = Math.max(remainingMin, 0);
  if (distVal) distVal.textContent = Math.max(remainingDist, '0.0') + ' km';

  const speed = Math.round(20 + Math.random() * 12);
  if (speedVal) speedVal.textContent = progress > 0.85 ? Math.round(speed * 0.3) : speed;

  if (mapStatusText) {
    if (progress < 0.7) {
      mapStatusText.textContent = `Specialist moving — ${remainingDist} km away`;
    } else if (progress < 0.9) {
      mapStatusText.textContent = `Specialist arriving shortly — ${remainingDist} km`;
    } else {
      mapStatusText.textContent = `Specialist arriving at your door`;
    }
  }

  const popupETA = document.getElementById('popupETA');
  if (popupETA) popupETA.textContent = `Arrival: ~${Math.max(remainingMin, 0)} min`;

  if (progress >= 0.85 && !document.getElementById('tl-nearby').classList.contains('done')) {
    transitionTimeline('nearby');
  }

  if (progress >= 1) {
    journeyComplete = true;
    onTechnicianArrived();
    return;
  }

  if (map && progress % 0.1 < 0.01) {
    map.panTo([currentLat, currentLng], { animate: true, duration: 2 });
  }

  requestAnimationFrame(journeyTick);
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

/* =============================================
   TIMELINE UPDATES
   ============================================= */
function transitionTimeline(phase) {
  const now = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  if (phase === 'nearby') {
    const tl = document.getElementById('tl-nearby');
    const tlc = document.getElementById('tlc-3');
    const prev = document.getElementById('tl-enroute');
    const prevC = document.getElementById('tlc-2');

    if (tl) tl.classList.add('active');
    if (tlc) tlc.classList.add('active');
    if (prev) { prev.classList.remove('active'); prev.classList.add('done'); }
    if (prevC) { prevC.classList.remove('active'); prevC.classList.add('done'); }

    const t = document.getElementById('tl-nearby-time');
    if (t) t.textContent = now;

    const status = document.getElementById('currentStatus');
    if (status) status.textContent = 'Almost There';
    showNotification('✦ Specialist is less than 500m away!', 'cyan');
  }

  if (phase === 'arrived') {
    const tl = document.getElementById('tl-arrived');
    const tlc = document.getElementById('tlc-4');
    const prev = document.getElementById('tl-nearby');
    const prevC = document.getElementById('tlc-3');

    if (tl) tl.classList.add('done');
    if (tlc) tlc.classList.add('done');
    if (prev) { prev.classList.remove('active'); prev.classList.add('done'); }
    if (prevC) { prevC.classList.remove('active'); prevC.classList.add('done'); }

    const t = document.getElementById('tl-arrived-time');
    if (t) t.textContent = now;

    const status = document.getElementById('currentStatus');
    if (status) { status.textContent = 'Arrived'; status.style.color = '#34d399'; }
  }

  if (phase === 'completed') {
    const tl = document.getElementById('tl-completed');
    const tlc = document.getElementById('tlc-5');
    const prev = document.getElementById('tl-arrived');
    const prevC = document.getElementById('tlc-4');

    if (tl) tl.classList.add('done');
    if (tlc) tlc.classList.add('done');
    if (prev) { prev.classList.remove('active'); prev.classList.add('done'); }
    if (prevC) { prevC.classList.remove('active'); prevC.classList.add('done'); }

    const t = document.getElementById('tl-completed-time');
    if (t) t.textContent = now;

    const status = document.getElementById('currentStatus');
    if (status) { status.textContent = 'Completed'; status.style.color = '#34d399'; }
  }
}

/* =============================================
   TECHNICIAN ARRIVED HANDLER
   ============================================= */
function onTechnicianArrived() {
  transitionTimeline('arrived');

  if (techMarker) techMarker.setLatLng([CONFIG.customerLat, CONFIG.customerLng]);
  if (routePolyline) map.removeLayer(routePolyline);

  L.circle([CONFIG.customerLat, CONFIG.customerLng], {
    radius: 35,
    color: '#34d399',
    fillColor: '#34d399',
    fillOpacity: 0.15,
    weight: 2
  }).addTo(map);

  map.flyTo([CONFIG.customerLat, CONFIG.customerLng], 16, { duration: 1.5 });

  const eta = document.getElementById('etaValue');
  const dist = document.getElementById('distValue');
  const speed = document.getElementById('speedValue');
  const mapStatus = document.getElementById('mapStatusText');

  if (eta) { eta.textContent = '0'; eta.style.color = '#34d399'; }
  if (dist) dist.textContent = '0.0 km';
  if (speed) speed.textContent = '0';
  if (mapStatus) mapStatus.textContent = 'Specialist has arrived ✓';

  updateETARing(1);

  const completeSec = document.getElementById('completeActionSection');
  if (completeSec) completeSec.style.display = 'block';

  setTimeout(() => {
    const overlay = document.getElementById('arrivalOverlay');
    if (overlay) overlay.classList.add('active');
  }, 1000);

  showNotification('✦ Specialist has arrived at your door!', 'green');

  setTimeout(() => {
    addChatMessage("Hello! I've arrived at your location. Ready when you are. 🙂", 'received');
  }, 1800);
}

/* =============================================
   POST-ARRIVAL & SERVICE COMPLETION ACTIONS
   ============================================= */
function onArrivalAcknowledge() {
  const overlay = document.getElementById('arrivalOverlay');
  if (overlay) overlay.classList.remove('active');
  const status = document.getElementById('currentStatus');
  if (status) {
    status.textContent = 'In Progress';
    status.style.color = '#38bdf8';
  }
  const mapStatus = document.getElementById('mapStatusText');
  if (mapStatus) mapStatus.textContent = 'Service in progress with care';

  showNotification('✦ Specialist is at work. Relax while they handle everything!', 'cyan');
}

function fastForwardToCompletion() {
  if (journeyComplete) {
    triggerServiceCompletion();
    return;
  }
  journeyComplete = true;
  onTechnicianArrived();
  showNotification('⚡ Fast-forwarded to arrival!', 'cyan');
}

function triggerServiceCompletion() {
  const overlay = document.getElementById('arrivalOverlay');
  if (overlay) overlay.classList.remove('active');

  transitionTimeline('completed');

  const mapStatus = document.getElementById('mapStatusText');
  if (mapStatus) mapStatus.textContent = 'Service completed with care ✓';

  const completeBtn = document.getElementById('completeJobBtn');
  if (completeBtn) {
    completeBtn.innerHTML = '<span>✓ Service Completed</span>';
    completeBtn.style.background = '#34d399';
    completeBtn.style.color = '#0b0f19';
  }

  const hint = document.getElementById('completeHintText');
  if (hint) {
    hint.textContent = 'Reservation completed! Thank you for rating your FixIt specialist below.';
  }

  showNotification('✦ Service completed! Please leave your feedback.', 'green');

  setTimeout(() => {
    openReviewModal();
  }, 600);
}

/* =============================================
   REVIEW & RATING MODAL LOGIC
   ============================================= */
let currentRating = 5;
let selectedTags = [];
let selectedTip = 0;

const ratingLabels = {
  1: '1.0 — Needs Improvement',
  2: '2.0 — Fair',
  3: '3.0 — Good Service',
  4: '4.0 — Very Good!',
  5: '5.0 — Outstanding Experience!'
};

function initReviewWidget() {
  const starBtns = document.querySelectorAll('.star-rate-btn');
  const descriptor = document.getElementById('ratingDescriptor');

  starBtns.forEach((btn) => {
    const score = parseInt(btn.dataset.score, 10);

    btn.addEventListener('mouseenter', () => {
      highlightStars(score);
      if (descriptor) descriptor.textContent = ratingLabels[score] || `${score} Stars`;
    });

    btn.addEventListener('mouseleave', () => {
      highlightStars(currentRating);
      if (descriptor) descriptor.textContent = ratingLabels[currentRating] || `${currentRating} Stars`;
    });

    btn.addEventListener('click', () => {
      currentRating = score;
      highlightStars(currentRating);
      if (descriptor) descriptor.textContent = ratingLabels[currentRating] || `${currentRating} Stars`;
    });
  });

  highlightStars(currentRating);
  if (descriptor) descriptor.textContent = ratingLabels[currentRating];

  const tagPills = document.querySelectorAll('.tag-pill');
  tagPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pill.classList.toggle('active');
      const tag = pill.dataset.tag;
      if (pill.classList.contains('active')) {
        if (!selectedTags.includes(tag)) selectedTags.push(tag);
      } else {
        selectedTags = selectedTags.filter(t => t !== tag);
      }
    });
  });

  const tipChips = document.querySelectorAll('.tip-chip');
  tipChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      tipChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedTip = parseInt(chip.dataset.tip, 10) || 0;
    });
  });
}

function highlightStars(score) {
  const starBtns = document.querySelectorAll('.star-rate-btn');
  starBtns.forEach((btn) => {
    const s = parseInt(btn.dataset.score, 10);
    if (s <= score) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function openReviewModal() {
  const modal = document.getElementById('reviewModalOverlay');
  if (modal) modal.classList.add('active');
  initReviewWidget();
}

function closeReviewModal() {
  const modal = document.getElementById('reviewModalOverlay');
  if (modal) modal.classList.remove('active');
}

function submitReview() {
  const commentsInput = document.getElementById('reviewComments');
  const comments = commentsInput ? commentsInput.value.trim() : '';

  const bookingId = getParam('id') || 'FX-247831';
  const techName = getParam('tech') || 'Rahul K.';
  const service = getParam('service') || 'Plumbing';

  const reviewRecord = {
    bookingId,
    techName,
    service,
    rating: currentRating,
    tags: selectedTags,
    comments,
    tip: selectedTip,
    timestamp: new Date().toISOString()
  };
  try {
    localStorage.setItem('fixit_latest_review', JSON.stringify(reviewRecord));
  } catch (e) {}

  const formView = document.getElementById('reviewFormView');
  const successView = document.getElementById('reviewSuccessView');
  if (formView) formView.style.display = 'none';
  if (successView) successView.style.display = 'block';

  const starsDisplay = document.getElementById('submittedStarsRow');
  if (starsDisplay) {
    starsDisplay.textContent = '★'.repeat(currentRating) + '☆'.repeat(5 - currentRating);
  }

  const scoreText = document.getElementById('submittedScoreText');
  if (scoreText) {
    scoreText.textContent = `${currentRating}.0 / 5.0 • ${ratingLabels[currentRating] || 'Delighted'}`;
  }

  const quoteEl = document.getElementById('submittedQuote');
  if (quoteEl) {
    quoteEl.textContent = comments ? `"${comments}"` : `"Outstanding craftsmanship by ${techName}!"`;
  }

  const tagsRow = document.getElementById('submittedTagsRow');
  if (tagsRow) {
    tagsRow.innerHTML = '';
    const tagsToShow = selectedTags.length > 0 ? selectedTags : ['Verified Homeowner', 'Punctual & Clean'];
    tagsToShow.forEach(tag => {
      const badge = document.createElement('span');
      badge.style.cssText = `
        display: inline-block; padding: 4px 12px; font-size: 0.75rem;
        background: rgba(56, 189, 248, 0.12); color: #38bdf8;
        border-radius: 9999px; margin: 3px; font-weight: 500;
      `;
      badge.textContent = `✓ ${tag}`;
      tagsRow.appendChild(badge);
    });
  }

  const metaRef = document.getElementById('submittedMetaRef');
  if (metaRef) {
    metaRef.textContent = `Booking Ref: ${bookingId} • Service: ${service} • Verified`;
  }

  const receiptTip = document.getElementById('receiptTip');
  const receiptTotal = document.getElementById('receiptTotal');
  if (receiptTip) receiptTip.textContent = `₹${selectedTip}`;
  if (receiptTotal) receiptTotal.textContent = `₹${349 + selectedTip + 62}`;

  showNotification('✦ Review submitted! Thank you.', 'green');
}

function toggleReceipt() {
  const receipt = document.getElementById('receiptCard');
  if (receipt) {
    receipt.style.display = receipt.style.display === 'none' ? 'block' : 'none';
  }
}

/* =============================================
   NOTIFICATION TOAST (Calm Glass Capsule)
   ============================================= */
function showNotification(message, color = 'cyan') {
  const colorMap = {
    cyan: { bg: 'rgba(15, 23, 42, 0.9)', border: 'rgba(56, 189, 248, 0.35)', text: '#38bdf8' },
    green: { bg: 'rgba(15, 23, 42, 0.9)', border: 'rgba(52, 211, 153, 0.35)', text: '#34d399' },
    orange: { bg: 'rgba(15, 23, 42, 0.9)', border: 'rgba(251, 146, 60, 0.35)', text: '#fb923c' }
  };
  const c = colorMap[color] || colorMap.cyan;

  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed; top: 80px; right: 1.5rem;
    background: ${c.bg}; border: 1px solid ${c.border};
    backdrop-filter: blur(16px);
    color: ${c.text}; font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.82rem; font-weight: 600;
    padding: 10px 18px; border-radius: 9999px;
    z-index: 5000; max-width: 340px;
    box-shadow: 0 12px 32px rgba(0,0,0,0.5);
    animation: toastIn 0.35s cubic-bezier(0.16,1,0.3,1) forwards;
    cursor: pointer;
  `;
  toast.textContent = message;

  if (!document.getElementById('toastStyle')) {
    const s = document.createElement('style');
    s.id = 'toastStyle';
    s.textContent = `
      @keyframes toastIn { from { opacity:0; transform:translateY(-8px) scale(0.96); } to { opacity:1; transform:translateY(0) scale(1); } }
      @keyframes toastOut { from { opacity:1; transform:translateY(0); } to { opacity:0; transform:translateY(-8px); } }
    `;
    document.head.appendChild(s);
  }

  document.body.appendChild(toast);
  toast.addEventListener('click', () => toast.remove());

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* =============================================
   CHAT FUNCTIONS
   ============================================= */
function handleChat() {
  const popup = document.getElementById('chatPopup');
  if (popup) {
    popup.classList.toggle('active');
    popup.classList.toggle('open');
  }
}

function closeChat() {
  const popup = document.getElementById('chatPopup');
  if (popup) {
    popup.classList.remove('active');
    popup.classList.remove('open');
  }
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const messages = document.getElementById('chatMessages');
  if (!input || !messages) return;

  const text = input.value.trim();
  if (!text) return;

  addChatMessage(text, 'sent');
  input.value = '';

  setTimeout(() => {
    const replies = [
      'Understood! I will be at your door shortly. 👍',
      'Thank you for letting me know, see you soon!',
      'Got it, taking note of that right away!',
      'Almost there! Will ring the bell softly.'
    ];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    addChatMessage(reply, 'received');
  }, 1800);
}

function addChatMessage(text, type) {
  const messages = document.getElementById('chatMessages');
  if (!messages) return;

  const now = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const msg = document.createElement('div');
  msg.className = `chat-msg ${type}`;
  msg.innerHTML = `<span>${text}</span><span class="msg-time">${now}</span>`;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;

  if (type === 'received') {
    const popup = document.getElementById('chatPopup');
    if (popup && !popup.classList.contains('active')) {
      popup.classList.add('active');
      popup.classList.add('open');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
  }
});

/* =============================================
   CALL FUNCTIONS
   ============================================= */
let callTimer = null;

function handleCall() {
  const popup = document.getElementById('callPopup');
  if (popup) popup.classList.add('active');

  callTimer = setTimeout(() => {
    endCall();
    showNotification('📞 Concierge call concluded', 'cyan');
  }, 5000);
}

function endCall() {
  const popup = document.getElementById('callPopup');
  if (popup) popup.classList.remove('active');
  if (callTimer) clearTimeout(callTimer);
}

/* =============================================
   MAIN INIT
   ============================================= */
window.addEventListener('DOMContentLoaded', () => {
  loadBookingData();
  initMap();

  setTimeout(() => {
    startJourney();
    updateETARing(0);
    setTimeout(() => updateETARing(0.02), 500);
  }, 1000);

  setTimeout(() => {
    showNotification('✦ Specialist location locked — tracking live', 'cyan');
  }, 1500);

  if (getParam('autoComplete') === 'true') {
    setTimeout(() => {
      fastForwardToCompletion();
      setTimeout(() => {
        triggerServiceCompletion();
      }, 1000);
    }, 1800);
  }

  setInterval(() => {
    if (!journeyComplete) {
      const speedEl = document.getElementById('speedValue');
      if (speedEl && speedEl.textContent !== '0') {
        const base = parseInt(speedEl.textContent) || 28;
        const jitter = Math.round(base + (Math.random() - 0.5) * 6);
        speedEl.textContent = Math.max(8, Math.min(40, jitter));
      }
    }
  }, 3000);
});
