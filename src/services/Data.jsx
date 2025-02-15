import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function Get() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["movies"],
    queryFn: () =>
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=4bc5c44e8ec488fa3783bf7e393e345b"
        )
        .then((res) => res.data),
  });

  return { isLoading, isError, data, error };
}

export default Get;
