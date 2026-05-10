// CONFIGURAÇÃO - COLOQUE SUAS INFORMAÇÕES AQUI

// Data de início do relacionamento (ano, mês, dia)
const startDate = new Date(2026, 3, 4);

// Frases especiais
const quotes = [
    { text: "Ele é ruinzinho de bíblia.", date: "2026" },
    { text: "Que o Senhor seja o Centro desse Relacionamento.", date: "2026" },
    { text: "Se você não faz acontecer, você vê acontecendo.", date: "2026" },
    { text: "A vida com você é melhor que um filme.", date: "2026" },
    { text: "Mete a cara.", date: "2026" },
    { text: "Permanecer um ao lado do outro não importa o que aconteça.", date: "2026" },
    { text: "Da minha parte, há sempre uma entrelinha escrita 'eu amo você'.", date: "2026" },
    { text: "O resto virá naturalmente. O ponto não é o que se faz, é com quem se faz.", date: "2026" },
    { text: "Só se arrisca quem quer viver o extraordinário.", date: "2026" },
    { text: "A variável 'distância' é muito pequena perto da variável 'vontade'", date: "2026" },
];

// Datas importantes
const importantDates = [
    { date: "14/02/2026", event: "🎉 Klabin - 'Você é perfeccionista'" },
    { date: "28/03/2026", event: "🎉 Klabin - 'Eu gosto do batman'" },
    { date: "14/03/2026", event: "🎉 Interrogatório com a Gabi - 'Quais são os seus planos com a minha irmã?'" },
    { date: "15/03/2026", event: "🎉 Primeiro encontro - 'Eu te amo' - Conhecendo a família" },
    { date: "04/04/2026", event: "🎉 Pedido de Namoro - 'Crente não namora!'" },
    { date: "04/05/2026", event: "🎉 Aniversário de namoro (1º mês)" }
];

// Fotos
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
];

// ============================================
// PLAYER DE MÚSICA - VERSÃO MOBILE/DESKTOP
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Criar player de boas-vindas
    const playerHTML = `
        <div class="welcome-player" id="welcomePlayer">
            <div class="welcome-card">
                <span class="welcome-icon">🎵</span>
                <h3>Toque para ouvir a música especial</h3>
                <button class="welcome-btn" id="startMusicBtn">▶️ Tocar Música</button>
                <p class="welcome-hint">Clique no botão para ativar o som</p>
            </div>
        </div>
        <video id="bgMusic" class="bg-video-player" loop playsinline>
            <source src="DeDeus.mp4" type="video/mp4">
        </video>
        <div class="music-note" id="musicNote" style="display: none;">
            <span id="musicNoteIcon">🎵</span>
            <div class="music-tooltip" id="musicTooltip">Música tocando!</div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', playerHTML);
    
    const welcomePlayer = document.getElementById('welcomePlayer');
    const startMusicBtn = document.getElementById('startMusicBtn');
    const musicNote = document.getElementById('musicNote');
    const musicNoteIcon = document.getElementById('musicNoteIcon');
    const musicTooltip = document.getElementById('musicTooltip');
    const bgMusic = document.getElementById('bgMusic');
    
    let isPlaying = false;
    
    if (bgMusic) {
        bgMusic.volume = 0.4;
    }
    
    function startMusic() {
        if (bgMusic) {
            bgMusic.play().then(() => {
                isPlaying = true;
                musicNoteIcon.textContent = '🎵';
                musicTooltip.textContent = 'Música tocando!';
                musicNote.classList.add('playing');
                welcomePlayer.style.display = 'none';
                musicNote.style.display = 'flex';
                console.log('🎵 Música iniciada!');
            }).catch((error) => {
                console.log('Erro:', error);
                alert('Clique novamente no botão para tocar a música!');
            });
        }
    }
    
    function pauseMusic() {
        if (bgMusic) {
            bgMusic.pause();
            isPlaying = false;
            musicNoteIcon.textContent = '⏸️';
            musicTooltip.textContent = 'Pausado';
            musicNote.classList.remove('playing');
        }
    }
    
    function resumeMusic() {
        if (bgMusic) {
            bgMusic.play();
            isPlaying = true;
            musicNoteIcon.textContent = '🎵';
            musicTooltip.textContent = 'Música tocando!';
            musicNote.classList.add('playing');
        }
    }
    
    if (startMusicBtn) {
        startMusicBtn.addEventListener('click', startMusic);
    }
    
    if (musicNote) {
        musicNote.addEventListener('click', function(e) {
            e.stopPropagation();
            if (isPlaying) {
                pauseMusic();
            } else {
                resumeMusic();
            }
        });
    }
    
    // Tentar autoplay no desktop
    setTimeout(() => {
        if (bgMusic) {
            bgMusic.play().then(() => {
                isPlaying = true;
                musicNoteIcon.textContent = '🎵';
                musicTooltip.textContent = 'Música tocando!';
                musicNote.classList.add('playing');
                if (welcomePlayer) welcomePlayer.style.display = 'none';
                if (musicNote) musicNote.style.display = 'flex';
            }).catch(() => {
                console.log('Aguardando clique do usuário');
            });
        }
    }, 500);
    
    // Continuar tocando quando voltar à página
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && isPlaying && bgMusic) {
            bgMusic.play().catch(e => console.log('Erro ao retomar:', e));
        }
    });
});

// ============================================
// FUNÇÕES DO ÁLBUM
// ============================================

function updateDaysCounter() {
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const counterElement = document.getElementById('daysCounter');
    if (counterElement) counterElement.textContent = diffDays;
}

function loadQuotes() {
    const quotesGrid = document.getElementById('quotesGrid');
    if (!quotesGrid) return;
    quotesGrid.innerHTML = quotes.map(quote => `
        <div class="quote-card" onclick="showToast('${quote.text.replace(/'/g, "\\'")}')">
            <p class="quote-text">"${quote.text}"</p>
            <p class="quote-date">✨ ${quote.date}</p>
        </div>
    `).join('');
}

function loadTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    timeline.innerHTML = importantDates.map(item => `
        <div class="timeline-item" onclick="showToast('${item.event} em ${item.date}')">
            <div class="timeline-date">📅 ${item.date}</div>
            <div class="timeline-event">${item.event}</div>
        </div>
    `).join('');
}

function loadGallery() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;
    gallery.innerHTML = photos.map((photo, index) => `
        <div class="gallery-item" onclick="openModal(${index})">
            <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
            <div class="gallery-overlay">
                <p class="gallery-caption">${photo.caption}</p>
            </div>
        </div>
    `).join('');
}

function openModal(index) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('modalCaption');
    
    if (modal && modalImg && caption) {
        modal.style.display = "block";
        modalImg.src = photos[index].src;
        caption.innerHTML = photos[index].caption;
    }
}

const modalClose = document.getElementById('modalClose');
if (modalClose) {
    modalClose.onclick = function() {
        document.getElementById('imageModal').style.display = "none";
    };
}

const imageModal = document.getElementById('imageModal');
if (imageModal) {
    imageModal.onclick = function(e) {
        if (e.target === this) {
            this.style.display = "none";
        }
    };
}

function showToast(message) {
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
        font-family: 'Poppins', sans-serif;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translate(-50%, 20px); }
        to { opacity: 1; transform: translate(-50%, 0); }
    }
`;
document.head.appendChild(style);

// Inicializar
updateDaysCounter();
loadQuotes();
loadTimeline();
loadGallery();