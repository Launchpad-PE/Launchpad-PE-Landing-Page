export function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}
/**Pierina*/
export function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}
/**Pierina*/
export function initModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', e => {
      if (e.target === m) m.classList.remove('open');
    });
  });

  window.openModal = openModal;
  window.closeModal = closeModal;
}