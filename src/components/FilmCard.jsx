const FilmCard = ({ film }) => {
  const dateFormatter = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const setGenres = () => {
    let genreArray = [];

    for (let index = 0; index < film.genre_ids.length; index++) {
      switch (film.genre_ids[index]) {
        case 28:
          genreArray.push("Action");
          break;
        case 12:
          genreArray.push("Adventure");
          break;
        case 16:
          genreArray.push("Animation");
          break;
        case 35:
          genreArray.push("Comedie");
          break;
        case 80:
          genreArray.push("Crime");
          break;
        case 99:
          genreArray.push("Documentary");
          break;
        case 18:
          genreArray.push("Drama");
          break;
        case 10751:
          genreArray.push("Family");
          break;
        case 14:
          genreArray.push("Fantasy");
          break;
        case 36:
          genreArray.push("History");
          break;
        case 27:
          genreArray.push("Horror");
          break;
        case 10402:
          genreArray.push("Music");
          break;
        case 9648:
          genreArray.push("Mystery");
          break;
        case 10749:
          genreArray.push("Romance");
          break;
        case 878:
          genreArray.push("Science Fiction");
          break;
        case 10770:
          genreArray.push("Tv Movie");
          break;
        case 53:
          genreArray.push("Thriller");
          break;
        case 10752:
          genreArray.push("War");
          break;
        case 37:
          genreArray.push("Western");
          break;
        default:
          break;
      }
    }
    return genreArray.join(" ");
  };

  return (
    <>
      <div className="card flex flex-col border-2 w-72 rounded-md gap-2	">
        <img
          className="card-img w-72 h-56 rounded-md	"
          src={
            film.backdrop_path
              ? "https://image.tmdb.org/t/p/original/" + film.backdrop_path
              : "https://www.lascimmiapensa.com/wp-content/uploads/2017/04/emptyfilmposters-08.jpg"
          }
          alt={film.title}
        />
        <h1 className="font-bold">{film.title}</h1>
        <p>
          {film.release_date ? (
            <span> Sortie le : {dateFormatter(film.release_date)} </span>
          ) : null}
        </p>
        <p className="font-semibold">
          {film.vote_average.toFixed() + "/10 ⭐️"}
        </p>
        <p>{film.genre_ids ? setGenres() : null}</p>
        <p>
          <span className="font-semibold">Résumé</span>
          <br />
          {film.overview.substring(0, 100)}
        </p>
        <br />
        <button className="btn border border-indigo-600 w-48 rounded-lg bg-indigo-950 text-white ">
          Ajouter au préféré
        </button>
      </div>
    </>
  );
};
export default FilmCard;
