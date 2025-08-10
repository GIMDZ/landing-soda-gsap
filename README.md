# 🥤 Landing Soda GSAP

A modern, interactive landing page featuring smooth scroll animations for popular soda brands (Fanta, Coca-Cola, Pepsi) built with GSAP and ScrollTrigger.

## ✨ Features

- **Smooth Scroll Animations**: Fluid element transitions triggered by scroll position
- **Interactive Product Showcase**: Dynamic presentation of three major soda brands
- **Responsive Design**: Optimized for various screen sizes
- **Modern UI/UX**: Clean design with gradient backgrounds and custom typography
- **Performance Optimized**: Lightweight animations with hardware acceleration

## 🚀 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with gradients, transitions, and responsive design
- **JavaScript (ES6)**: Animation logic and interactions
- **GSAP (GreenSock)**: High-performance animation library
- **ScrollTrigger**: GSAP plugin for scroll-based animations
- **RemixIcon**: Icon library for UI elements
- **Custom Fonts**: Product Sans typography

## 📁 Project Structure

```
landing-soda-gsap/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with custom animations
├── main.js             # JavaScript animations and ScrollTrigger setup
├── README.md           # Project documentation
├── fonts/              # Custom font files
│   ├── Product_Sans_Regular.ttf
│   └── Product_Sans_Bold.ttf
└── images/             # Image assets
    ├── fanta.png       # Fanta bottle
    ├── cocacola.png    # Coca-Cola bottle
    ├── pepsi.png       # Pepsi bottle
    ├── orange.webp     # Orange fruit
    ├── orange2.png     # Orange slice
    ├── lemon.webp      # Lemon accent
    ├── leaf.webp       # Leaf decoration
    ├── leaf2.png       # Additional leaf
    └── coconoutleaf.png # Coconut leaf
```

## 🎯 How It Works

The landing page consists of three main sections:

1. **Hero Section (.one)**: Features the main Fanta branding with floating elements
2. **Content Section (.two)**: "Flavour Updated" information with animated transitions
3. **Product Cards (.three)**: Interactive cards for Coca-Cola, Fanta, and Pepsi

### Animation Timeline

- **Timeline 1**: Triggered when scrolling to section two
  - Animates Fanta bottle, orange elements, and leaves
  - Elements move and rotate based on scroll progress
  
- **Timeline 2**: Triggered when scrolling to section three
  - Product cards slide in from left and right
  - Repositions hero elements for final composition

## 🛠️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/landing-soda-gsap.git
   cd landing-soda-gsap
   ```

2. **Open the project**:
   - Simply open `index.html` in your web browser
   - Or use a local development server for the best experience:
   ```bash 
   # Using Node.js (with live-server)
   npx live-server
   ```

3. **View the website**:
   - Navigate to `http://localhost:8000` (or your server's URL)
   - Scroll through the page to see animations in action

## 🎮 Usage

- **Scroll**: Navigate through sections to trigger animations
- **Responsive**: Works on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects on navigation and buttons

## 🔧 Customization

### Modify Animations
Edit `main.js` to adjust:
- Animation timing (`start`, `end` values)
- Element positions (`top`, `left`, `rotate` properties)
- Animation speed (`scrub` settings)

### Update Styling
Modify `style.css` to change:
- Color schemes and gradients
- Typography and spacing
- Responsive breakpoints

### Add Content
Update `index.html` to:
- Change product information
- Add new sections or elements
- Modify navigation items

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE11+ (limited support)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-animation`
3. Commit your changes: `git commit -am 'Add new scroll animation'`
4. Push to the branch: `git push origin feature/new-animation`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- **GSAP**: Animation library by GreenSock
- **RemixIcon**: Icon library
- **Product Sans**: Typography by Google
- **Images**: Soda brand assets (for educational purposes)

## 📞 Support

If you have any questions or run into issues, please feel free to:
- Open an issue on GitHub
- Contact the maintainers
- Check the GSAP documentation for animation help

---

⭐ **Star this repository if you found it helpful!** ⭐
