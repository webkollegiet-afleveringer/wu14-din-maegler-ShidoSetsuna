import Image from "next/image";

type Size = "lg" | "md" | "sm";

type Props = {
  title: string;
  image: string;
  size?: Size;
  children?: React.ReactNode;
};

const sizeClasses: Record<Size, string> = {
  lg: "min-h-[500px] py-16",
  md: "min-h-[310px] py-12",
  sm: "min-h-[100px] py-6",
};

const titleClasses: Record<Size, string> = {
  lg: "text-4xl md:text-5xl",
  md: "text-4xl md:text-5xl",
  sm: "text-2xl md:text-3xl",
};

export function PageHero({ title, image, size = "sm", children }: Props) {
  return (
    <section
      className={`relative flex flex-col items-center justify-center text-white text-center px-6 ${sizeClasses[size]}`}
    >
      {/* Background image — decorative, empty alt. priority because above-the-fold. */}
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover -z-20"
      />
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40 -z-10" aria-hidden="true" />

      <h1 className={`font-bold ${titleClasses[size]}`}>{title}</h1>
      {children}
    </section>
  );
}
