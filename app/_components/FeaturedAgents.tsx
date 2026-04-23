import Link from "next/link";
import { getFeaturedAgents } from "../_lib/api";
import { AgentCard } from "./AgentCard";

export async function FeaturedAgents() {
  const headingId = "featured-agents-heading";
  const agents = await getFeaturedAgents(3);

  return (
    <section aria-labelledby={headingId} className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <header className="text-center text-heading max-w-2xl mx-auto">
          <h2 id={headingId} className="font-bold text-3xl">
            Mød vores engagerede medarbejdere
          </h2>
          <p className="text-sm mt-4">
            Din Mægler er garant for altid veluddannet assistance i dit
            boligsalg.
            <br />
            Kontakt en af vores medarbejdere.
          </p>
        </header>

        {agents.length > 0 ? (
          <ul className="grid md:grid-cols-3 gap-6 mt-12">
            {agents.map((agent) => (
              <li key={agent.id}>
                <AgentCard agent={agent} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center mt-12 text-para-1">
            Ingen medarbejdere kunne hentes lige nu. Prøv igen senere.
          </p>
        )}

        <div className="text-center mt-12">
          <Link
            href="/maeglere"
            className="inline-block bg-foreground text-white px-8 py-3 text-sm font-medium"
          >
            Se alle mæglere
          </Link>
        </div>
      </div>
    </section>
  );
}
