import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Get from "../services/Data";

function SearchBar() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { isLoading, isError, data, error } = Get();

  const onSubmit = (form) => {
    const formData = form.search.trim().toLowerCase();
    const userMovie = data.results.find(
      (movie) => movie.title.toLowerCase() === formData
    );
    if (userMovie) {
      navigate(`/MovieDetails/${userMovie.id}`, { state: { userMovie } });
    } else {
      alert(
        `This movie is not found Try : ${data.results
          .map((movie) => movie.title)
          .join(", ")}`
      );
    }

    reset();
  };

  if (isLoading) return <p className="text-red-700">Loading...</p>;
  if (isError) return <p className="text-red-700">Error: {error.message}</p>;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="search 🔍"
          {...register("search")}
          className="py-1 px-2 rounded-sm text-base text-orange-500 bg-black border-white border-[1px] "
        />
      </form>
    </div>
  );
}

export default SearchBar;
