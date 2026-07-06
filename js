// Menu mobile
const botaoMenu = document.getElementById('botao-menu');
const listaMenu = document.getElementById('lista-menu');

botaoMenu.addEventListener('click', () => {
    listaMenu.classList.toggle('aberto');
});

// Fechar menu ao clicar em um link
const linksMenu = listaMenu.querySelectorAll('a');
linksMenu.forEach(link => {
    link.addEventListener('click', () => {
        listaMenu.classList.remove('aberto');
    });
});

// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(ancora => {
    ancora.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            destino.scrollIntoView({ behavior: 'smooth' });
        }
    });
});