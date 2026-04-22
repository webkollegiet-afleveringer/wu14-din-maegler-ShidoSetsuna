export function SearchCard() {
  const headingId = "search-card-heading";

  return (
    <form
      role="search"
      aria-labelledby={headingId}
      className="bg-white text-heading w-full max-w-[680px] p-8 mt-8 text-left"
    >
      <h2 id={headingId} className="font-bold text-sm">
        Søg blandt 158 boliger til salg i 74 butikker
      </h2>
      <hr className="mt-1 mb-5 w-10 border-0 border-t-4 border-heading" />

      <label
        htmlFor="home-search"
        className="block text-xs font-bold mb-2"
      >
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