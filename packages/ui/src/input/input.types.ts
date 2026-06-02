import * as React from 'react';

// ── Input State ───────────────────────────────────────────────────────────────

/**
 * The four communicable states of an input field.
 *
 * undefined — Default, no feedback signal.
 * error     — Validation failed. Requires correction before proceeding.
 * success   — Validation passed. Positive confirmation.
 * warning   — Attention needed, but not blocking submission.
 */
export type InputState = 'error' | 'success' | 'warning' | undefined;

// ── Field Props ───────────────────────────────────────────────────────────────

/**
 * FieldProps wraps an input with the full accessibility structure:
 * label → input → description/error.
 *
 * All three sub-components are wired together via generated IDs so that
 * screen readers announce the full context without any manual aria work.
 */
export interface FieldProps {
  /**
   * id — Required for <label> association.
   * Every input must have a unique, descriptive id.
   */
  id: string;

  /** The visible label text. Always required — never rely on placeholder alone. */
  label: string;

  /**
   * description — Helper text shown below the input in the default state.
   * Explains what the field expects, not how to fill it.
   *
   * @example "Must be at least 8 characters and include one number."
   */
  description?: string;

  /**
   * error — Validation error message. Replaces description when present.
   * Must be actionable: tell the user what went wrong and how to fix it.
   *
   * @example "Email address is invalid. Check for missing @ or domain."
   */
  error?: string;

  /**
   * success — Validation success message. Shown when field is valid.
   * Keep short. The checkmark icon communicates success; text reinforces it.
   *
   * @example "Username is available."
   */
  success?: string;

  /** Whether the field is required. Adds aria-required and a visual indicator. */
  required?: boolean | undefined;

  /** Opt out of the Field wrapper and use the raw input. */
  hideLabel?: boolean;
}

// ── Input Props ───────────────────────────────────────────────────────────────

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'>,
    FieldProps {
  /**
   * state — Explicit state override.
   * Derived from `error` and `success` props automatically.
   * Only set manually if you need to control state without messages.
   */
  state?: InputState;
}
