"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Send } from "lucide-react";
import { FORMSPREE_FORM_ID } from "@/lib/formspree";

export function CareersApplicationForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  const inputClasses =
    "h-11 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/50 focus:outline-none";

  if (state.succeeded) {
    return (
      <div className="rounded-xl border border-border bg-background p-8 text-center">
        <p className="text-lg font-semibold text-green-900">
          Application submitted!
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for your interest. We will review your application and be in
          touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="relative flex flex-col gap-5"
    >
      <input type="hidden" name="Form Type" value="Careers Application" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="career-name" className="sr-only">
            Full Name
          </label>
          <input
            id="career-name"
            type="text"
            name="Full Name"
            placeholder="Full Name"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="career-email" className="sr-only">
            Email Address
          </label>
          <input
            id="career-email"
            type="email"
            name="Email Address"
            placeholder="Email Address"
            required
            className={inputClasses}
          />
          <ValidationError
            prefix="Email"
            field="Email Address"
            errors={state.errors}
            className="mt-1 block text-xs font-medium text-destructive"
          />
        </div>
        <div>
          <label htmlFor="career-phone" className="sr-only">
            Phone Number
          </label>
          <input
            id="career-phone"
            type="tel"
            name="Phone Number"
            placeholder="Phone Number"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="career-location" className="sr-only">
            Location
          </label>
          <input
            id="career-location"
            type="text"
            name="Location"
            placeholder="Location"
            className={inputClasses}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="career-interest"
          className="mb-2 block text-sm font-medium text-green-900"
        >
          Why are you interested in working with us?
        </label>
        <textarea
          id="career-interest"
          name="Interest"
          placeholder="Type your answer here..."
          rows={4}
          required
          className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:ring-3 focus:ring-ring/50 focus:outline-none"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="career-resume"
            className="mb-2 block text-sm font-medium text-green-900"
          >
            Upload Resume
          </label>
          <input
            id="career-resume"
            type="file"
            name="Resume"
            accept=".pdf,.doc,.docx"
            className="w-full text-sm text-foreground/80 file:mr-3 file:rounded-md file:border-0 file:bg-muted file:px-3 file:py-2 file:text-sm file:font-medium"
          />
        </div>
        <div>
          <label
            htmlFor="career-cover"
            className="mb-2 block text-sm font-medium text-green-900"
          >
            Upload Cover Letter (Optional)
          </label>
          <input
            id="career-cover"
            type="file"
            name="Cover Letter"
            accept=".pdf,.doc,.docx"
            className="w-full text-sm text-foreground/80 file:mr-3 file:rounded-md file:border-0 file:bg-muted file:px-3 file:py-2 file:text-sm file:font-medium"
          />
        </div>
      </div>
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex h-12 min-w-[220px] items-center justify-center gap-2 rounded-full bg-green-900 px-8 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800 disabled:pointer-events-none disabled:opacity-50"
        >
          {state.submitting ? "Submitting..." : "Submit Application"}
          <Send className="size-4" aria-hidden />
        </button>
      </div>
      {state.errors && !state.succeeded && (
        <p className="text-center text-xs font-medium text-destructive">
          There was a problem submitting your application. Please try again.
        </p>
      )}
    </form>
  );
}
