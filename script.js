// CONFIGURAÇÃO - COLOQUE SUAS INFORMAÇÕES AQUI

// Data de início do relacionamento (ano, mês, dia)
// Mês em JS: 0 = Janeiro, 1 = Fevereiro... então 2 = Março (se for março, use 2)
const startDate = new Date(2026, 3, 4); // ALTERE: coloque a data que começaram

// Frases especiais
const quotes = [
    { text: "Ele é ruizinho de bíblia.", date: "2026" },
    { text: "Que o Senhor seja o centro desse relacionamento.", date: "2026" },
    { text: "Se você não faz acontecer, você vê acontecendo.", date: "2026" },
    { text: "A vida com você é melhor que um filme.", date: "2026" },
    { text: "Mete a cara.", date: "2026" },
    { text: "Permanecer um ao lado do outro não importa o que aconteça.", date: "2026" },
    { text: "Da minha parte, há sempre uma entrelinha escrita 'eu amo você'.", date: "2026" },
    { text: "O resto virá naturalmnte. O ponto não é o que se faz, é com quem se faz." , date: "2026" },
    { text: "Só se arrisca quem quer viver o extraordinário." , date: "2026" },
    { text: "A variável 'distância' é muito pequena perto da variável 'vontade'" , date: "2026" },
    
    // ADICIONE MAIS FRASES AQUI
];

// Datas importantes
const importantDates = [
    { date: "14/02/2026", event: "🎉 Klabin - 'Você é perfeccionista'" },
    { date: "28/03/2026", event: "🎉 Klabin - 'Eu gosto do batman" },
    { date: "14/03/2026", event: "🎉 Interrogatório com a Gabi - 'Quais são os seus planos com a minha irmã?'" },
    { date: "15/03/2026", event: "🎉 Primeiro encontro - 'Eu te amo' - Conhecendo a família" },
    { date: "04/04/2026", event: "🎉 Pedido de Namoro - 'Crente não namora!'" },
    { date: "04/05/2026", event: "🎉 Aniversário de namoro (1º mês)" }
    // ADICIONE MAIS DATAS AQUI
];

// Fotos - Coloque suas fotos na pasta images/
const photos = [
    { src: "img/01.jpeg", caption: "Nosso primeiro Piquenique 💕" },
    { src: "img/02.jpeg", caption: "Eu amo 'Panco'" },
    { src: "img/03.jpeg", caption: "Casal 20" },
    { src: "img/04.jpeg", caption: "Passeio no parque 🌳" },
    { src: "img/05.jpeg", caption: "Contei alguma barbaridade 📸" },
    { src: "img/06.jpeg", caption: "Amo você ❤️" },
    { src: "img/07.jpeg", caption: "Pareço um cego? ❤️" },
    { src: "img/08.jpeg", caption: "Querida, deixa eu te contar ❤️" },
    { src: "img/09.jpeg", caption: "Suporte - Uma mochila ❤️" },
    { src: "img/10.jpeg", caption: "Primeiro Date - Inimigo do sorriso (mudando), mas ele estava feliz! ❤️" },
    { src: "img/11.jpeg", caption: "Conhecendo a família! ❤️" },
    { src: "img/12.jpeg", caption: "Obrigado Via Mobilidade ❤️" },
    { src: "img/13.jpeg", caption: "Faltou a bíblia embaixo - 'Cultuando com ele' ❤️" },
    { src: "img/14.jpeg", caption: "Pedido de Namoro' ❤️" },
    { src: "img/16.jpeg", caption: "Para o Post' ❤️" },
    { src: "img/17.jpeg", caption: "Obrigado Via Mobilidade' ❤️" },
    { src: "img/18.jpeg", caption: "Aniversário! - 'Kennya Faltou' ❤️"}
    // ADICIONE MAIS FOTOS AQUI
];


// Calcular dias juntos
function updateDaysCounter() {
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('daysCounter').textContent = diffDays;
}

// Carregar frases
function loadQuotes() {
    const quotesGrid = document.getElementById('quotesGrid');
    quotesGrid.innerHTML = quotes.map(quote => `
        <div class="quote-card" onclick="showToast('${quote.text.replace(/'/g, "\\'")}')">
            <p class="quote-text">"${quote.text}"</p>
            <p class="quote-date">✨ ${quote.date}</p>
        </div>
    `).join('');
}

// Carregar timeline de datas
function loadTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = importantDates.map(item => `
        <div class="timeline-item" onclick="showToast('${item.event} em ${item.date}')">
            <div class="timeline-date">📅 ${item.date}</div>
            <div class="timeline-event">${item.event}</div>
        </div>
    `).join('');
}

// Carregar galeria de fotos
function loadGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = photos.map((photo, index) => `
        <div class="gallery-item" onclick="openModal(${index})">
            <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
            <div class="gallery-overlay">
                <p class="gallery-caption">${photo.caption}</p>
            </div>
        </div>
    `).join('');
}

// Modal para fotos
function openModal(index) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('modalCaption');
    
    modal.style.display = "block";
    modalImg.src = photos[index].src;
    caption.innerHTML = photos[index].caption;
}

// Fechar modal
document.getElementById('modalClose').onclick = function() {
    document.getElementById('imageModal').style.display = "none";
}

document.getElementById('imageModal').onclick = function(e) {
    if (e.target === this) {
        this.style.display = "none";
    }
}

// Toast simples (alert bonitinho)
function showToast(message) {
    // Criar elemento toast
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 12px 24px;
        border-radius: 50px;
        font-size: 14px;
        z-index: 2000;
        animation: fadeInUp 0.3s ease;
        white-space: nowrap;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 2000);
}

// Adicionar estilo da animação do toast
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translate(-50%, 20px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
`;
document.head.appendChild(style);

// Inicializar
updateDaysCounter();
loadQuotes();
loadTimeline();
loadGallery();