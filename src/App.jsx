import { Henader, ListMovies } from "@/components";
import { usePopular, useComingSoon, useTrend } from "@/hooks";

export const App = () => {
  const popular = usePopular();
  const comingSoon = useComingSoon();
  const trend = useTrend();

  return (
    <div className="container mx-auto px-2 lg:px-4">
      <Henader />

      <main className="space-y-10">
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
    </div>
  );
};
