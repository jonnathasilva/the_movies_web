import { useRef } from "react";
import { Loading } from "@/components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export const ListMovies = ({ data, title, isLoading }) => {
  const carousel = useRef(null);

  const handleftClink = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handrightClink = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="relative">
      <div className="space-y-2">
        <h2 className="text-white text-lg font-semibold">{title}</h2>

        {isLoading ? (
          <div className="flex space-x-5 overflow-x-scroll scroll scroll-smooth scrollbar-hide">
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
            <Loading />
          </div>
        ) : (
          <div
            ref={carousel}
            className="flex space-x-2 overflow-x-scroll scroll scroll-smooth scrollbar-hide"
          >
            {data?.results.map((item) => (
              <div
                className="flex-none w-52 cursor-pointer scale-95 hover:scale-105 ease-in duration-75"
                key={item.title}
              >
                <img
                  src={`${import.meta.env.VITE_IMG}/w200${item.poster_path}`}
                  alt={item.title}
                  className="rounded"
                />

                <p className="text-white text-center whitespace-nowrap truncate">
                  {item.title ? item.title : item.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={handleftClink}
        className="bg-[#ffffffbf] rounded-full w-10 h-10 flex justify-center items-center hover:bg-white absolute top-2/4 left-0"
      >
        <AiOutlineLeft size={30} />
      </button>

      <button
        onClick={handrightClink}
        className="bg-[#ffffffbf] rounded-full w-10 h-10 flex justify-center items-center hover:bg-white absolute top-2/4 right-0"
      >
        <AiOutlineRight size={30} />
      </button>
    </div>
  );
};
