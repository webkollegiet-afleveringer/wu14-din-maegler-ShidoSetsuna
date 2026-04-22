import Image from "next/image";
import { Home } from "lucide-react";
import { getHomesCount } from "../_lib/api";
import { HouseIcon } from "./HouseIcon";

export async function AboutSection() {
  const headingId = "about-heading";
  const homesCount = await getHomesCount();

  return (
    <section
      aria-labelledby={headingId}
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <figure className="grid aspect-square max-w-md mx-auto w-96">
          {/* Photo behind, top-left */}
          <div className="col-start-1 row-start-1 w-[93%] h-[93%] self-start justify-self-start relative">
            <Image
              src="/about_us.png"
              alt="Familie under tag-formede hænder, symboliserer hjemmekøb"
              fill
              sizes="(max-width: 768px) 80vw, 400px"
              className="object-cover"
            />
          </div>

          {/* Frame in front, bottom-right, with 38+ overlay in its corner */}
          <div className="col-start-1 row-start-1 w-[93%] h-[93%] self-end justify-self-end relative border-12 border-foreground">
            <figcaption className="absolute bottom-0 right-0 bg-foreground text-white text-center px-8 py-5">
              <span className="block text-6xl font-bold leading-none">38+</span>
              <span className="block text-xl mt-2">
                års mægler-
                <br />
                erfaring
              </span>
            </figcaption>
          </div>
        </figure>

        {/* Right column: heading + body + stats */}
        <div className="text-heading">
          <h2 id={headingId} className="font-bold text-3xl leading-tight">
            Vi har fulgt danskerne hjem
            <br />i snart 4 årtier
          </h2>
          <h3 className="font-bold text-base mt-6">
            Det synes vi siger noget om os!
          </h3>
          <p className="text-sm leading-relaxed mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has normal distribution.
          </p>
          <p className="text-sm leading-relaxed mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-6 max-w-sm">
            <div className="flex items-center gap-3">
              <HouseIcon size={42} className="shrink-0 bg-shape-1 p-1 text-foreground" />
              <div className="flex flex-col-reverse">
                <dt className="text-xs">boliger solgt</dt>
                <dd className="text-xl font-bold">4829</dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Home aria-hidden="true" size={42} className="shrink-0 bg-shape-1 p-1" />
              <div className="flex flex-col-reverse">
                <dt className="text-xs">boliger til salg</dt>
                <dd className="text-xl font-bold">{homesCount ?? "—"}</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}