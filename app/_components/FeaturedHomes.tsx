import Link from "next/link";
import { getFeaturedHomes } from "../_lib/api";
import { PropertyCard } from "./PropertyCard";

export async function FeaturedHomes() {
  const headingId = "featured-homes-heading";
  const homes = await getFeaturedHomes(4);

  return (
    <section
      aria-labelledby={headingId}
      className="bg-background-1 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="text-center text-heading max-w-2xl mx-auto">
          <h2 id={headingId} className="font-bold text-3xl">
            Udvalgte Boliger
          </h2>
          <p className="text-sm mt-4">
            There are many variations of passages of Lorem Ipsum available but
            the this in majority have suffered alteration in some
          </p>
        </header>

        {homes.length > 0 ? (
          <ul className="grid md:grid-cols-2 gap-6 mt-12">
            {homes.map((home) => (
              <li key={home.id}>
                <PropertyCard home={home} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center mt-12 text-para-1">
            Ingen boliger kunne hentes lige nu. Prøv igen senere.
          </p>
        )}

        <div className="text-center mt-12">
          <Link
            href="/boliger"
            className="inline-block bg-foreground text-white px-8 py-3 text-sm font-medium"
          >
            Se alle boliger
          </Link>
        </div>
      </div>
    </section>
  );
}
