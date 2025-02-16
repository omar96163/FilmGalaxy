import React from "react";
import Get from "../services/Data";
import { Link } from "react-router-dom";

function Intro() {
  const { isLoading, isError, data, error } = Get();
  if (isLoading) return <p className="text-red-700">Loading...</p>;
  if (isError) return <p className="text-red-700">Error: {error.message}</p>;

  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center text-white">
        <video
          src="/videos/intro.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        />
        <h1 className="absolute text-3xl sm:text-5xl md:text-7xl font-bold z-10 text-center text-orange-500">
          Ready to watch?{" "}
          <p className="text-lg sm:text-xl md:text-3xl font-light text-white mt-3">
            Enjoy the best movies here
          </p>
        </h1>
      </div>
      <div className="overflow-hidden text-white m-5 p-5">
        <h2 className="mb-16 text-2xl md:text-5xl text-center animate-[color_1.5s_linear_infinite]">
          Your movies
        </h2>
        <div className="flex w-max animate-[scroll_80s_linear_1s_infinite] hover:[animation-play-state:paused]">
          {[...data.results, ...data.results].map((userMovie, index) => (
            <Link
              key={index}
              to={`/MovieDetails/:${userMovie.id}`}
              state={{ userMovie }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${userMovie.poster_path}`}
                alt={userMovie.original_title}
                className="md:w-[200px] md:h-[300px] sm:w-[150px] w-[120px] object-cover mx-5 rounded-lg hover:scale-110 transition-all duration-500
                opacity-50 hover:opacity-100"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Intro;
