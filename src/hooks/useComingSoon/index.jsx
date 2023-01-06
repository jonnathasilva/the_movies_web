import { useQuery } from "react-query";
import axios from "axios";

const movies = async () => {
  const { data } = await axios({
    baseURL: import.meta.env.VITE_MOVIES,
    url: "/upcoming",
    params: {
      language: "pt-BR",
    },
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TOKEN}` },
  });

  return data;
};

export const useComingSoon = () => {
  return useQuery(["comingSoon"], movies);
};
