import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * Configure tailwind-merge to understand our custom typography, spacing, and radius scales.
 */
const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-display-2xl',
        'text-display-xl',
        'text-display-lg',
        'text-display-md',
        'text-display-sm',
        'text-heading-lg',
        'text-heading-md',
        'text-heading-sm',
        'text-body-lg',
        'text-body-md',
        'text-body-sm',
        'text-caption',
        'text-label-lg',
        'text-label-sm',
        'text-code',
        'text-code-sm',
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
