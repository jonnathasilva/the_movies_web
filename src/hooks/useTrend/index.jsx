import { useQuery } from "react-query";
import axios from "axios";

const trend = async () => {
  const { data } = await axios({
    baseURL: import.meta.env.VITE_TREND,
    url: "/day",
    params: {
      language: "pt-BR",
    },
    headers: { Authorization: `Bearer ${import.meta.env.VITE_TOKEN}` },
  });

  return data;
};

export const useTrend = () => {
  return useQuery(["trend"], trend);
};
