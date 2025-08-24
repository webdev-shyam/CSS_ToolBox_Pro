// Gradient Generator Logic
let colorStops = [
    { color: '#ff0000', position: 0 },
    { color: '#0000ff', position: 100 }
];

// Preset gradients
const presetGradients = {
    sunset: [
        { color: '#667eea', position: 0 },
        { color: '#764ba2', position: 100 }
    ],
    pink: [
        { color: '#f093fb', position: 0 },
        { color: '#f5576c', position: 100 }
    ],
    ocean: [
        { color: '#4facfe', position: 0 },
        { color: '#00f2fe', position: 100 }
    ],
    nature: [
        { color: '#43e97b', position: 0 },
        { color: '#38f9d7', position: 100 }
    ],
    sunrise: [
        { color: '#fa709a', position: 0 },
        { color: '#fee140', position: 100 }
    ],
    pastel: [
        { color: '#a8edea', position: 0 },
        { color: '#fed6e3', position: 100 }
    ]
};

function updateGradient() {
    const direction = document.getElementById('gradientDirection').value;
    const gradient = `linear-gradient(${direction}, ${colorStops.map(stop => `${stop.color} ${stop.position}%`).join(', ')})`;
    
    document.querySelector('.gradient-preview').style.background = gradient;
    document.querySelector('.gradient-output').textContent = `background: ${gradient};`;
}

function addColorStop() {
    colorStops.splice(-1, 0, {
        color: '#00ff00',
        position: 50
    });
    renderColorStops();
    updateGradient();
}

function renderColorStops() {
    const container = document.querySelector('.color-stops');
    container.innerHTML = '';
    
    colorStops.forEach((stop, index) => {
        const stopDiv = document.createElement('div');
        stopDiv.className = 'color-stop';
        stopDiv.innerHTML = `
            <input type="color" value="${stop.color}" 
                   onchange="updateColor(${index}, this.value)">
            <input type="range" min="0" max="100" value="${stop.position}" 
                   oninput="updatePosition(${index}, this.value)">
            <button onclick="removeColorStop(${index})" class="px-2 py-1 bg-red-500 text-white rounded">×</button>
        `;
        container.appendChild(stopDiv);
    });
}

function updateColor(index, value) {
    colorStops[index].color = value;
    updateGradient();
}

function updatePosition(index, value) {
    colorStops[index].position = parseInt(value);
    updateGradient();
}

function removeColorStop(index) {
    colorStops.splice(index, 1);
    renderColorStops();
    updateGradient();
}

function applyPresetGradient(presetName) {
    if (presetGradients[presetName]) {
        colorStops = JSON.parse(JSON.stringify(presetGradients[presetName]));
        renderColorStops();
        updateGradient();
        
        // Update active state
        document.querySelectorAll('.preset-gradient').forEach(preset => {
            preset.classList.remove('active');
        });
        event.target.classList.add('active');
    }
}

function generateRandomGradient() {
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
        '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
        '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2'
    ];
    
    const numStops = Math.floor(Math.random() * 3) + 2; // 2-4 color stops
    colorStops = [];
    
    for (let i = 0; i < numStops; i++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const position = i === 0 ? 0 : i === numStops - 1 ? 100 : Math.floor(Math.random() * 80) + 10;
        colorStops.push({ color: randomColor, position });
    }
    
    // Sort by position
    colorStops.sort((a, b) => a.position - b.position);
    
    // Random direction
    const directions = ['to right', 'to bottom', '45deg', '135deg', '225deg', '315deg'];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    document.getElementById('gradientDirection').value = randomDirection;
    
    renderColorStops();
    updateGradient();
    
    // Remove active state from presets
    document.querySelectorAll('.preset-gradient').forEach(preset => {
        preset.classList.remove('active');
    });
}

// Glass Morphism Logic
document.getElementById('glassBlur').addEventListener('input', updateGlass);
document.getElementById('glassAlpha').addEventListener('input', updateGlass);

function updateGlass() {
    const blur = document.getElementById('glassBlur').value;
    const alpha = document.getElementById('glassAlpha').value;
    
    const glassCSS = `
        background: rgba(255, 255, 255, ${alpha});
        backdrop-filter: blur(${blur}px);
        -webkit-backdrop-filter: blur(${blur}px);
    `;
    
    document.querySelector('.glass-preview').style.cssText = glassCSS;
    document.querySelector('.glass-output').textContent = glassCSS.trim();
}

// Box Shadow Generator Logic
const boxShadowControls = document.querySelector('#boxShadowControls');
const boxPreview = document.querySelector('.box-preview');

function updateBoxShadow() {
    const h = document.getElementById('boxH').value;
    const v = document.getElementById('boxV').value;
    const blur = document.getElementById('boxBlur').value;
    const spread = document.getElementById('boxSpread').value;
    const color = document.getElementById('boxColor').value;
    
    const shadow = `${h}px ${v}px ${blur}px ${spread}px ${color}`;
    boxPreview.style.boxShadow = shadow;
    document.querySelector('.box-output').textContent = `box-shadow: ${shadow};`;
}

// Text Shadow Generator Logic
const textShadowControls = document.querySelector('#textShadowControls');
const textPreview = document.querySelector('.text-preview');

function updateTextShadow() {
    const h = document.getElementById('textH').value;
    const v = document.getElementById('textV').value;
    const blur = document.getElementById('textBlur').value;
    const color = document.getElementById('textColor').value;
    const textColor = document.getElementById('textTextColor').value;
    
    const shadow = `${h}px ${v}px ${blur}px ${color}`;
    textPreview.style.textShadow = shadow;
    textPreview.style.color = textColor;
    
    // Update value displays
    document.getElementById('textHValue').textContent = `${h}px`;
    document.getElementById('textVValue').textContent = `${v}px`;
    document.getElementById('textBlurValue').textContent = `${blur}px`;
    
    document.querySelector('.text-output').textContent = `text-shadow: ${shadow};`;
}

// Border Radius Generator Logic
function updateBorderRadius() {
    const topLeft = document.getElementById('borderTopLeft').value;
    const topRight = document.getElementById('borderTopRight').value;
    const bottomRight = document.getElementById('borderBottomRight').value;
    const bottomLeft = document.getElementById('borderBottomLeft').value;
    
    const borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;
    document.querySelector('.border-radius-preview').style.borderRadius = borderRadius;
    
    // Update value displays
    document.getElementById('borderTopLeftValue').textContent = `${topLeft}px`;
    document.getElementById('borderTopRightValue').textContent = `${topRight}px`;
    document.getElementById('borderBottomRightValue').textContent = `${bottomRight}px`;
    document.getElementById('borderBottomLeftValue').textContent = `${bottomLeft}px`;
    
    document.querySelector('.border-radius-output').textContent = `border-radius: ${borderRadius};`;
}

function updateUniformBorderRadius() {
    const uniform = document.getElementById('borderUniform').value;
    
    // Update all individual controls
    document.getElementById('borderTopLeft').value = uniform;
    document.getElementById('borderTopRight').value = uniform;
    document.getElementById('borderBottomRight').value = uniform;
    document.getElementById('borderBottomLeft').value = uniform;
    
    updateBorderRadius();
}

// Copy to clipboard functionality
function copyToClipboard(type) {
    let textToCopy = '';
    
    switch(type) {
        case 'gradient':
            textToCopy = document.querySelector('.gradient-output').textContent;
            break;
        case 'glass':
            textToCopy = document.querySelector('.glass-output').textContent;
            break;
        case 'box-shadow':
            textToCopy = document.querySelector('.box-output').textContent;
            break;
        case 'text-shadow':
            textToCopy = document.querySelector('.text-output').textContent;
            break;
        case 'border-radius':
            textToCopy = document.querySelector('.border-radius-output').textContent;
            break;
    }
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Show feedback
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = '#10b981';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'rgba(0, 0, 0, 0.7)';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy to clipboard');
    });
}

// Navigation functionality
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        
        // Update active navigation state
        updateActiveNavigation(sectionId);
    }
}

function updateActiveNavigation(activeId) {
    // Update desktop navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(activeId)) {
            link.classList.add('active');
        }
    });
    
    // Update mobile navigation
    document.querySelectorAll('.nav-link-mobile').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(activeId)) {
            link.classList.add('active');
        }
    });
}

// Intersection Observer for automatic navigation highlighting
function setupIntersectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                updateActiveNavigation(sectionId);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Theme management
let currentTheme = localStorage.getItem('theme') || 'light';

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    applyTheme();
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update theme toggle icons
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const mobileSunIcon = document.getElementById('mobileSunIcon');
    const mobileMoonIcon = document.getElementById('mobileMoonIcon');
    
    if (currentTheme === 'dark') {
        // Show sun icon (to switch to light mode)
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
        mobileSunIcon.classList.remove('hidden');
        mobileMoonIcon.classList.add('hidden');
    } else {
        // Show moon icon (to switch to dark mode)
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        mobileSunIcon.classList.add('hidden');
        mobileMoonIcon.classList.remove('hidden');
    }
}

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
    renderColorStops();
    updateGradient();
    updateGlass();
    updateBoxShadow();
    updateTextShadow();
    updateBorderRadius();
    
    // Set first preset as active
    document.querySelector('.preset-gradient').classList.add('active');
    
    // Setup intersection observer for navigation
    setupIntersectionObserver();
    
    // Apply saved theme
    applyTheme();
});