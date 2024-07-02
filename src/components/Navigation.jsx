import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="flex gap-x-48 items-center ml-5">
        <div className="flex gap-5">
          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            to={"/"}
          >
            Accueil
          </NavLink>
          <NavLink
            className={(nav) => (nav.isActive ? "nav-active" : "")}
            to={"/saved"}
          >
            Coup de coeur
          </NavLink>
        </div>
        <div className="flex ">
          <h1 className="text-5xl ml-60 mt-10">Netifly Series</h1>
        </div>
      </div>
    </>
  );
};
export default Navigation;
