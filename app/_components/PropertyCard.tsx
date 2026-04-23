import Image from "next/image";
import Link from "next/link";
import { slugifyHome, type Home } from "../_lib/api";

type Props = {
  home: Home;
};

const numberFormatter = new Intl.NumberFormat("da-DK");

// Danish energy label colors (A best → G worst)

function energyLabelClass(label: string): string {
  switch (label.toUpperCase()) {
    case "A":
      return "bg-green-600";
    case "B":
      return "bg-lime-500";
    case "C":
      return "bg-yellow-500";
    case "D":
      return "bg-orange-500";
    case "E":
      return "bg-orange-600";
    case "F":
      return "bg-red-600";
    case "G":
      return "bg-red-700";
    default:
      return "bg-gray-500";
  }
}

export function PropertyCard({ home }: Props) {
  const imageUrl = home.images[0]?.url;

  return (
    <article className="bg-white rounded-sm">
      <Link
        href={`/boliger/${slugifyHome(home)}`}
        className="block group"
      >
        {imageUrl && (
          <div className="relative aspect-[24/10] w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={`Billede af boligen ${home.adress1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-t-sm"
            />
          </div>
        )}

        <div className="p-6 text-heading">
          <h3 className="font-bold text-lg">{home.adress1}</h3>
          <p className="text-sm mt-1">
            {home.postalcode} {home.city}
          </p>
          <p className="text-sm mt-3">
            <strong>{home.type}</strong>{" "}
            <span className="text-para-1">
              • Ejerudgift: {numberFormatter.format(home.gross)} kr.
            </span>
          </p>

          <hr className="my-4 border-t border-gray-200" />

          <div className="flex items-center justify-between text-sm">
            <span
              className={`inline-flex items-center justify-center w-7 h-7 text-white font-bold ${energyLabelClass(
                home.energylabel
              )}`}
              aria-label={`Energimærke ${home.energylabel}`}
            >
              {home.energylabel}
            </span>
            <span className="flex-1 ml-4 text-para-1">
              {home.rooms} værelser • {home.livingspace} m²
            </span>
            <span className="font-bold whitespace-nowrap">
              Kr. {numberFormatter.format(home.price)}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}