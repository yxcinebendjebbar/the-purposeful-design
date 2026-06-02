/**
 * THE PURPOSEFUL DESIGN — @the-purposeful-design/ui
 *
 * Public API surface. Import from this file, not from individual components.
 *
 * @example
 * import { Button, Input, Card, CardHeader } from '@the-purposeful-design/ui'
 */

// ── Components ────────────────────────────────────────────────────────────────

export { Button, buttonVariants } from './button';
export type { ButtonProps } from './button';

export { Input, RawInput } from './input';
export type { InputProps, InputState } from './input';

export { Textarea } from './textarea';
export type { TextareaProps, TextareaState } from './textarea';

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardDivider,
} from './card';

export { Badge, badgeVariants } from './badge';
export type { BadgeProps } from './badge';

export { Alert, AlertTitle, AlertDescription } from './alert';
export type { AlertProps, AlertVariant } from './alert';

export { Separator } from './separator';
export type { SeparatorProps } from './separator';

// ── Utilities ─────────────────────────────────────────────────────────────────

export { cn } from './utils';
