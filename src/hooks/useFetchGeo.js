import { fetcher } from "./useFetcher";
import useSWR from "swr";
const useFetchGeo = (country) => {
  const { data, error, isLoading } = useSWR(
    `${process.env.REACT_APP_WEATHER_API_URL}/data/2.5/forecast?q=${
      !country ? "philippines" : country
    }&appid=${process.env.REACT_APP_WEATHER_API_KEY}&cnt=20&units=metric`,
    fetcher
  );
  return {
    data,
    isLoading,
    isError: error,
  };
};

export default useFetchGeo;
