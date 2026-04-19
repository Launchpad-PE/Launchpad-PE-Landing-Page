function openModal(id) {
  var el = document.getElementById(id);
  if (el) el.classList.add('open');
}
function closeModal(id) {
  var el = document.getElementById(id);
  if (el) el.classList.remove('open');
}
document.querySelectorAll('.modal-overlay').forEach(function(m) {
  m.addEventListener('click', function(e) { if (e.target === m) m.classList.remove('open'); });
});
var hamburger = document.getElementById('hamburger');
var mobileDrawer = document.getElementById('mobileDrawer');
var drawerOverlay = document.getElementById('drawerOverlay');
function toggleDrawer(open) {
  if (!mobileDrawer || !hamburger) return;
  mobileDrawer.classList.toggle('open', open);
  hamburger.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}
if (hamburger) hamburger.addEventListener('click', function() { toggleDrawer(!mobileDrawer.classList.contains('open')); });
if (drawerOverlay) drawerOverlay.addEventListener('click', function() { toggleDrawer(false); });
if (mobileDrawer) mobileDrawer.querySelectorAll('a').forEach(function(a) { a.addEventListener('click', function() { toggleDrawer(false); }); });
(function() {
  var track = document.getElementById('proyectoTrack');
  if (!track) return;
  var cards = track.querySelectorAll('.proyecto-card');
  var currentIndex = 0;
  function visibleCount() { var w = window.innerWidth; if (w >= 1024) return 3; if (w >= 640) return 2; return 1; }
  function getCardWidth() { return cards[0] ? cards[0].offsetWidth + 24 : 0; }
  function maxIndex() { return Math.max(0, cards.length - visibleCount()); }
  function updateTrack() { track.style.transform = 'translateX(-' + (currentIndex * getCardWidth()) + 'px)'; track.style.transition = 'transform 0.5s cubic-bezier(.25,.46,.45,.94)'; }
  var carNext = document.getElementById('carNext');
  var carPrev = document.getElementById('carPrev');
  if (carNext) carNext.addEventListener('click', function() { currentIndex = currentIndex >= maxIndex() ? 0 : currentIndex + 1; updateTrack(); });
  if (carPrev) carPrev.addEventListener('click', function() { currentIndex = currentIndex <= 0 ? maxIndex() : currentIndex - 1; updateTrack(); });
  window.addEventListener('resize', function() { if (currentIndex > maxIndex()) currentIndex = maxIndex(); updateTrack(); });
  var interval = setInterval(function() { currentIndex = currentIndex >= maxIndex() ? 0 : currentIndex + 1; updateTrack(); }, 3800);
  track.addEventListener('mouseenter', function() { clearInterval(interval); });
  track.addEventListener('mouseleave', function() { interval = setInterval(function() { currentIndex = currentIndex >= maxIndex() ? 0 : currentIndex + 1; updateTrack(); }, 3800); });
})();
var chatFab = document.getElementById('chatFab');
var chatPopup = document.getElementById('chatPopup');
var chatClose = document.getElementById('chatClose');
if (chatFab) chatFab.addEventListener('click', function() { chatPopup.classList.toggle('open'); });
if (chatClose) chatClose.addEventListener('click', function() { chatPopup.classList.remove('open'); });
var chatData = {
  registro: '🚀 Regístrate con tu correo. Es gratis y solo toma 2 minutos.',
  colaborar: '🤝 Explora los proyectos activos, filtra por categoría y postula con tu perfil.',
  iot: '📡 El Panel IoT muestra datos de sensores en tiempo real dentro de la campaña.',
  planes: '💡 El Plan Gratuito es ideal para empezar. El Premium a $5/mes desbloquea todo sin límites.'
};
function chatResponder(key) {
  var el = document.getElementById('chatResponse');
  if (el) { el.innerHTML = chatData[key]; el.style.display = 'block'; }
}
function seleccionarPlan(plan) { window.location.href = ''; }
function rnd(min, max) { return (Math.random() * (max - min) + min).toFixed(1); }
setInterval(function() {
  var v = document.querySelectorAll('.iot-s-val');
  if (v[0]) v[0].innerHTML = rnd(400,430) + ' <span>ppm</span>';
  if (v[1]) v[1].innerHTML = rnd(15,25) + ' <span>µg/m³</span>';
  if (v[2]) v[2].innerHTML = rnd(20,26) + ' <span>°C</span>';
  if (v[3]) v[3].innerHTML = rnd(60,75) + ' <span>%</span>';
  var h = document.querySelectorAll('.sensor-cell .s-val');
  if (h[0]) h[0].innerHTML = Math.round(rnd(60,75)) + '<span>%</span>';
  if (h[1]) h[1].innerHTML = Math.round(rnd(20,25)) + '<span>°C</span>';
  if (h[2]) h[2].innerHTML = rnd(6.0,7.0);
  if (h[3]) h[3].innerHTML = Math.round(rnd(10,16)) + '<span>L/h</span>';
}, 5000);