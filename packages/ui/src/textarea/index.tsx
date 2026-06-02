'use client';

import * as React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '../utils';

/**
 * THE PURPOSEFUL DESIGN — Textarea
 *
 * ── Why this component exists ───────────────────────────────────────────────
 * Long-form text entry has distinct requirements from short-form input:
 * users need to see more of what they've written, understand character
 * constraints, and resize as needed.
 *
 * ── What user problem it solves ─────────────────────────────────────────────
 * Gives users a complete, self-documenting text entry experience:
 * label → textarea → character count + validation.
 * Every constraint the user must respect is visible before they hit it.
 *
 * ── How it reduces cognitive load ───────────────────────────────────────────
 * The character count is always visible, not only at the limit. Users can
 * plan their content. The counter color shifts as users approach the limit,
 * giving progressive feedback without interrupting flow.
 *
 * ── Accessibility ───────────────────────────────────────────────────────────
 * - label always associated via htmlFor + id
 * - aria-describedby connects character count and helper text
 * - aria-invalid on error state
 * - Character count uses aria-live="polite" for screen reader updates
 */

// ── Types ─────────────────────────────────────────────────────────────────────

export type TextareaState = 'error' | 'success' | undefined;

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  id: string;
  label: string;
  description?: string;
  error?: string;
  success?: string;
  required?: boolean;
  /**
   * maxLength — Shows a character counter when set.
   * The counter shifts to warning color at 80% and danger at 95%.
   */
  maxLength?: number;
  /** Minimum visible rows. Defaults to 3. */
  rows?: number;
}

// ── Character Counter ─────────────────────────────────────────────────────────

function CharacterCounter({
  current,
  max,
}: {
  current: number;
  max: number;
}) {
  const remaining = max - current;
  const ratio = current / max;

  const colorClass =
    ratio >= 0.95
      ? 'text-danger'
      : ratio >= 0.80
        ? 'text-warning'
        : 'text-foreground-muted';

  return (
    <span
      className={cn('text-xs tabular-nums transition-colors duration-fast', colorClass)}
      aria-live="polite"
      aria-atomic="true"
      aria-label={`${remaining} characters remaining`}
    >
      {current}/{max}
    </span>
  );
}

// ── Textarea Component ────────────────────────────────────────────────────────

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      id,
      label,
      description,
      error,
      success,
      required,
      maxLength,
      rows = 3,
      value,
      defaultValue,
      onChange,
      disabled,
      ...props
    },
    ref
  ) => {
    const [charCount, setCharCount] = React.useState<number>(() => {
      if (typeof value === 'string') return value.length;
      if (typeof defaultValue === 'string') return defaultValue.length;
      return 0;
    });

    const state: TextareaState = error ? 'error' : success ? 'success' : undefined;
    const helperId = `${id}-helper`;
    const counterId = `${id}-counter`;
    const hasHelper = !!(error || success || description);

    const stateClasses =
      state === 'error'
        ? 'border-danger focus-visible:ring-danger/30'
        : state === 'success'
          ? 'border-success focus-visible:ring-success/30'
          : 'border-border focus-visible:border-border-strong focus-visible:ring-border-strong/20';

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      onChange?.(e);
    };

    // Sync char count when value prop changes (controlled)
    React.useEffect(() => {
      if (typeof value === 'string') setCharCount(value.length);
    }, [value]);

    const describedBy = [hasHelper && helperId, maxLength && counterId]
      .filter(Boolean)
      .join(' ') || undefined;

    return (
      <div className="flex flex-col gap-1.5">
        {/* Label row */}
        <div className="flex items-center justify-between">
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

          {/* Character counter — only visible when maxLength is set */}
          {maxLength && (
            <span id={counterId} className="text-xs text-foreground-muted" aria-hidden="true">
              <CharacterCounter current={charCount} max={maxLength} />
            </span>
          )}
        </div>

        {/* Textarea */}
        <textarea
          id={id}
          ref={ref}
          rows={rows}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          required={required}
          aria-invalid={state === 'error' || undefined}
          aria-required={required || undefined}
          aria-describedby={describedBy}
          onChange={handleChange}
          className={cn(
            'flex min-h-[80px] w-full rounded-sm border',
            'bg-surface-subtle px-3 py-2',
            'text-sm text-foreground leading-relaxed',
            'placeholder:text-foreground-muted',
            'resize-y',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'transition-colors duration-fast ease-purposeful',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            stateClasses,
            className
          )}
          {...props}
        />

        {/* Helper / Error / Success */}
        {hasHelper && (
          <div
            id={helperId}
            className={cn(
              'flex items-start gap-1.5 text-xs leading-relaxed',
              state === 'error'
                ? 'text-danger'
                : state === 'success'
                  ? 'text-success'
                  : 'text-foreground-muted'
            )}
          >
            {state === 'error' && (
              <AlertCircle size={14} className="mt-0.5 shrink-0" aria-hidden />
            )}
            {state === 'success' && (
              <CheckCircle2 size={14} className="mt-0.5 shrink-0" aria-hidden />
            )}
            <span>{error ?? success ?? description}</span>
          </div>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
