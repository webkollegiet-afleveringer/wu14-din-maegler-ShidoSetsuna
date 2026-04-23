export const API_BASE = "https://dinmaegler.onrender.com";


// A home listing. Only the fields we actually use are typed here

export type Home = {
  id: string;
  adress1: string;
  postalcode: number;
  city: string;
  type: string;
  energylabel: string;
  rooms: string;
  livingspace: number;
  gross: number;
  price: number;
  images: { url: string }[];
};

/**
 * Build a URL-safe slug from a home's address + city, e.g.
 * "Haraldsborgvej 143 " + "Roskilde" → "haraldsborgvej-143-roskilde"
 *
 * Used for both generating card links and looking up homes on the
 * detail page
 */
export function slugifyHome(home: Pick<Home, "adress1" | "city">): string {
  return `${home.adress1}-${home.city}`
    .toLowerCase()
    .normalize("NFD")                       // split accented chars
    .replace(/[\u0300-\u036f]/g, "")        // strip the accents
    .replace(/[^a-z0-9]+/g, "-")            // non-alnum → dash
    .replace(/^-|-$/g, "");                 // trim leading/trailing dashes
}

/**
 * Fetch the total number of homes currently for sale.
 * Returns `null` if the API is unreachable.
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

/**
 * Fetch a limited list of home listings for the featured section on
 * the home page. Returns [] on failure so callers can render a
 * graceful empty state rather than crashing.
 */
export async function getFeaturedHomes(limit = 4): Promise<Home[]> {
  try {
    const res = await fetch(`${API_BASE}/homes?_limit=${limit}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return (await res.json()) as Home[];
  } catch {
    return [];
  }
}
