import { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function FavoriteList() {
  const [favlist, setfavlist] = useState(() => {
    const savedList = localStorage.getItem("favlist");
    return savedList === "" || savedList === undefined || savedList === null
      ? []
      : JSON.parse(savedList);
  });

  useEffect(() => {
    localStorage.setItem("favlist", JSON.stringify(favlist));
  }, [favlist]);

  const remMovie = (id, title) => {
    const updatedList = favlist.filter((Movie) => Movie.id !== id);
    setfavlist(updatedList);
    alert(`"${title}" removed from favorites!`);
  };

  return (
    <div className="bg-black p-5 font-serif min-h-screen text-white">
      <Nav />
      <h1 className="text-center mt-20 text-2xl md:text-5xl animate-[color_1.5s_linear_infinite]">
        Your Favorite movies
      </h1>
      {favlist.length > 0 ? (
        <div className="flex justify-center flex-wrap gap-16 mt-28">
          {favlist.map((Movie) => (
            <div
              key={Movie.id}
              className="relative group animate-[shadow_2s_linear_infinite_alternate] rounded-lg"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
                alt={Movie.title}
                className="w-[250px] transition-all duration-500 group-hover:scale-0 rounded-lg"
              />
              <div
                className="absolute top-0 left-0 w-full h-full bg-orange-700 rounded-lg flex flex-col items-center justify-center 
                space-y-10 opacity-0 transition-all duration-500 group-hover:opacity-100 text-center p-2"
              >
                <p className="text-lg text-black font-black ">{Movie.title}</p>
                <p className="text-base">
                  language :{" "}
                  <i className="text-black">{Movie.original_language}</i>
                </p>
                <p className="text-base">
                  release date :{" "}
                  <i className="text-black">{Movie.release_date}</i>
                </p>
                <input
                  onClick={() => remMovie(Movie.id, Movie.title)}
                  className="py-2 px-5 border-2 rounded-md cursor-pointer text-xl border-orange-400 transition-all duration-300 
                  hover:text-black hover:bg-orange-400 hover:scale-110 bg-black text-orange-400"
                  type="button"
                  value="Remove"
                  title="Remove from your fav list"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl md:text-3xl text-center mt-16 min-h-screen">
          No favorite movies yet
        </p>
      )}
      <Footer />
    </div>
  );
}

export default FavoriteList;
