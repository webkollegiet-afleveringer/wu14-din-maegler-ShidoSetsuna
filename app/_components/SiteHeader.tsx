import Link from "next/link";
import { Send, Phone, User } from "lucide-react";
import { Logo } from "./Logo";

export function SiteHeader() {
  return (
    <header>
      {/* Utility bar: contact info + login */}
      <div className="bg-foreground text-white text-sm">
        <div className="mx-auto max-w-7xl px-6 h-10 flex items-center justify-between">
          <address className="not-italic flex items-center gap-6">
            <a
              href="mailto:4000@dinmaegler.com"
              className="flex items-center gap-2 hover:underline"
            >
              <Send aria-hidden="true" size={16} />
              4000@dinmaegler.com
            </a>
            <a
              href="tel:+4570704000"
              className="flex items-center gap-2 hover:underline"
            >
              <Phone aria-hidden="true" size={16} />
              +45 7070 4000
            </a>
          </address>
          <Link
            href="/login"
            className="flex items-center gap-2 hover:underline"
          >
            <User aria-hidden="true" size={16} />
            Log ind
          </Link>
        </div>
      </div>

      {/* Primary navigation */}
      <nav aria-label="Primær" className="bg-white text-para-1">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <Link href="/" aria-label="Til forsiden">
            <Logo className="h-8 w-auto" />
          </Link>
          <ul className="flex items-center gap-10 text-sm">
            <li><Link href="/boliger">Boliger til salg</Link></li>
            <li><Link href="/maeglere">Mæglere</Link></li>
            <li><Link href="/favoritter">Mine favoritter</Link></li>
            <li><Link href="/kontakt">Kontakt os</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}