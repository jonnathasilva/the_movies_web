import { Henader } from "@/components";
import { useRef } from "react";

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

  return (
    <div className="container mx-auto">
      <Henader />

      <main>
        <div className="relative">
          <h2>Melhor Classificação</h2>

          <div
            ref={carousel}
            className="flex space-x-5 overflow-auto scrollbar-hide scroll-smooth"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0on_IOqg2WJKiXTO-LzceQiW9_oNPHmDpyw&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0on_IOqg2WJKiXTO-LzceQiW9_oNPHmDpyw&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0on_IOqg2WJKiXTO-LzceQiW9_oNPHmDpyw&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0on_IOqg2WJKiXTO-LzceQiW9_oNPHmDpyw&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0on_IOqg2WJKiXTO-LzceQiW9_oNPHmDpyw&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0on_IOqg2WJKiXTO-LzceQiW9_oNPHmDpyw&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0on_IOqg2WJKiXTO-LzceQiW9_oNPHmDpyw&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0on_IOqg2WJKiXTO-LzceQiW9_oNPHmDpyw&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0on_IOqg2WJKiXTO-LzceQiW9_oNPHmDpyw&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0on_IOqg2WJKiXTO-LzceQiW9_oNPHmDpyw&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0on_IOqg2WJKiXTO-LzceQiW9_oNPHmDpyw&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0on_IOqg2WJKiXTO-LzceQiW9_oNPHmDpyw&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0on_IOqg2WJKiXTO-LzceQiW9_oNPHmDpyw&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0on_IOqg2WJKiXTO-LzceQiW9_oNPHmDpyw&usqp=CAU"
              alt=""
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0on_IOqg2WJKiXTO-LzceQiW9_oNPHmDpyw&usqp=CAU"
              alt=""
            />
          </div>

          <div className="absolute top-2/4 flex justify-between w-full">
            <button onClick={handleftClink} className="bg-white">
              x
            </button>

            <button onClick={handrightClink} className="bg-white">
              y
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
