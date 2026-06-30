// Emojis de lírios e flores delicadas
const lilies = ['⚜️', '💮', '🌸', '🏵️'];

// Evento de clique na tela
document.addEventListener('click', (e) => {
    const count = 6; // Quantidade de flores por clique

    for (let i = 0; i < count; i++) {
        createLily(e.clientX, e.clientY);
    }
});

// Função que cria e anima cada flor
function createLily(x, y) {
    const lily = document.createElement('div');
    lily.classList.add('lily');
    
    lily.innerText = lilies[Math.floor(Math.random() * lilies.length)];
    
    const randomOffsetX = (Math.random() - 0.5) * 80;
    const randomOffsetY = (Math.random() - 0.5) * 80;
    lily.style.left = (x + randomOffsetX) + 'px';
    lily.style.top = (y + randomOffsetY) + 'px';
    
    const size = Math.random() * 15 + 18; 
    lily.style.fontSize = size + 'px';
    
    const duration = Math.random() * 2 + 2.5;
    lily.style.animationDuration = duration + 's';
    
    document.body.appendChild(lily);
    
    // Remove o elemento do HTML após o término da animação para não pesar a página
    setTimeout(() => {
        lily.remove();
    }, duration * 1000);
}
