import { RiMovie2Line } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

export const Henader = () => {
  return (
    <header className="px-2 flex justify-between items-center py-5 md:px-0">
      <div className="flex items-center sm:space-x-3">
        <RiMovie2Line color="#FFF" size={30} className="hidden sm:block" />

        <h1 className="text-white text-xl uppercase font-medium sm:text-2xl">
          The Movies
        </h1>
      </div>

      <nav>
        <ul className="space-x-5 flex items-center text-gray-400 ">
          <li className="hover:text-white cursor-pointer">Inicio</li>

          <li className="hover:text-white cursor-pointer">Series</li>

          <li className="hover:text-white cursor-pointer">Filmes</li>
        </ul>
      </nav>

      <form className="hidden items-center sm:flex">
        <label for="simple-search" className="sr-only">
          Busca
        </label>

        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <AiOutlineSearch size={20} />
          </div>

          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg w-full pl-10 p-2"
            placeholder="Busca"
          />
        </div>
      </form>

      <div className="bg-gray-50 w-7 h-6 rounded-full cursor-pointer flex justify-center items-center sm:hidden">
        <AiOutlineSearch />
      </div>
    </header>
  );
};
