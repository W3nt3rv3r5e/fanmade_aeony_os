/**
 * AeonyOS: Zenith - Theme Management System
 * High-performance hex randomization for industrial UI.
 */

interface SystemTheme {
    primaryColor: string;
    background: string;
}

class ThemeManager {
    private root: HTMLElement;

    constructor() {
        this.root = document.documentElement;
    }

    /**
     * Generates a valid 6-digit Hex code for the Architect.
     */
    private generateRandomHex(): string {
        const hex = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');
        return `#${hex}`;
    }

    /**
     * Updates the Neon Violet primary variable across the entire OS.
     */
    public randomizeSystemTheme(): void {
        const newColor: string = this.generateRandomHex();

        // Apply to CSS variables defined in style.css
        this.root.style.setProperty('--primary-color', newColor);

        // Visual confirmation for the Start Button
        const startBtn = document.getElementById('start-button');
        if (startBtn) {
            startBtn.style.backgroundColor = newColor;
            setTimeout(() => {
                startBtn.style.backgroundColor = 'transparent';
            }, 200);
        }

        console.log(`[AeonyOS-TS] Theme Purge Complete: ${newColor}`);
    }
}

// Export as a singleton for the Zenith architecture
export const systemTheme = new ThemeManager();
