import axios from "axios";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import FilmCard from "../components/FilmCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [films, setFilms] = useState([]);
  const [inputValue, setInputValue] = useState("code");

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
        {films && films.map((film) => <FilmCard key={film.id} film={film} />)}
      </div>
    </>
  );
};
export default Home;
