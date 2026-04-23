import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { slugifyAgent, type Agent } from "../_lib/api";

/**
 * Inline LinkedIn icon. Lucide intentionally omits brand icons, so we
 * carry this one ourselves. Uses currentColor so it inherits text color.
 */
function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

type Props = {
  agent: Agent;
};

export function AgentCard({ agent }: Props) {
  const detailHref = `/maeglere/${slugifyAgent(agent)}`;

  return (
    <article className="bg-white text-heading rounded-sm border-2 border-gray-200">
      {/* Photo links to the detail page */}
      <Link href={detailHref} className="block relative aspect-square overflow-hidden">
        <Image
          src={agent.image.url}
          alt={`Portræt af ${agent.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover rounded-t-xs"
        />
      </Link>

      <div className="p-6 text-center shadow-xl shadow-card-shadow">
        {/* Name also links to the detail page */}
        <h3 className="font-bold">
          <Link href={detailHref} className="hover:underline">
            {agent.name}
          </Link>
        </h3>
        <p className="text-xs text-para-1 mt-1">{agent.title}</p>

        {/* Separate action links — can't nest <a> inside the card link */}
        <ul className="flex items-center justify-center gap-4 mt-4">
          <li>
            <a
              href={`mailto:${agent.email}`}
              aria-label={`Send email til ${agent.name}`}
            >
              <Mail aria-hidden="true" size={18} />
            </a>
          </li>
          <li>
            {/* Leaving blank due to this being a demo */}
            <a
              href="#"
              aria-label={`${agent.name} på LinkedIn`}
            >
              <LinkedinIcon />
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
