const FilmCard = ({ film }) => {
  return (
    <>
      <div className="card-container flex  ">
        <div className="card flex flex-col gap-x-24 border-2">
          <img src="" alt="" />
          <h1 className="font-bold">{film.title}</h1>
          <p>Sortie le : {film.release_date}</p>
          <p className="font-semibold">{film.vote_average + "/10 ⭐️"}</p>
        </div>
      </div>
    </>
  );
};
export default FilmCard;
