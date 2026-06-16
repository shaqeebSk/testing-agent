# 🧬 Biomedical Engineer 3D Portfolio

An interactive 3D portfolio built with React, Three.js, Vite, and React Three Fiber. Showcase your biomedical engineering expertise and culinary passion in an immersive 3D environment.

## ✨ Features

### 🎨 3D Visualization
- **Interactive 3D Scenes** - Each section has unique 3D representations
- **Dynamic Animations** - Floating objects, particle effects, and smooth transitions
- **Responsive Canvas** - Optimized for all screen sizes
- **Sparkle Effects** - Beautiful particle system for visual appeal
- **Lighting System** - Professional multi-point lighting setup

### 📱 Sections
1. **Home** - Animated sphere with introduction
2. **Projects** - Interactive project cards in 3D space
3. **Skills** - Orbiting skill spheres with labels
4. **Hobbies** - Culinary passion visualization
5. **Contact** - Interactive contact information

### 🎯 Technologies
- **React 18** - Modern UI framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Drei** - Useful helpers for React Three Fiber
- **Vite** - Fast build tool and dev server

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/shaqeebSk/testing-agent.git
cd testing-agent

# Install dependencies
npm install

# Start development server
npm run dev
```

The portfolio will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Output will be in the `dist` folder.

## 📁 Project Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Main app component
├── App.css               # App styles
└── components/
    ├── Scene3D.jsx       # 3D scene components
    ├── ProjectCard.jsx   # Project visualization
    └── UI.jsx            # UI controls and panels
```

## 🎮 Controls

- **Drag Mouse** - Rotate the 3D view
- **Scroll** - Zoom in/out
- **Click Navigation** - Switch between sections
- **Auto Rotate** - Automatic scene rotation (OrbitControls)

## 🎨 Customization

### Colors
Update the color values in `Scene3D.jsx`:
```javascript
color="#667eea"  // Primary blue
color="#764ba2"  // Secondary purple
color="#fcb69f"  // Warm accent
```

### Add New Projects
Edit `Scene3D.jsx` and add more `ProjectCard` components:
```jsx
<ProjectCard
  position={[12, 0, 0]}
  title="Your Project"
  description="Your description"
  color="#your-color"
/>
```

### Add New Skills
Extend the `skills` array in `SkillsVisualization`:
```javascript
const skills = [
  { name: 'Your Skill', color: '#color' },
  // ...
];
```

## 🌐 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to your repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://shaqeebSk.github.io/testing-agent`

### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy
```

### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## 🎯 Components Overview

### Scene3D.jsx
Contains all 3D visualizations:
- Different scenes for each section
- Lighting setup
- Particle effects (Sparkles)
- 3D models and text

### ProjectCard.jsx
Reusable 3D card component for projects:
- Animated rotation and floating
- Distortion material effect
- Customizable colors and text

### UI.jsx
Navigation and content panels:
- Section navigation
- Dynamic content display
- Info panels
- Responsive design

## 🔧 Performance Optimization

- Vite's fast build process
- Three.js optimized rendering
- CSS backdrop filters for UI
- Level of detail (LOD) for complex geometries
- Efficient particle system

## 📊 Browser Support

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## 🎓 Learning Resources

- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber/)
- [Three.js Documentation](https://threejs.org/docs/)
- [Drei Helpers](https://github.com/pmndrs/drei)
- [Vite Documentation](https://vitejs.dev/)

## 🚀 Future Enhancements

- [ ] Add more interactive 3D models
- [ ] Implement blog section with 3D cards
- [ ] Add sound effects
- [ ] Create custom 3D avatar
- [ ] Implement AR support
- [ ] Add dark/light mode toggle
- [ ] Mobile touch gestures

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Support

For questions or improvements, please open an issue or submit a pull request.

---

**Happy Coding! 🧬🍳**
