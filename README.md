# Prototype Texture Generator

A web-based tool for generating sci-fi prototype-style textures similar to Unity's ProBuilder test environments. Perfect for creating vehicle test areas, weapon ranges, AI test environments, and other prototype spaces.

## Features

### 🎨 Visual Elements
- **Grid Patterns**: Customizable grid sizes (10x10 to 100x100)
- **Warning Stripes**: Diagonal warning patterns in corners
- **Tech Patterns**: Circuit-like background patterns
- **Measurement Markers**: Scale indicators and measurement points
- **Coordinate System**: X/Y coordinate labels
- **Border Text**: Project title, code, version, and labels

### 🌈 Color Schemes
- **Blue Tech**: Classic sci-fi blue theme
- **Green HUD**: Military/industrial green
- **Orange Warning**: High-visibility warning theme
- **Purple Sci-Fi**: Futuristic purple theme
- **Red Alert**: Emergency/combat red theme
- **White Clean**: Minimalist white background
- **Light Gray**: Professional light gray theme
- **Cream Paper**: Warm cream background
- **Light Blue**: Soft blue theme
- **Light Green**: Gentle green theme

### ⚙️ Customization Options
- **Project Details**: Title, code, and version
- **Scale Settings**: Custom measurement units
- **Texture Size**: 512x512 to 4096x4096 pixels
- **Noise Level**: Adjustable texture noise (0-100%)
- **Element Toggles**: Enable/disable individual elements
- **Text Positioning**: Precise control over text placement (X/Y coordinates)
- **Text Sizing**: Adjustable font sizes for all text elements

### 📦 Preset Templates
- **Vehicle Test Area**: Large scale, blue theme
- **Weapon Test Range**: High precision, red theme
- **AI Test Environment**: Medium scale, purple theme
- **Space Station Deck**: Medium scale, green theme
- **Laboratory**: Small scale, orange theme
- **Clean White**: Minimalist white theme
- **Documentation**: Professional cream theme

## Usage

### Getting Started
1. Open `index.html` in a modern web browser
2. The tool will generate a default texture automatically
3. Customize settings using the control panel
4. Click "GENERATE TEXTURE" to update the preview
5. Download as PNG or JPG when satisfied

### Customization Guide

#### Project Details
- **Project Title**: Main title displayed at the top
- **Project Code**: Short identifier displayed at the bottom
- **Version**: Version number shown in corners

#### Measurement Settings
- **Scale**: Units for measurement (e.g., "1.0m", "5.0ft")
- **Grid Size**: Number of grid cells (affects measurement markers)

#### Visual Style
- **Color Scheme**: Choose from 5 different themes
- **Texture Size**: Resolution of the output texture
- **Noise Level**: Adds realistic texture variation

#### Border Elements
- **Show Grid**: Toggle grid pattern visibility
- **Show Measurements**: Toggle measurement markers
- **Show Coordinates**: Toggle X/Y coordinate labels
- **Warning Stripes**: Toggle corner warning patterns
- **Tech Patterns**: Toggle circuit-like background patterns

#### Text Positioning
- **Project Title Position**: X/Y coordinates for title placement
- **Project Code Position**: X/Y coordinates for code placement
- **Scale Text Position**: X/Y coordinates for scale indicator
- **Version Position**: Separate controls for top and bottom version text

#### Text Sizing
- **Title Size**: Adjustable font size for project title
- **Code Size**: Adjustable font size for project code
- **Scale Size**: Adjustable font size for scale text
- **Version Size**: Adjustable font size for version numbers

### Export Options
- **PNG**: High-quality lossless format
- **JPG**: Compressed format for smaller file sizes
- Files are automatically named with project code and timestamp

## Technical Details

### File Structure
```
PrototypeTextGen/
├── index.html          # Main interface
├── styles.css          # Sci-fi styling
├── script.js           # Texture generation logic
└── README.md           # This file
```

### Browser Compatibility
- Modern browsers with HTML5 Canvas support
- Chrome, Firefox, Safari, Edge (latest versions)
- Requires JavaScript enabled

### Performance
- Real-time preview generation
- Optimized for textures up to 4096x4096
- Efficient canvas rendering

## Use Cases

### Game Development
- Unity ProBuilder test environments
- Unreal Engine prototype spaces
- Vehicle testing areas
- Weapon ranges and firing ranges

### 3D Modeling
- Reference textures for modeling
- UV mapping reference grids
- Scale and measurement guides

### Visualization
- Technical documentation
- Prototype presentations
- Engineering mockups

## Customization Tips

### For Vehicle Testing
- Use large grid sizes (50-100)
- Enable warning stripes
- Choose blue or green color schemes
- Set scale to match vehicle dimensions

### For Weapon Ranges
- Use high precision grids (100x100)
- Enable all measurement elements
- Choose red or orange themes
- Add detailed coordinate systems

### For AI/VR Testing
- Use medium grid sizes (20-30)
- Focus on clean, readable text
- Choose purple or blue themes
- Minimize visual clutter

## License

This tool is provided as-is for educational and development purposes. Feel free to modify and use in your projects.

## Contributing

Feel free to submit improvements, bug fixes, or new features. The tool is designed to be easily extensible with new color schemes, patterns, and features.
