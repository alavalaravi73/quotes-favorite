// ===== GLOBAL STATE =====
let quotes = [];
let currentQuoteIndex = -1;

// ===== QUOTE LOADING =====
async function loadQuotes() {
    try {
        const response = await fetch('quotes.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        quotes = await response.json();
        console.log(`Loaded ${quotes.length} quotes`);
        displayRandomQuote();
    } catch (error) {
        console.error('Error loading quotes:', error);
        displayErrorQuote();
    }
}

// ===== QUOTE DISPLAY =====
function displayRandomQuote() {
    if (quotes.length === 0) return;

    // Get a random quote different from the current one
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex && quotes.length > 1);

    currentQuoteIndex = newIndex;
    const quote = quotes[currentQuoteIndex];

    // Fade out current quote
    fadeOutQuote(() => {
        // Update content
        updateQuoteContent(quote);

        // Fade in new quote
        fadeInQuote();
    });
}

function updateQuoteContent(quote) {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    // Remove quote marks from the text since CSS adds them
    let cleanText = quote.text.replace(/^["']+|["']+$/g, '');

    quoteText.textContent = cleanText;
    quoteAuthor.textContent = `— ${quote.author}`;
}

// ===== ANIMATIONS =====
function fadeOutQuote(callback) {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    quoteText.classList.add('fade-out');
    quoteAuthor.classList.add('fade-out');

    setTimeout(callback, 300);
}

function fadeInQuote() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    // Remove fade-out class
    quoteText.classList.remove('fade-out');
    quoteAuthor.classList.remove('fade-out');

    // Trigger reflow
    void quoteText.offsetWidth;

    // Add fade-in class
    quoteText.classList.add('fade-in');
    quoteAuthor.classList.add('fade-in');
}

function displayErrorQuote() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    quoteText.textContent = 'Unable to load quotes. Please check that quotes.json is in the same directory.';
    quoteAuthor.textContent = '—';
}

// ===== EVENT LISTENERS =====
function initializeEventListeners() {
    const newQuoteBtn = document.getElementById('new-quote-btn');
    newQuoteBtn.addEventListener('click', displayRandomQuote);

    // Optional: Add keyboard shortcut (Space bar)
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && e.target === document.body) {
            e.preventDefault();
            displayRandomQuote();
        }
    });

    // Initialize parallax scroll
    initializeParallaxScroll();
}

// ===== PARALLAX ZOOM ON SCROLL =====
function initializeParallaxScroll() {
    const quoteCard = document.querySelector('.quote-card');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        // Very subtle zoom-out: 0.0002 scale change per pixel scrolled
        const scale = 1 - (scrolled * 0.0002);
        // Clamp between 0.97 and 1 to avoid noticeable distortion
        const clampedScale = Math.max(0.97, Math.min(1, scale));
        quoteCard.style.transform = `scale(${clampedScale})`;
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    loadQuotes();
});
