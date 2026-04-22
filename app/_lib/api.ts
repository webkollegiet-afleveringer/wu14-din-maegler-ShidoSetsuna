const API_BASE = "https://dinmaegler.onrender.com";

/**
 * Fetch the total number of homes currently for sale.
 * Returns `null` if the API is unreachable, so callers can render a
 * graceful fallback instead of crashing.
 *
 * Cached for 60 seconds to avoid hammering the API on every request.
 */
export async function getHomesCount(): Promise<number | null> {
  try {
    const res = await fetch(`${API_BASE}/homes/count`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return (await res.json()) as number;
  } catch {
    return null;
  }
}
