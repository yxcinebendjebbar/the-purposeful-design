import { semanticColors, colorVars, type ColorToken } from '@the-purposeful-design/tokens';
import { hexToHslString } from './utils';

/**
 * THE PURPOSEFUL DESIGN — Light Theme
 *
 * Generates the CSS custom properties for the light theme.
 * Intended to be injected into the :root selector.
 */

export function getLightCssVariables(): Record<string, string> {
  const vars: Record<string, string> = {};

  (Object.keys(semanticColors) as ColorToken[]).forEach((token) => {
    const varName = colorVars[token as keyof typeof colorVars];
    const hexValue = semanticColors[token].light;
    
    // Some values like overlay are rgba and ghost is transparent
    if (hexValue.startsWith('rgba') || hexValue === 'transparent') {
      vars[varName] = hexValue;
    } else {
      vars[varName] = hexToHslString(hexValue);
    }
  });

  return vars;
}

export const lightThemeCss = `:root {
${Object.entries(getLightCssVariables())
  .map(([key, val]) => `  ${key}: ${val};`)
  .join('\n')}
}`;
