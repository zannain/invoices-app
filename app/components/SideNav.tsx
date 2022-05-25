import Avatar from "public/assets/image-avatar.jpg";
import Moon from "public/assets/icon-moon.svg";
import styles from "../styles/SideNav.css";
import type { LinksFunction } from "@remix-run/node";
export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};
function SideNav() {
  return (
    <aside className="grid grid-rows fixed z-10 min-h-full top-0 left-0 overflow-hidden rounded-br-3xl">
      <section className="header">
        <div className="bg-white mt-10 ml-10 rounded-3xl relative w-6 h-6 rotate-90">
          <div className="pacman_eye"></div>
          <div className="pacman_mouth absolute w-full h-full"></div>
        </div>
      </section>
      <section className="content-end justify-center grid  bg-slate-800 min-h-full">
        <img src={Moon} alt="moon" className="moon-icon mb-14" />
      </section>
      <section className="place-content-center p-5 border-t-slate-500 border-t-2 bg-slate-800 self-end">
        <img src={Avatar} alt="Avatar" className="avatar rounded-3xl" />
      </section>
    </aside>
  );
}

export default SideNav;
