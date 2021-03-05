const workTogetherMessage = getElementById('inquire');

workTogetherMessage.addEventListener('click', (e) => {
    overlay.className = 'email-send';
    overlay.style.display = 'flex';
    document.querySelector('h2').textContent = "Thanks for reaching out! Look forward to chatting soon!";
});