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
            Coups de coeur
          </NavLink>
        </div>
        <div className="flex justify-center ">
          <h1 className="text-5xl mt-10">Netifly Series</h1>
        </div>
        <div></div>
      </div>
    </>
  );
};
export default Navigation;
