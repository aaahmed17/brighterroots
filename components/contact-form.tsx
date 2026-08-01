"use client";

import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xgvyekag");

  if (state.succeeded) {
    return (
      <div className="mt-8 rounded-xl border border-border bg-card p-6 text-center">
        <p className="text-lg font-semibold text-green-900">
          Thanks for your submission!
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  const inputClasses =
    "h-11 w-full rounded-lg border border-input bg-card px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/50 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input
            type="text"
            name="First Name:"
            placeholder="First Name*"
            required
            minLength={2}
            className={inputClasses}
          />
        </div>
        <div>
          <input
            type="text"
            name="Last Name:"
            placeholder="Last Name*"
            required
            minLength={2}
            className={inputClasses}
          />
        </div>
      </div>
      <div>
        <input
          type="email"
          name="Email:"
          placeholder="Email Address*"
          required
          className={inputClasses}
        />
        <ValidationError
          prefix="Email"
          field="Email:"
          errors={state.errors}
          className="mt-1 block text-xs font-medium text-destructive"
        />
      </div>
      <div>
        <input
          type="tel"
          name="Phone:"
          placeholder="Phone Number*"
          required
          className={inputClasses}
        />
      </div>
      <div>
        <textarea
          name="Message:"
          placeholder="Write your message here ..."
          rows={5}
          className="w-full resize-none rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/50 focus:outline-none"
        />
        <ValidationError
          prefix="Message"
          field="Message:"
          errors={state.errors}
          className="mt-1 block text-xs font-medium text-destructive"
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex h-10 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md active:translate-y-px disabled:pointer-events-none disabled:opacity-50"
        >
          {state.submitting ? "SENDING..." : "SEND MESSAGE"}
        </button>
        <button
          type="reset"
          className="inline-flex h-10 items-center rounded-full border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
        >
          RESET
        </button>
      </div>
      {state.errors && !state.succeeded && (
        <p className="text-xs font-medium text-destructive">
          There was a problem sending your message. Please try again.
        </p>
      )}
    </form>
  );
}
