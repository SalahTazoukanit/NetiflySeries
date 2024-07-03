import axios from "axios";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import FilmCard from "../components/FilmCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [films, setFilms] = useState([]);
  const [inputValue, setInputValue] = useState("code");
  if (inputValue == "") {
    inputValue == "code";
  }
  const [genres, setGenres] = useState({
    genres: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 99, name: "Documentary" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" },
      { id: 36, name: "History" },
      { id: 27, name: "Horror" },
      { id: 10402, name: "Music" },
      { id: 9648, name: "Mystery" },
      { id: 10749, name: "Romance" },
      { id: 878, name: "Science Fiction" },
      { id: 10770, name: "TV Movie" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" },
      { id: 37, name: "Western" },
    ],
  });
  const setGenre = (genres) => {
    switch (genres) {
      case 28:
        genre_ids = "Action";
        break;
      case 12:
        genre_ids = "Adventure";
        break;
      case 16:
        genre_ids = "Animation";
        break;
      case 35:
        genre_ids = "Comedy";
        break;
      case 80:
        genre_ids = "Crime";
        break;
      case 99:
        genre_ids = "Documentary";
        break;

      default:
        break;
    }
  };

  const getFilms = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=0112ce92ce31af44c09acb9c735c4e87&query=${inputValue}&language=fr-FR`
      )
      .then((response) => {
        console.log(response.data.results);
        setFilms(response.data.results);
      });
  };
  useEffect(() => {
    getFilms();
  }, [inputValue]);

  return (
    <>
      <Navigation />
      <SearchBar setInputValue={setInputValue} />
      <div className="card-container flex flex-wrap items-center mt-10 justify-center gap-10">
        {films &&
          films.map((film) => (
            <FilmCard key={film.id} film={film} setGenre={setGenre} />
          ))}
      </div>
    </>
  );
};
export default Home;
