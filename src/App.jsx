import { Henader, ListMovies } from "@/components";
import { usePopular, useComingSoon, useTrend } from "@/hooks";

export const App = () => {
  const popular = usePopular();
  const comingSoon = useComingSoon();
  const trend = useTrend();

  return (
    <div className="container mx-auto px-2 lg:px-4">
      <Henader />

      <div className="space-x-5 lg:flex">
        <main className="space-y-10 overflow-hidden flex-1">
          <ListMovies
            data={popular.data}
            isLoading={popular.isLoading}
            title="Popular"
          />

          <ListMovies
            data={trend.data}
            isLoading={trend.isLoading}
            title="Tendência"
          />
        </main>

        <div className="w-[2px] bg-gray-500 hidden lg:block"></div>

        <aside className="w-72 h-[750px] overflow-hidden hidden lg:block">
          <h2 className="text-white text-lg font-semibold">Em Breve</h2>

          <div className="space-y-4 h-full overflow-auto scrollbar-width pb-10">
            {comingSoon.data?.results.map((movie) => (
              <div className="flex w-full h-24 space-x-4" key={movie.title}>
                <div className="w-16 h-full ">
                  <img
                    src={`${import.meta.env.VITE_IMG}/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="overflow-hidden flex-1 flex flex-col justify-between">
                  <h3 className="text-white capitalize whitespace-nowrap truncate">
                    {movie.title}
                  </h3>

                  <p className="text-white">{movie.vote_average}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};
