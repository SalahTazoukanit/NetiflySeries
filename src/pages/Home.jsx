import axios from "axios";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import FilmCard from "../components/FilmCard";

const Home = () => {
  const [films, setFilms] = useState([]);

  const getFilms = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=0112ce92ce31af44c09acb9c735c4e87&query=code&language=fr-FR"
      )
      .then((response) => {
        console.log(response.data.results);
        setFilms(response.data.results);
      });
  };
  useEffect(() => {
    getFilms();
  }, []);

  return (
    <>
      <Navigation />
      <div>
        {films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </>
  );
};
export default Home;
