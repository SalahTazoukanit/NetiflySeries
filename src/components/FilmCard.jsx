const FilmCard = ({ film }) => {
  return (
    <>
      <div className="card border-2 w-72 rounded-md	">
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
        <p>Sortie le : {film.release_date}</p>
        <p className="font-semibold">
          {film.vote_average.toFixed() + "/10 ⭐️"}
        </p>
        <p>
          <span className="font-semibold">Résumé</span>
          <br />
          {film.overview.substring(0, 100)}
        </p>
        <br />
        <button className="btn">Ajouter au préféré</button>
      </div>
    </>
  );
};
export default FilmCard;
