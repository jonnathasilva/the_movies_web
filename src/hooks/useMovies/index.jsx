import { useQuery } from "react-query";
import axios from "axios";

const movies = async () => {
  const { data } = await axios({
    baseURL: import.meta.env.VITE_MOVIES,
    url: "/top_rated",
    params: {
      language: "pt-BR",
    },
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TOKEN}` },
  });

  return data;
};

export const useMovies = () => {
  return useQuery(["movies"], movies);
};
