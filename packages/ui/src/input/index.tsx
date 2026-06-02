import * as React from 'react';
import { AlertCircle, CheckCircle2, AlertTriangle } from 'lucide-react';
import { cn } from '../utils';
import type { InputProps, InputState } from './input.types';

/**
 * THE PURPOSEFUL DESIGN — Input
 *
 * ── Why this component exists ───────────────────────────────────────────────
 * Text input is the most fundamental data-collection mechanism in any
 * interface. Without a principled implementation, each team reinvents
 * focus states, error states, and label associations — inconsistently.
 *
 * ── What user problem it solves ─────────────────────────────────────────────
 * It gives users a single, predictable text entry mechanism that clearly
 * communicates: what to fill in (label), what format is expected
 * (description), and what went wrong (error).
 *
 * ── What happens if it does not exist ───────────────────────────────────────
 * Raw <input> elements have no visual design system, no error state
 * handling, and no accessible label associations by default. Every form
 * becomes a custom implementation with inconsistent behavior.
 *
 * ── How it reduces cognitive load ───────────────────────────────────────────
 * The label–input–helper structure is universal and learnable. Users
 * develop expectations from the first field and apply them to all others.
 * Consistent error placement (always below the input) means no hunting.
 *
 * ── Accessibility ───────────────────────────────────────────────────────────
 * - label is always associated via htmlFor + id
 * - aria-describedby connects helper text to the input
 * - aria-invalid signals error state to screen readers
 * - aria-required communicates required fields
 * - Focus ring is high-contrast and consistently placed
 * - Error icons are aria-hidden (text carries the meaning)
 */

// ── Input Element ─────────────────────────────────────────────────────────────

const inputBaseClasses = [
  'flex h-10 w-full rounded-sm',
  'border bg-surface-subtle px-3 py-2',
  'text-sm text-foreground',
  'placeholder:text-foreground-muted',
  'file:border-0 file:bg-transparent file:text-sm file:font-medium',
  'disabled:cursor-not-allowed disabled:opacity-50',
  'transition-colors duration-fast ease-purposeful',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
].join(' ');

function getInputStateClasses(state: InputState): string {
  switch (state) {
    case 'error':
      return 'border-danger focus-visible:ring-danger/30 focus-visible:border-danger';
    case 'success':
      return 'border-success focus-visible:ring-success/30 focus-visible:border-success';
    case 'warning':
      return 'border-warning focus-visible:ring-warning/30 focus-visible:border-warning';
    default:
      return 'border-border focus-visible:border-border-strong focus-visible:ring-border-strong/20';
  }
}

function deriveState(error?: string, success?: string): InputState {
  if (error) return 'error';
  if (success) return 'success';
  return undefined;
}

// ── State Icon ────────────────────────────────────────────────────────────────

function StateIcon({ state }: { state: InputState }) {
  if (!state) return null;

  const props = { size: 14, className: 'shrink-0 mt-0.5', 'aria-hidden': true } as const;

  switch (state) {
    case 'error':
      return <AlertCircle {...props} className={cn(props.className, 'text-danger')} />;
    case 'success':
      return <CheckCircle2 {...props} className={cn(props.className, 'text-success')} />;
    case 'warning':
      return <AlertTriangle {...props} className={cn(props.className, 'text-warning')} />;
  }
}

// ── Helper Text ───────────────────────────────────────────────────────────────

function HelperText({
  id,
  state,
  error,
  success,
  description,
}: {
  id: string;
  state: InputState;
  error?: string | undefined;
  success?: string | undefined;
  description?: string | undefined;
}) {
  const message = state === 'error' ? error : state === 'success' ? success : description;
  if (!message) return null;

  const colorClass =
    state === 'error'
      ? 'text-danger'
      : state === 'success'
        ? 'text-success'
        : state === 'warning'
          ? 'text-warning'
          : 'text-foreground-muted';

  return (
    <div
      id={id}
      className={cn('flex items-start gap-1.5 text-xs leading-relaxed', colorClass)}
    >
      <StateIcon state={state} />
      <span>{message}</span>
    </div>
  );
}

// ── Input Component ───────────────────────────────────────────────────────────

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      id,
      label,
      description,
      error,
      success,
      required,
      hideLabel = false,
      state: stateProp,
      disabled,
      ...props
    },
    ref
  ) => {
    const state = stateProp ?? deriveState(error, success);
    const helperId = `${id}-helper`;
    const hasHelper = !!(error || success || description);

    return (
      <div className="flex flex-col gap-1.5">
        {/* Label */}
        {!hideLabel && (
          <label
            htmlFor={id}
            className="text-xs font-medium text-foreground tracking-wide"
          >
            {label}
            {required && (
              <span className="ml-1 text-danger" aria-label="required">
                *
              </span>
            )}
          </label>
        )}

        {/* Input */}
        <input
          id={id}
          type={type}
          ref={ref}
          disabled={disabled}
          required={required}
          aria-invalid={state === 'error' || undefined}
          aria-required={required || undefined}
          aria-describedby={hasHelper ? helperId : undefined}
          className={cn(inputBaseClasses, getInputStateClasses(state), className)}
          {...props}
        />

        {/* Helper / Error / Success */}
        <HelperText
          id={helperId}
          state={state}
          error={error}
          success={success}
          description={description}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

// ── Raw Input ─────────────────────────────────────────────────────────────────
// For use inside custom Field wrappers. No label or helper text.

const RawInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { state?: InputState }
>(({ className, state, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(inputBaseClasses, getInputStateClasses(state), className)}
    {...props}
  />
));
RawInput.displayName = 'RawInput';

export { Input, RawInput };
export type { InputProps, InputState } from './input.types';
