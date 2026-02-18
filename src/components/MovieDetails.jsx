import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

function MovieDetails() {
  const location = useLocation();
  const { userMovie } = location.state;
  const [favlist, setfavlist] = useState(() => {
    const savedList = localStorage.getItem("favlist");
    return savedList === "" || savedList === undefined || savedList === null
      ? []
      : JSON.parse(savedList);
  });

  useEffect(() => {
    localStorage.setItem("favlist", JSON.stringify(favlist));
  }, [favlist]);

  const addMovie = () => {
    const movieInfavList = favlist.find((movie) => movie.id === userMovie.id);
    if (movieInfavList) {
      alert(`"${userMovie.title}" was added to your fav list "before"`);
    } else {
      setfavlist([...favlist, userMovie]);
      alert(`"${userMovie.title}" added to your fav list`);
    }
  };

  const remMovie = () => {
    const movieInfavList = favlist.find((movie) => movie.id === userMovie.id);
    if (movieInfavList) {
      setfavlist(favlist.filter((movie) => movie.id !== userMovie.id));
      alert(`"${userMovie.title}" removed from your fav list`);
    } else {
      alert(`"${userMovie.title}" is not in your fav list`);
    }
  };

  return (
    <div className={`bg-black p-5 font-serif min-h-screen text-white`}>
      <Nav />
      <div className="mt-32 p-5 flex flex-col md:flex-row md:justify-evenly items-center space-y-10 md:space-y-0">
        <img
          className="w-[250px] rounded-lg hover:scale-105 transition-all duration-500
          opacity-40 hover:opacity-100 animate-[shadow_2s_linear_infinite_alternate]"
          src={`https://image.tmdb.org/t/p/w500${userMovie.poster_path}`}
          alt={userMovie.title}
        />
        <div className="space-y-6 text-center">
          <p className="text-3xl text-orange-500 font-black animate-pulse">
            {userMovie.title}
          </p>
          <p className="text-lg">
            language :{" "}
            <i className="text-orange-500">{userMovie.original_language}</i>
          </p>
          <p className="text-lg">
            release date :{" "}
            <i className="text-orange-500">{userMovie.release_date}</i>
          </p>
          <p className="text-lg">
            vote average :{" "}
            <i className="text-orange-500">{userMovie.vote_average}</i>
          </p>
          <p className="text-lg">
            vote count :{" "}
            <i className="text-orange-500">{userMovie.vote_count}</i>
          </p>
          <div className="space-x-10">
            <input
              onClick={addMovie}
              className="p-1 border-y-2 rounded-md cursor-pointer text-xl border-green-500 transition-all duration-500
              hover:text-green-500 hover:border-white hover:scale-110"
              type="button"
              value="Add"
              title="Add to your fav list"
            />
            <input
              onClick={remMovie}
              className="p-1 border-y-2 rounded-md cursor-pointer text-xl border-red-500 transition-all duration-500
              hover:text-red-500 hover:border-white hover:scale-110"
              type="button"
              value="Remove"
              title="Remove from your fav list"
            />
          </div>
        </div>
      </div>
      <div className="md:mx-40 mt-10 text-center">
        <p className="text-4xl text-orange-500 text-center mb-5">Overview</p>
        <p className="text-xl">{userMovie.overview}</p>
      </div>
      <Footer />
    </div>
  );
}

export default MovieDetails;
