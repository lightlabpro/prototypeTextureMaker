class PrototypeTextureGenerator {
    constructor() {
        this.canvas = document.getElementById('textureCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.currentTexture = null;
        
        this.colorSchemes = {
            blue: {
                primary: '#00ffff',
                secondary: '#0080ff',
                accent: '#0040ff',
                background: '#0a0a0a',
                grid: '#00ffff',
                text: '#00ffff',
                warning: '#ff8000'
            },
            green: {
                primary: '#00ff00',
                secondary: '#008000',
                accent: '#004000',
                background: '#0a0a0a',
                grid: '#00ff00',
                text: '#00ff00',
                warning: '#ffff00'
            },
            orange: {
                primary: '#ff8000',
                secondary: '#ff4000',
                accent: '#ff0000',
                background: '#0a0a0a',
                grid: '#ff8000',
                text: '#ff8000',
                warning: '#ff0000'
            },
            purple: {
                primary: '#8000ff',
                secondary: '#4000ff',
                accent: '#0000ff',
                background: '#0a0a0a',
                grid: '#8000ff',
                text: '#8000ff',
                warning: '#ff00ff'
            },
            red: {
                primary: '#ff0000',
                secondary: '#800000',
                accent: '#400000',
                background: '#0a0a0a',
                grid: '#ff0000',
                text: '#ff0000',
                warning: '#ffff00'
            },
            white: {
                primary: '#000000',
                secondary: '#333333',
                accent: '#666666',
                background: '#ffffff',
                grid: '#000000',
                text: '#000000',
                warning: '#ff0000'
            },
            'light-gray': {
                primary: '#333333',
                secondary: '#666666',
                accent: '#999999',
                background: '#f5f5f5',
                grid: '#333333',
                text: '#333333',
                warning: '#ff0000'
            },
            cream: {
                primary: '#2c1810',
                secondary: '#5a3a2a',
                accent: '#8b6b4a',
                background: '#faf8f3',
                grid: '#2c1810',
                text: '#2c1810',
                warning: '#d32f2f'
            },
            'light-blue': {
                primary: '#1976d2',
                secondary: '#42a5f5',
                accent: '#90caf9',
                background: '#f3f8ff',
                grid: '#1976d2',
                text: '#1976d2',
                warning: '#f57c00'
            },
            'light-green': {
                primary: '#2e7d32',
                secondary: '#4caf50',
                accent: '#81c784',
                background: '#f1f8e9',
                grid: '#2e7d32',
                text: '#2e7d32',
                warning: '#f57c00'
            },
            gold: {
                primary: '#ffd700',
                secondary: '#ffb347',
                accent: '#ff8c00',
                background: '#1a1a1a',
                grid: '#ffd700',
                text: '#ffd700',
                warning: '#ff4500'
            },
            pink: {
                primary: '#ff69b4',
                secondary: '#ff1493',
                accent: '#c71585',
                background: '#0a0a0a',
                grid: '#ff69b4',
                text: '#ff69b4',
                warning: '#ff4500'
            },
            cyan: {
                primary: '#00ffff',
                secondary: '#00bfff',
                accent: '#008b8b',
                background: '#0a0a0a',
                grid: '#00ffff',
                text: '#00ffff',
                warning: '#ff8c00'
            },
            yellow: {
                primary: '#ffff00',
                secondary: '#ffd700',
                accent: '#ffa500',
                background: '#0a0a0a',
                grid: '#ffff00',
                text: '#ffff00',
                warning: '#ff0000'
            },
            brown: {
                primary: '#8b4513',
                secondary: '#a0522d',
                accent: '#cd853f',
                background: '#2f1b14',
                grid: '#8b4513',
                text: '#8b4513',
                warning: '#ff4500'
            },
            teal: {
                primary: '#008080',
                secondary: '#20b2aa',
                accent: '#48d1cc',
                background: '#0a1a1a',
                grid: '#008080',
                text: '#008080',
                warning: '#ff8c00'
            },
            magenta: {
                primary: '#ff00ff',
                secondary: '#c71585',
                accent: '#8b008b',
                background: '#0a0a0a',
                grid: '#ff00ff',
                text: '#ff00ff',
                warning: '#ff4500'
            },
            lime: {
                primary: '#32cd32',
                secondary: '#228b22',
                accent: '#006400',
                background: '#0a1a0a',
                grid: '#32cd32',
                text: '#32cd32',
                warning: '#ff4500'
            },
            navy: {
                primary: '#000080',
                secondary: '#191970',
                accent: '#4169e1',
                background: '#0a0a1a',
                grid: '#000080',
                text: '#000080',
                warning: '#ff4500'
            },
            coral: {
                primary: '#ff7f50',
                secondary: '#ff6347',
                accent: '#ff4500',
                background: '#1a0a0a',
                grid: '#ff7f50',
                text: '#ff7f50',
                warning: '#ff0000'
            }
        };
        
        this.presets = {
            'vehicle-test': {
                projectTitle: 'VEHICLE TEST AREA',
                projectCode: 'VTA-2024',
                version: 'v2.1.0',
                scale: '5.0m',
                gridSize: '50',
                colorScheme: 'blue',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: true,
                showTechPatterns: true
            },
            'weapon-test': {
                projectTitle: 'WEAPON TEST RANGE',
                projectCode: 'WTR-2024',
                version: 'v1.5.0',
                scale: '10.0m',
                gridSize: '100',
                colorScheme: 'red',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: true,
                showTechPatterns: true
            },
            'ai-test': {
                projectTitle: 'AI TEST ENVIRONMENT',
                projectCode: 'AIE-2024',
                version: 'v3.0.0',
                scale: '2.0m',
                gridSize: '20',
                colorScheme: 'purple',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: false,
                showTechPatterns: true
            },
            'space-station': {
                projectTitle: 'SPACE STATION DECK',
                projectCode: 'SSD-2024',
                version: 'v1.0.0',
                scale: '3.0m',
                gridSize: '30',
                colorScheme: 'green',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: true,
                showTechPatterns: true
            },
            'laboratory': {
                projectTitle: 'LABORATORY FLOOR',
                projectCode: 'LAB-2024',
                version: 'v1.2.0',
                scale: '1.0m',
                gridSize: '10',
                colorScheme: 'orange',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: false,
                showTechPatterns: true
            },
            'clean-white': {
                projectTitle: 'CLEAN TEST AREA',
                projectCode: 'CTA-2024',
                version: 'v1.0.0',
                scale: '2.0m',
                gridSize: '20',
                colorScheme: 'white',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: false,
                showWarningStripes: false,
                showTechPatterns: false
            },
            'documentation': {
                projectTitle: 'DOCUMENTATION FLOOR',
                projectCode: 'DOC-2024',
                version: 'v2.0.0',
                scale: '1.5m',
                gridSize: '15',
                colorScheme: 'cream',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: false,
                showTechPatterns: false
            },
            'drone-test': {
                projectTitle: 'DRONE TEST ZONE',
                projectCode: 'DTZ-2024',
                version: 'v1.8.0',
                scale: '3.0m',
                gridSize: '30',
                colorScheme: 'cyan',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: true,
                showTechPatterns: true
            },
            'robotics-lab': {
                projectTitle: 'ROBOTICS LABORATORY',
                projectCode: 'RBL-2024',
                version: 'v2.3.0',
                scale: '2.5m',
                gridSize: '25',
                colorScheme: 'gold',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: false,
                showTechPatterns: true
            },
            'cyber-range': {
                projectTitle: 'CYBER RANGE',
                projectCode: 'CYR-2024',
                version: 'v1.0.0',
                scale: '1.0m',
                gridSize: '10',
                colorScheme: 'magenta',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: true,
                showTechPatterns: true
            },
            'medical-test': {
                projectTitle: 'MEDICAL TESTING',
                projectCode: 'MED-2024',
                version: 'v1.1.0',
                scale: '1.5m',
                gridSize: '15',
                colorScheme: 'pink',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: false,
                showTechPatterns: false
            },
            'construction': {
                projectTitle: 'CONSTRUCTION SITE',
                projectCode: 'CNS-2024',
                version: 'v1.0.0',
                scale: '5.0m',
                gridSize: '50',
                colorScheme: 'brown',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: true,
                showTechPatterns: false
            },
            'aerospace': {
                projectTitle: 'AEROSPACE TESTING',
                projectCode: 'AER-2024',
                version: 'v2.0.0',
                scale: '10.0m',
                gridSize: '100',
                colorScheme: 'navy',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: true,
                showTechPatterns: true
            },
            'military-base': {
                projectTitle: 'MILITARY BASE',
                projectCode: 'MIL-2024',
                version: 'v1.0.0',
                scale: '20.0m',
                gridSize: '200',
                colorScheme: 'yellow',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: true,
                showTechPatterns: true
            },
            'research-facility': {
                projectTitle: 'RESEARCH FACILITY',
                projectCode: 'RES-2024',
                version: 'v3.1.0',
                scale: '2.0m',
                gridSize: '20',
                colorScheme: 'teal',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: false,
                showTechPatterns: true
            },
            'industrial-plant': {
                projectTitle: 'INDUSTRIAL PLANT',
                projectCode: 'IND-2024',
                version: 'v1.0.0',
                scale: '15.0m',
                gridSize: '150',
                colorScheme: 'coral',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: true,
                showTechPatterns: false
            },
            'data-center': {
                projectTitle: 'DATA CENTER',
                projectCode: 'DAT-2024',
                version: 'v2.5.0',
                scale: '1.0m',
                gridSize: '10',
                colorScheme: 'lime',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: false,
                showTechPatterns: true
            },
            'training-ground': {
                projectTitle: 'TRAINING GROUND',
                projectCode: 'TRG-2024',
                version: 'v1.0.0',
                scale: '25.0m',
                gridSize: '250',
                colorScheme: 'orange',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: true,
                showTechPatterns: false
            },
            'emergency-response': {
                projectTitle: 'EMERGENCY RESPONSE',
                projectCode: 'EMR-2024',
                version: 'v1.0.0',
                scale: '5.0m',
                gridSize: '50',
                colorScheme: 'red',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: true,
                showTechPatterns: false
            },
            'surveillance': {
                projectTitle: 'SURVEILLANCE SYSTEM',
                projectCode: 'SUR-2024',
                version: 'v1.2.0',
                scale: '1.0m',
                gridSize: '10',
                colorScheme: 'purple',
                showGrid: true,
                showMeasurements: true,
                showCoordinates: true,
                showWarningStripes: false,
                showTechPatterns: true
            }
        };
        
        this.initializeEventListeners();
        this.generateTexture(); // Generate initial texture
    }
    
    initializeEventListeners() {
        // Control inputs
        document.getElementById('generateBtn').addEventListener('click', () => this.generateTexture());
        document.getElementById('downloadBtn').addEventListener('click', () => this.downloadTexture('png'));
        document.getElementById('downloadJpgBtn').addEventListener('click', () => this.downloadTexture('jpg'));
        
        // Real-time updates
        document.getElementById('noiseLevel').addEventListener('input', (e) => {
            document.getElementById('noiseValue').textContent = e.target.value + '%';
        });
        
        // Text size sliders
        document.getElementById('titleSize').addEventListener('input', (e) => {
            document.getElementById('titleSizeValue').textContent = e.target.value + '%';
        });
        document.getElementById('codeSize').addEventListener('input', (e) => {
            document.getElementById('codeSizeValue').textContent = e.target.value + '%';
        });
        document.getElementById('scaleSize').addEventListener('input', (e) => {
            document.getElementById('scaleSizeValue').textContent = e.target.value + '%';
        });
        document.getElementById('versionSize').addEventListener('input', (e) => {
            document.getElementById('versionSizeValue').textContent = e.target.value + '%';
        });
        
        document.getElementById('textureSize').addEventListener('change', (e) => {
            this.resizeCanvas(parseInt(e.target.value));
            this.generateTexture();
        });
        
        // Preset buttons
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.loadPreset(e.target.dataset.preset);
            });
        });
        
        // Auto-generate on input changes
        const autoUpdateInputs = [
            'projectTitle', 'projectCode', 'version', 'scale', 'gridSize',
            'colorScheme', 'noiseLevel', 'showGrid', 'showMeasurements',
            'showCoordinates', 'showWarningStripes', 'showTechPatterns',
            'showCrosshairs', 'showTargetRings', 'showDataStreams', 
            'showCircuitPatterns', 'showRadarSweep',
            'titleX', 'titleY', 'codeX', 'codeY', 'scaleX', 'scaleY',
            'versionTopX', 'versionTopY', 'versionBottomX', 'versionBottomY',
            'titleSize', 'codeSize', 'scaleSize', 'versionSize'
        ];
        
        autoUpdateInputs.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('change', () => this.generateTexture());
                element.addEventListener('input', () => this.generateTexture());
            }
        });
    }
    
    resizeCanvas(size) {
        this.canvas.width = size;
        this.canvas.height = size;
        document.getElementById('previewSize').textContent = `${size}x${size}`;
    }
    
    getSettings() {
        return {
            projectTitle: document.getElementById('projectTitle').value,
            projectCode: document.getElementById('projectCode').value,
            version: document.getElementById('version').value,
            scale: document.getElementById('scale').value,
            gridSize: parseInt(document.getElementById('gridSize').value),
            colorScheme: document.getElementById('colorScheme').value,
            noiseLevel: parseInt(document.getElementById('noiseLevel').value),
            showGrid: document.getElementById('showGrid').checked,
            showMeasurements: document.getElementById('showMeasurements').checked,
            showCoordinates: document.getElementById('showCoordinates').checked,
            showWarningStripes: document.getElementById('showWarningStripes').checked,
            showTechPatterns: document.getElementById('showTechPatterns').checked,
            showCrosshairs: document.getElementById('showCrosshairs') ? document.getElementById('showCrosshairs').checked : false,
            showTargetRings: document.getElementById('showTargetRings') ? document.getElementById('showTargetRings').checked : false,
            showDataStreams: document.getElementById('showDataStreams') ? document.getElementById('showDataStreams').checked : false,
            showCircuitPatterns: document.getElementById('showCircuitPatterns') ? document.getElementById('showCircuitPatterns').checked : false,
            showRadarSweep: document.getElementById('showRadarSweep') ? document.getElementById('showRadarSweep').checked : false,
            // Text positioning
            titleX: parseInt(document.getElementById('titleX').value),
            titleY: parseInt(document.getElementById('titleY').value),
            codeX: parseInt(document.getElementById('codeX').value),
            codeY: parseInt(document.getElementById('codeY').value),
            scaleX: parseInt(document.getElementById('scaleX').value),
            scaleY: parseInt(document.getElementById('scaleY').value),
            versionTopX: parseInt(document.getElementById('versionTopX').value),
            versionTopY: parseInt(document.getElementById('versionTopY').value),
            versionBottomX: parseInt(document.getElementById('versionBottomX').value),
            versionBottomY: parseInt(document.getElementById('versionBottomY').value),
            // Text sizing
            titleSize: parseInt(document.getElementById('titleSize').value),
            codeSize: parseInt(document.getElementById('codeSize').value),
            scaleSize: parseInt(document.getElementById('scaleSize').value),
            versionSize: parseInt(document.getElementById('versionSize').value)
        };
    }
    
    loadPreset(presetName) {
        const preset = this.presets[presetName];
        if (!preset) return;
        
        Object.keys(preset).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                if (element.type === 'checkbox') {
                    element.checked = preset[key];
                } else {
                    element.value = preset[key];
                }
            }
        });
        
        this.generateTexture();
    }
    
    generateTexture() {
        const settings = this.getSettings();
        const colors = this.colorSchemes[settings.colorScheme];
        
        // Clear canvas
        this.ctx.fillStyle = colors.background;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Add noise
        this.addNoise(settings.noiseLevel, colors);
        
        // Draw base patterns
        if (settings.showTechPatterns) {
            this.drawTechPatterns(colors);
        }
        
        if (settings.showCircuitPatterns) {
            this.drawCircuitPatterns(colors);
        }
        
        if (settings.showDataStreams) {
            this.drawDataStreams(colors);
        }
        
        if (settings.showRadarSweep) {
            this.drawRadarSweep(colors);
        }
        
        // Draw grid
        if (settings.showGrid) {
            this.drawGrid(settings.gridSize, colors);
        }
        
        // Draw warning stripes
        if (settings.showWarningStripes) {
            this.drawWarningStripes(colors);
        }
        
        // Draw targeting elements
        if (settings.showCrosshairs) {
            this.drawCrosshairs(colors);
        }
        
        if (settings.showTargetRings) {
            this.drawTargetRings(colors);
        }
        
        // Draw measurements
        if (settings.showMeasurements) {
            this.drawMeasurements(settings, colors);
        }
        
        // Draw coordinates
        if (settings.showCoordinates) {
            this.drawCoordinates(settings, colors);
        }
        
        // Draw border text
        this.drawBorderText(settings, colors);
        
        // Enable download buttons
        document.getElementById('downloadBtn').disabled = false;
        document.getElementById('downloadJpgBtn').disabled = false;
        
        this.currentTexture = this.canvas.toDataURL();
    }
    
    addNoise(level, colors) {
        const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
            const noise = (Math.random() - 0.5) * (level / 100) * 50;
            data[i] = Math.max(0, Math.min(255, data[i] + noise));     // R
            data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise)); // G
            data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise)); // B
        }
        
        this.ctx.putImageData(imageData, 0, 0);
    }
    
    drawTechPatterns(colors) {
        const size = this.canvas.width;
        const patternSize = 64;
        
        this.ctx.strokeStyle = colors.primary;
        this.ctx.lineWidth = 1;
        this.ctx.globalAlpha = 0.1;
        
        // Draw circuit-like patterns
        for (let x = 0; x < size; x += patternSize) {
            for (let y = 0; y < size; y += patternSize) {
                if (Math.random() > 0.7) {
                    this.drawCircuitPattern(x, y, patternSize, colors);
                }
            }
        }
        
        this.ctx.globalAlpha = 1;
    }
    
    drawCircuitPattern(x, y, size, colors) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y + size / 2);
        this.ctx.lineTo(x + size / 4, y + size / 2);
        this.ctx.lineTo(x + size / 4, y + size / 4);
        this.ctx.lineTo(x + size * 3 / 4, y + size / 4);
        this.ctx.lineTo(x + size * 3 / 4, y + size * 3 / 4);
        this.ctx.lineTo(x + size, y + size * 3 / 4);
        this.ctx.stroke();
    }
    
    drawGrid(gridSize, colors) {
        const size = this.canvas.width;
        const cellSize = size / gridSize;
        
        this.ctx.strokeStyle = colors.grid;
        this.ctx.lineWidth = 1;
        this.ctx.globalAlpha = 0.3;
        
        // Draw vertical lines
        for (let x = 0; x <= size; x += cellSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, size);
            this.ctx.stroke();
        }
        
        // Draw horizontal lines
        for (let y = 0; y <= size; y += cellSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(size, y);
            this.ctx.stroke();
        }
        
        this.ctx.globalAlpha = 1;
    }
    
    drawWarningStripes(colors) {
        const size = this.canvas.width;
        const stripeWidth = 20;
        const stripeHeight = 40;
        
        this.ctx.fillStyle = colors.warning;
        this.ctx.globalAlpha = 0.6;
        
        // Draw diagonal warning stripes in corners
        for (let i = 0; i < 8; i++) {
            const x = i * stripeWidth * 2;
            const y = i * stripeHeight;
            
            // Top-left corner
            this.ctx.save();
            this.ctx.translate(x, y);
            this.ctx.rotate(Math.PI / 4);
            this.ctx.fillRect(0, 0, stripeWidth, stripeHeight);
            this.ctx.restore();
            
            // Top-right corner
            this.ctx.save();
            this.ctx.translate(size - x, y);
            this.ctx.rotate(-Math.PI / 4);
            this.ctx.fillRect(0, 0, stripeWidth, stripeHeight);
            this.ctx.restore();
            
            // Bottom-left corner
            this.ctx.save();
            this.ctx.translate(x, size - y);
            this.ctx.rotate(-Math.PI / 4);
            this.ctx.fillRect(0, 0, stripeWidth, stripeHeight);
            this.ctx.restore();
            
            // Bottom-right corner
            this.ctx.save();
            this.ctx.translate(size - x, size - y);
            this.ctx.rotate(Math.PI / 4);
            this.ctx.fillRect(0, 0, stripeWidth, stripeHeight);
            this.ctx.restore();
        }
        
        this.ctx.globalAlpha = 1;
    }
    
    drawCrosshairs(colors) {
        const size = this.canvas.width;
        const centerX = size / 2;
        const centerY = size / 2;
        const crosshairSize = 100;
        
        this.ctx.strokeStyle = colors.primary;
        this.ctx.lineWidth = 2;
        this.ctx.globalAlpha = 0.8;
        
        // Draw crosshairs at center
        this.ctx.beginPath();
        this.ctx.moveTo(centerX - crosshairSize, centerY);
        this.ctx.lineTo(centerX + crosshairSize, centerY);
        this.ctx.moveTo(centerX, centerY - crosshairSize);
        this.ctx.lineTo(centerX, centerY + crosshairSize);
        this.ctx.stroke();
        
        // Draw corner crosshairs
        const cornerSize = 60;
        const offset = 100;
        
        // Top-left
        this.drawCornerCrosshair(offset, offset, cornerSize, colors);
        // Top-right
        this.drawCornerCrosshair(size - offset, offset, cornerSize, colors);
        // Bottom-left
        this.drawCornerCrosshair(offset, size - offset, cornerSize, colors);
        // Bottom-right
        this.drawCornerCrosshair(size - offset, size - offset, cornerSize, colors);
        
        this.ctx.globalAlpha = 1;
    }
    
    drawCornerCrosshair(x, y, size, colors) {
        this.ctx.beginPath();
        this.ctx.moveTo(x - size/2, y);
        this.ctx.lineTo(x + size/2, y);
        this.ctx.moveTo(x, y - size/2);
        this.ctx.lineTo(x, y + size/2);
        this.ctx.stroke();
    }
    
    drawTargetRings(colors) {
        const size = this.canvas.width;
        const centerX = size / 2;
        const centerY = size / 2;
        
        this.ctx.strokeStyle = colors.secondary;
        this.ctx.lineWidth = 1;
        this.ctx.globalAlpha = 0.6;
        
        // Draw concentric target rings
        for (let i = 1; i <= 5; i++) {
            const radius = i * 80;
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            this.ctx.stroke();
        }
        
        this.ctx.globalAlpha = 1;
    }
    
    drawCircuitPatterns(colors) {
        const size = this.canvas.width;
        const patternSize = 32;
        
        this.ctx.strokeStyle = colors.accent;
        this.ctx.lineWidth = 1;
        this.ctx.globalAlpha = 0.3;
        
        // Draw more complex circuit patterns
        for (let x = 0; x < size; x += patternSize) {
            for (let y = 0; y < size; y += patternSize) {
                if (Math.random() > 0.8) {
                    this.drawComplexCircuit(x, y, patternSize, colors);
                }
            }
        }
        
        this.ctx.globalAlpha = 1;
    }
    
    drawComplexCircuit(x, y, size, colors) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y + size / 2);
        this.ctx.lineTo(x + size / 3, y + size / 2);
        this.ctx.lineTo(x + size / 3, y + size / 3);
        this.ctx.lineTo(x + size * 2 / 3, y + size / 3);
        this.ctx.lineTo(x + size * 2 / 3, y + size * 2 / 3);
        this.ctx.lineTo(x + size, y + size * 2 / 3);
        this.ctx.stroke();
        
        // Add circuit nodes
        this.ctx.fillStyle = colors.primary;
        this.ctx.fillRect(x + size / 3 - 2, y + size / 2 - 2, 4, 4);
        this.ctx.fillRect(x + size * 2 / 3 - 2, y + size / 3 - 2, 4, 4);
    }
    
    drawDataStreams(colors) {
        const size = this.canvas.width;
        
        this.ctx.strokeStyle = colors.primary;
        this.ctx.lineWidth = 1;
        this.ctx.globalAlpha = 0.4;
        
        // Draw flowing data streams
        for (let i = 0; i < 8; i++) {
            const startX = Math.random() * size;
            const startY = Math.random() * size;
            this.drawDataStream(startX, startY, size, colors);
        }
        
        this.ctx.globalAlpha = 1;
    }
    
    drawDataStream(startX, startY, size, colors) {
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        
        let x = startX;
        let y = startY;
        
        for (let i = 0; i < 20; i++) {
            x += Math.random() * 20 - 10;
            y += Math.random() * 20 - 10;
            
            if (x < 0) x = 0;
            if (x > size) x = size;
            if (y < 0) y = 0;
            if (y > size) y = size;
            
            this.ctx.lineTo(x, y);
        }
        
        this.ctx.stroke();
    }
    
    drawRadarSweep(colors) {
        const size = this.canvas.width;
        const centerX = size / 2;
        const centerY = size / 2;
        const radius = size / 3;
        
        this.ctx.strokeStyle = colors.warning;
        this.ctx.lineWidth = 3;
        this.ctx.globalAlpha = 0.7;
        
        // Draw radar sweep line
        const time = Date.now() * 0.001;
        const angle = (time * 2) % (2 * Math.PI);
        
        this.ctx.beginPath();
        this.ctx.moveTo(centerX, centerY);
        this.ctx.lineTo(
            centerX + Math.cos(angle) * radius,
            centerY + Math.sin(angle) * radius
        );
        this.ctx.stroke();
        
        // Draw radar circle
        this.ctx.strokeStyle = colors.secondary;
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        this.ctx.stroke();
        
        this.ctx.globalAlpha = 1;
    }
    
    drawMeasurements(settings, colors) {
        const size = this.canvas.width;
        const baseFontSize = Math.max(12, size / 80);
        const fontSize = baseFontSize * (settings.scaleSize / 100);
        
        this.ctx.fillStyle = colors.text;
        this.ctx.font = `bold ${fontSize}px 'Courier New', monospace`;
        this.ctx.textAlign = 'center';
        this.ctx.globalAlpha = 0.8;
        
        // Draw scale indicators using positioned coordinates
        const scaleText = `SCALE: ${settings.scale}`;
        const scaleX = (settings.scaleX / 100) * size;
        const scaleY = (settings.scaleY / 100) * size;
        this.ctx.fillText(scaleText, scaleX, scaleY);
        
        // Draw measurement markers
        const markerSize = 5;
        const markerSpacing = size / 10;
        
        for (let i = 1; i < 10; i++) {
            const pos = i * markerSpacing;
            
            // Top markers
            this.ctx.fillRect(pos - markerSize/2, 0, markerSize, markerSize * 2);
            this.ctx.fillText(`${i * settings.gridSize / 10}`, pos, fontSize + 30);
            
            // Bottom markers
            this.ctx.fillRect(pos - markerSize/2, size - markerSize * 2, markerSize, markerSize * 2);
            this.ctx.fillText(`${i * settings.gridSize / 10}`, pos, size - 20);
            
            // Left markers
            this.ctx.fillRect(0, pos - markerSize/2, markerSize * 2, markerSize);
            this.ctx.save();
            this.ctx.translate(fontSize + 30, pos);
            this.ctx.rotate(-Math.PI / 2);
            this.ctx.fillText(`${i * settings.gridSize / 10}`, 0, 0);
            this.ctx.restore();
            
            // Right markers
            this.ctx.fillRect(size - markerSize * 2, pos - markerSize/2, markerSize * 2, markerSize);
            this.ctx.save();
            this.ctx.translate(size - fontSize - 30, pos);
            this.ctx.rotate(Math.PI / 2);
            this.ctx.fillText(`${i * settings.gridSize / 10}`, 0, 0);
            this.ctx.restore();
        }
        
        this.ctx.globalAlpha = 1;
    }
    
    drawCoordinates(settings, colors) {
        const size = this.canvas.width;
        const fontSize = Math.max(10, size / 100);
        
        this.ctx.fillStyle = colors.secondary;
        this.ctx.font = `${fontSize}px 'Courier New', monospace`;
        this.ctx.textAlign = 'left';
        this.ctx.globalAlpha = 0.6;
        
        // Draw coordinate grid labels
        const cellSize = size / settings.gridSize;
        
        for (let i = 0; i <= settings.gridSize; i += 5) {
            const pos = i * cellSize;
            
            // X coordinates (top)
            this.ctx.fillText(`X${i}`, pos + 2, fontSize + 2);
            
            // Y coordinates (left)
            this.ctx.save();
            this.ctx.translate(fontSize + 2, pos + fontSize);
            this.ctx.rotate(-Math.PI / 2);
            this.ctx.fillText(`Y${i}`, 0, 0);
            this.ctx.restore();
        }
        
        this.ctx.globalAlpha = 1;
    }
    
    drawBorderText(settings, colors) {
        const size = this.canvas.width;
        const baseFontSize = Math.max(14, size / 70);
        
        this.ctx.fillStyle = colors.text;
        this.ctx.globalAlpha = 0.9;
        
        // Draw project title with positioning and sizing
        const titleFontSize = baseFontSize * (settings.titleSize / 100);
        this.ctx.font = `bold ${titleFontSize}px 'Courier New', monospace`;
        this.ctx.textAlign = 'center';
        const titleX = (settings.titleX / 100) * size;
        const titleY = (settings.titleY / 100) * size;
        this.ctx.fillText(settings.projectTitle, titleX, titleY);
        
        // Draw project code with positioning and sizing
        const codeFontSize = baseFontSize * (settings.codeSize / 100);
        this.ctx.font = `bold ${codeFontSize}px 'Courier New', monospace`;
        const codeX = (settings.codeX / 100) * size;
        const codeY = (settings.codeY / 100) * size;
        this.ctx.fillText(settings.projectCode, codeX, codeY);
        
        // Draw version in corners with positioning and sizing
        const cornerBaseFontSize = Math.max(10, size / 100);
        const versionFontSize = cornerBaseFontSize * (settings.versionSize / 100);
        this.ctx.font = `bold ${versionFontSize}px 'Courier New', monospace`;
        
        // Top-left version
        this.ctx.textAlign = 'left';
        const versionTopX = (settings.versionTopX / 100) * size;
        const versionTopY = (settings.versionTopY / 100) * size;
        this.ctx.fillText(settings.version, versionTopX, versionTopY);
        
        // Top-right version
        this.ctx.textAlign = 'right';
        const versionBottomX = (settings.versionBottomX / 100) * size;
        const versionBottomY = (settings.versionBottomY / 100) * size;
        this.ctx.fillText(settings.version, versionBottomX, versionBottomY);
        
        // Bottom-left label
        this.ctx.textAlign = 'left';
        this.ctx.fillText('PROTOTYPE', 10, size - 10);
        
        // Bottom-right label
        this.ctx.textAlign = 'right';
        this.ctx.fillText('TEST AREA', size - 10, size - 10);
        
        this.ctx.globalAlpha = 1;
    }
    
    downloadTexture(format) {
        if (!this.currentTexture) return;
        
        const link = document.createElement('a');
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        const settings = this.getSettings();
        const filename = `${settings.projectCode}_${timestamp}.${format}`;
        
        if (format === 'jpg') {
            const jpgData = this.canvas.toDataURL('image/jpeg', 0.9);
            link.href = jpgData;
        } else {
            link.href = this.currentTexture;
        }
        
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Initialize the generator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new PrototypeTextureGenerator();
});
