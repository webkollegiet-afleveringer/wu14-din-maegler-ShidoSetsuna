"use client";

import { useActionState } from "react";
import { ArrowRight } from "lucide-react";
import { subscribeAction, type SubscribeState } from "../_lib/actions";

const initialState: SubscribeState = { status: "idle" };

export function NewsletterForm() {
  const [state, formAction, pending] = useActionState(
    subscribeAction,
    initialState
  );

  return (
    <form action={formAction} className="w-full md:max-w-md" noValidate={false}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email adresse
      </label>
      <div className="flex items-center bg-white">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          disabled={pending}
          placeholder="Indtast din email adresse"
          className="flex-1 min-w-0 px-4 py-3 text-heading text-sm placeholder:text-gray-400 disabled:opacity-60"
        />
        <button
          type="submit"
          aria-label="Tilmeld nyhedsbrev"
          disabled={pending}
          className="px-4 py-3 text-heading disabled:opacity-40"
        >
          <ArrowRight aria-hidden="true" size={20} />
        </button>
      </div>

      {/* Live-region feedback. role="status" is polite (won't interrupt);
          role="alert" is assertive for errors. */}
      {state.status === "success" && (
        <p role="status" className="mt-3 text-sm">
          Tak! Du er nu tilmeldt vores nyhedsbrev.
        </p>
      )}
      {state.status === "error" && (
        <p role="alert" className="mt-3 text-sm text-red-200">
          {state.message}
        </p>
      )}
    </form>
  );
}