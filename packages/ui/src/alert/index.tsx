import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Info, CheckCircle2, AlertTriangle, AlertCircle, X } from 'lucide-react';
import { cn } from '../utils';

/**
 * THE PURPOSEFUL DESIGN — Alert
 *
 * ── Why this component exists ───────────────────────────────────────────────
 * Some information cannot wait. It must interrupt the reading flow with
 * purpose. The Alert is the system's mechanism for communicating
 * consequential messages that the user must not miss.
 *
 * ── What user problem it solves ─────────────────────────────────────────────
 * Users need to understand the current state of a system, the result of
 * an action, or a risk before proceeding. Generic text does not carry
 * enough signal weight. Alerts combine color, icon, and structure to
 * communicate urgency and type simultaneously.
 *
 * ── What happens if it does not exist ───────────────────────────────────────
 * Teams rely on ad-hoc colored divs. The color contracts break down.
 * "Red" stops meaning "error" because it's used for promotional banners.
 * Users can no longer scan for critical information.
 *
 * ── How it reduces cognitive load ───────────────────────────────────────────
 * The icon communicates variant at a glance, before the text is read.
 * The title gives the category. The description gives the detail.
 * The action gives the resolution. Users process in layers of priority.
 *
 * ── Accessibility ───────────────────────────────────────────────────────────
 * - role="alert" for danger/warning ensures screen reader announcement
 * - role="status" for info/success uses a polite interruption
 * - Icons are aria-hidden (meaning carried by text)
 * - Dismiss button has an accessible label
 */

// ── Icon Map ──────────────────────────────────────────────────────────────────

const ALERT_ICONS = {
  default: Info,
  info:    Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  danger:  AlertCircle,
} as const;

// ── Variants ──────────────────────────────────────────────────────────────────

const alertVariants = cva(
  'relative w-full border p-4',
  {
    variants: {
      variant: {
        default:
          'bg-surface text-foreground border-border',
        info:
          'bg-info-subtle text-info-foreground border-info/40',
        success:
          'bg-success-subtle text-success-foreground border-success/40',
        warning:
          'bg-warning-subtle text-warning-foreground border-warning/40',
        danger:
          'bg-danger-subtle text-danger-foreground border-danger/40',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

// ── Types ─────────────────────────────────────────────────────────────────────

export type AlertVariant = 'default' | 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  /**
   * title — Bold summary. Required for accessibility.
   * Announce the type of alert in the title, not just in the color.
   */
  title?: string;

  /**
   * description — Supporting detail.
   * Explain what happened and what the user should do.
   */
  description?: string;

  /**
   * action — A React node rendered at the bottom of the alert.
   * Use for a link or button that resolves the alert's situation.
   * Keep to a single action. Maximum two.
   */
  action?: React.ReactNode;

  /**
   * dismissible — Whether the alert can be dismissed.
   * Only use for non-critical alerts (info, success).
   * Never make a danger alert dismissible.
   */
  dismissible?: boolean;

  /**
   * onDismiss — Callback when the dismiss button is clicked.
   * The parent controls visibility. This component does not manage
   * its own mount/unmount.
   */
  onDismiss?: () => void;

  /**
   * showIcon — Whether to show the leading icon. Default: true.
   */
  showIcon?: boolean;
}

// ── Component ─────────────────────────────────────────────────────────────────

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant = 'default',
      title,
      description,
      action,
      dismissible,
      onDismiss,
      showIcon = true,
      children,
      ...props
    },
    ref
  ) => {
    const Icon = ALERT_ICONS[variant ?? 'default'];

    // Danger and warning use role="alert" (assertive).
    // Info and success use role="status" (polite).
    const role =
      variant === 'danger' || variant === 'warning' ? 'alert' : 'status';

    const iconColorClass =
      variant === 'info'    ? 'text-info'    :
      variant === 'success' ? 'text-success' :
      variant === 'warning' ? 'text-warning' :
      variant === 'danger'  ? 'text-danger'  :
      'text-foreground-secondary';

    return (
      <div
        ref={ref}
        role={role}
        aria-live={role === 'status' ? 'polite' : undefined}
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <div className="flex gap-3">
          {/* Icon */}
          {showIcon && (
            <span className={cn('mt-0.5 shrink-0', iconColorClass)} aria-hidden="true">
              <Icon size={16} />
            </span>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Title */}
            {title && (
              <p className="text-sm font-medium leading-snug mb-1">{title}</p>
            )}

            {/* Description / children */}
            {description ? (
              <p className="text-sm leading-relaxed opacity-90">{description}</p>
            ) : children ? (
              <div className="text-sm leading-relaxed opacity-90">{children}</div>
            ) : null}

            {/* Action */}
            {action && (
              <div className="mt-3">{action}</div>
            )}
          </div>

          {/* Dismiss */}
          {dismissible && (
            <button
              type="button"
              onClick={onDismiss}
              className={cn(
                'shrink-0 rounded-xs p-0.5 opacity-60 transition-opacity hover:opacity-100',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2'
              )}
              aria-label="Dismiss alert"
            >
              <X size={14} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    );
  }
);
Alert.displayName = 'Alert';

// ── Sub-components (composition API) ──────────────────────────────────────────
// For advanced usage when title/description props are insufficient.

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm font-medium leading-snug mb-1', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm leading-relaxed opacity-90', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
