'use client'

import type { Metadata } from 'next'
import {
  Button, Input, Separator, Alert, Card,
  CardContent, CardHeader, CardTitle, CardDescription, CardFooter
} from '@the-purposeful-design/ui'


/**
 * EXAMPLE: LOGIN PAGE
 *
 * Demonstrates:
 * — Purposeful hierarchy: one primary action per screen
 * — Minimal color usage: black on white, semantic signals only
 * — Meaningful actions: every element has a clear purpose
 * — Low visual noise: no gradients, no illustrations, no decorative elements
 *
 * Design decisions:
 * — Centered card, max-width constrained
 * — No logo image — wordmark only (text costs nothing, images cost loading time)
 * — "Forgot password" is a ghost link, not a button (tertiary priority)
 * — OAuth is secondary — reduces first-time cognitive load
 * — Error alert above the form, not inline, because it affects the whole form
 */

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-2.5rem)] items-center justify-center p-6">
      <div className="w-full max-w-sm">

        {/* Wordmark */}
        <div className="mb-8 text-center">
          <div className="mb-2 inline-flex items-baseline gap-2">
            <span className="text-stone-300 text-sm">⬛</span>
            <span className="text-sm font-medium tracking-tight text-stone-950">The Purposeful Design</span>
          </div>
          <h1 className="text-2xl font-light tracking-tight text-stone-950">
            Sign in to your account
          </h1>
          <p className="mt-2 text-sm text-stone-500">
            Don&apos;t have an account?{' '}
            <a href="#" className="font-medium text-stone-950 underline underline-offset-2 hover:no-underline">
              Create one
            </a>
          </p>
        </div>

        {/* Form card */}
        <Card>
          <CardContent className="pt-6">
            {/* Example: form-level error — use Alert, not inline errors */}
            {/* Uncomment to see the error state:
            <Alert
              variant="danger"
              title="Sign-in failed"
              description="The email or password is incorrect. Try again or reset your password."
              className="mb-5"
            />
            */}

            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <Input
                id="login-email"
                label="Email address"
                type="email"
                placeholder="you@company.com"
                required
                autoComplete="email"
              />
              <div>
                <Input
                  id="login-password"
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                />
                <div className="mt-1.5 text-right">
                  <a
                    href="#"
                    className="text-xs text-stone-500 underline-offset-2 hover:text-stone-950 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </form>

            <div className="relative my-5">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-stone-400">
                or continue with
              </span>
            </div>

            {/* OAuth — secondary tier */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="secondary"
                className="w-full text-xs"
                icon={
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                }
              >
                Google
              </Button>
              <Button
                variant="secondary"
                className="w-full text-xs"
                icon={
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                }
              >
                GitHub
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs text-stone-400">
          By signing in, you agree to the{' '}
          <a href="#" className="underline underline-offset-2 hover:text-stone-950">Terms</a>
          {' '}and{' '}
          <a href="#" className="underline underline-offset-2 hover:text-stone-950">Privacy Policy</a>
        </p>
      </div>
    </div>
  )
}
