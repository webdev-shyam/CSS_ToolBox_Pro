# 🎨 CSS Toolbox Pro

**Professional CSS Generators & Effects Toolbox**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-CSS%20Toolbox%20Pro-blue?style=for-the-badge&logo=netlify)](https://csstoolboxpro2025.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/yourusername/css-toolbox-pro)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A comprehensive web-based CSS generator toolkit that helps developers create beautiful gradients, shadows, glass morphism effects, border radius, and text shadows with real-time preview and one-click code copying.

## 🌟 Live Demo

**Visit the live application:** [https://csstoolboxpro2025.netlify.app/](https://csstoolboxpro2025.netlify.app/)

## ✨ Features

### 🎨 **Gradient Generator**
- **Custom Color Stops**: Add, remove, and adjust multiple color stops
- **Preset Gradients**: 6 beautiful preset gradients (Sunset, Pink, Ocean, Nature, Sunrise, Pastel)
- **Direction Control**: 12 different gradient directions including angles
- **Random Generator**: Generate unique gradients instantly
- **Real-time Preview**: See changes as you adjust

### 🔮 **Glass Morphism Generator**
- **Backdrop Blur**: Adjustable blur intensity (0-20px)
- **Transparency Control**: Fine-tune opacity levels
- **Live Preview**: See the glass effect in real-time
- **Cross-browser Support**: Includes webkit prefixes

### 🌑 **Box Shadow Generator**
- **Horizontal/Vertical Offset**: Precise shadow positioning
- **Blur & Spread**: Control shadow softness and size
- **Color Picker**: Custom shadow colors
- **Instant Preview**: Real-time shadow visualization

### 🔲 **Border Radius Generator**
- **Individual Corners**: Control each corner separately
- **Uniform Radius**: Set all corners at once
- **Visual Preview**: See border radius changes instantly
- **Range Controls**: 0-100px precision

### 📝 **Text Shadow Generator**
- **Offset Control**: Horizontal and vertical positioning
- **Blur Radius**: Adjust shadow softness
- **Color Customization**: Shadow and text colors
- **Live Text Preview**: See effects on sample text

### 🌙 **Advanced Features**
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Responsive Design**: Works perfectly on desktop and mobile
- **Smooth Navigation**: Auto-scrolling with active section highlighting
- **Copy to Clipboard**: One-click CSS code copying with visual feedback
- **Modern UI**: Beautiful glass morphism design with animations

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required - runs entirely in the browser

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/css-toolbox-pro.git
cd css-toolbox-pro
```

2. Open `index.html` in your browser or serve locally:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` in your browser

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with custom properties and animations
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Tailwind CSS**: Utility-first CSS framework
- **Netlify**: Hosting and deployment

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Usage Examples

### Gradient Generation
```css
/* Generated gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Glass Morphism Effect
```css
/* Generated glass effect */
background: rgba(255, 255, 255, 0.2);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
```

### Box Shadow
```css
/* Generated box shadow */
box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.3);
```

### Border Radius
```css
/* Generated border radius */
border-radius: 20px 10px 30px 5px;
```

### Text Shadow
```css
/* Generated text shadow */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
```

## 🎨 Preset Gradients

The tool includes 6 professionally designed gradient presets:

1. **Sunset**: `#667eea` → `#764ba2`
2. **Pink**: `#f093fb` → `#f5576c`
3. **Ocean**: `#4facfe` → `#00f2fe`
4. **Nature**: `#43e97b` → `#38f9d7`
5. **Sunrise**: `#fa709a` → `#fee140`
6. **Pastel**: `#a8edea` → `#fed6e3`

## 🔧 Customization

### Adding New Preset Gradients
Edit the `presetGradients` object in `script.js`:

```javascript
const presetGradients = {
    // ... existing presets
    custom: [
        { color: '#your-color-1', position: 0 },
        { color: '#your-color-2', position: 100 }
    ]
};
```

### Modifying Styles
- Main styles: `styles.css`
- Dark mode variables: CSS custom properties in `[data-theme="dark"]`
- Animations: Keyframes and transitions in `styles.css`

## 📁 Project Structure

```
css-toolbox-pro/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── .git/               # Git repository
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and formatting
- Test on multiple browsers
- Ensure responsive design works
- Add comments for complex logic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first framework
- **Heroicons** for the beautiful SVG icons
- **Netlify** for hosting and deployment
- **CSS Working Group** for the amazing CSS features

## 📞 Contact

**Ganeshyam Verma** -  wid2839@gmail.com


---

⭐ **Star this repository if you found it helpful!**

---

*Built with ❤️ for developers by Ganeshyam Verma*
