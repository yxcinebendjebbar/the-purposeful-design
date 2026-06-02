export * from './light';
export * from './dark';
export * from './utils';

import { lightThemeCss } from './light';
import { darkThemeCss } from './dark';

/**
 * The complete CSS string containing both light and dark themes.
 * Can be written to a CSS file or injected via a style tag.
 */
export const themeCss = `
/* THE PURPOSEFUL DESIGN — Theme Variables */
${lightThemeCss}
${darkThemeCss}
`;
