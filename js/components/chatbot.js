const chatData = {
  registro: '🚀 Regístrate en <a href="https://collabus-frontend.vercel.app/" style="color:var(--accent);font-weight:700">foundly.pe</a> con tu correo. Es gratis y solo toma 2 minutos. Puedes elegir entre emprendedor o colaborador.',
  colaborar: '🤝 Explora los proyectos activos, filtra por categoría e intereses, y postula con tu perfil. El emprendedor revisará tu solicitud y te contactará.',
  iot: '📡 El Panel IoT permite ver datos de sensores en tiempo real dentro de la campaña. El emprendedor conecta su dispositivo vía MQTT o activa el modo demo.',
  planes: '💡 Si estás empezando, el Plan Gratuito es suficiente. Para proyectos serios o colaboradores frecuentes, el Premium a $5/mes desbloquea todo sin límites.'
};

/**Pierina*/
export function initChatbot() {
  const chatFab = document.getElementById('chatFab');
  const chatPopup = document.getElementById('chatPopup');
  const chatClose = document.getElementById('chatClose');

  chatFab?.addEventListener('click', () => chatPopup?.classList.toggle('open'));
  chatClose?.addEventListener('click', () => chatPopup?.classList.remove('open'));

  window.chatResponder = function(key) {
    const chatResponse = document.getElementById('chatResponse');
    if (chatResponse) {
      chatResponse.innerHTML = chatData[key];
      chatResponse.style.display = 'block';
    }
  };
}