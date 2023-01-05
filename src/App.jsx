import { Henader } from "@/components";
import { useMovies } from "@/hooks";
import { useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const App = () => {
  const carousel = useRef(null);

  const handleftClink = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handrightClink = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const { data } = useMovies();

  console.log(data);

  return (
    <div className="container mx-auto">
      <Henader />

      <main>
        <div className="relative">
          <div className="space-y-4">
            <h2 className="text-white text-lg font-semibold">
              Melhor Classificação
            </h2>

            <div
              ref={carousel}
              className="flex space-x-5 overflow-auto scrollbar-hide scroll-smooth "
            >
              {data?.results.map((item) => (
                <div className="flex-none w-52 overflow-hidden">
                  <img
                    src={`${import.meta.env.VITE_IMG}/w200${item.poster_path}`}
                    alt={item.title}
                    className="rounded"
                  />

                  <p className="text-white text-center whitespace-nowrap truncate">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-2/4 flex justify-between w-full">
            <button
              onClick={handleftClink}
              className="bg-[#ffffffbf] rounded-full w-10 h-10 flex justify-center items-center hover:bg-white"
            >
              <AiOutlineLeft size={30} />
            </button>

            <button
              onClick={handrightClink}
              className="bg-[#ffffffbf] rounded-full w-10 h-10 flex justify-center items-center hover:bg-white"
            >
              <AiOutlineRight size={30} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
