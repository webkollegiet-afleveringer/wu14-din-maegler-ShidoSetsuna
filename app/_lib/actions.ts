"use server";

import { API_BASE } from "./api";

export type SubscribeState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

/**
 * Server action: sign a user up for the newsletter.
 *
 * Returns a discriminated union so the client can render the right
 * message. Never throws to the client - every failure path returns
 * an error state with a Danish user-facing message.
 */
export async function subscribeAction(
  _prev: SubscribeState,
  formData: FormData
): Promise<SubscribeState> {
  const raw = formData.get("email");
  const email = typeof raw === "string" ? raw.trim() : "";

  if (!email) {
    return { status: "error", message: "Indtast venligst din email adresse." };
  }
  // Email sanity check. Browser-level type="email" already
  // blocks the obvious cases
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Den indtastede email er ikke gyldig." };
  }

  try {
    const res = await fetch(`${API_BASE}/subscribers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (!res.ok) {
      return {
        status: "error",
        message: "Noget gik galt. Prøv venligst igen senere.",
      };
    }
    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Kunne ikke kontakte serveren. Tjek din internetforbindelse.",
    };
  }
}
