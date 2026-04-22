import { getHomesCount } from "../_lib/api";

export async function SearchCard() {
  const headingId = "search-card-heading";
  const homesCount = await getHomesCount();

  const heading =
    homesCount != null
      ? `Søg blandt ${homesCount} boliger til salg i 74 butikker`
      : "Søg blandt boliger til salg i 74 butikker";

  return (
    <form
      role="search"
      action="/boliger"
      method="get"
      aria-labelledby={headingId}
      className="bg-white text-heading w-full max-w-[680px] p-8 mt-8 text-left"
    >
      <h2 id={headingId} className="font-bold text-sm">
        {heading}
      </h2>
      <hr className="mt-1 mb-5 w-10 border-0 border-t-4 border-heading" />

      <label htmlFor="home-search" className="block text-xs font-normal mb-2">
        Hvad skal din næste bolig indeholde
      </label>
      <div className="flex">
        <input
          id="home-search"
          type="search"
          name="q"
          placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
          className="flex-1 min-w-0 border border-gray-300 px-4 py-3 text-sm placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="bg-foreground text-white px-8 py-3 text-sm font-medium"
        >
          Søg
        </button>
      </div>
    </form>
  );
}