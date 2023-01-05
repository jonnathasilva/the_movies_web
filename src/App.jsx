import { RiMovie2Line } from "react-icons/ri";

export const App = () => {
  return (
    <div className="container mx-auto">
      <header className="px-4 flex justify-between items-center py-5 md:px-0">
        <div className="flex items-center space-x-3">
          <RiMovie2Line color="#FFF" size={30} />

          <h1 className="text-white text-2xl uppercase font-medium ">
            The Movies
          </h1>
        </div>

        <nav>
          <ul className="space-x-5 flex items-center text-gray-400 ">
            <li className="hover:text-white cursor-pointer">Series</li>

            <li className="hover:text-white cursor-pointer">Filmes</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
