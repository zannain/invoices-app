import Avatar from "public/assets/image-avatar.jpg";
import Moon from "public/assets/icon-moon.svg";
function SideNav() {
  return (
    <aside className="side-bar-grid">

        <section className="header">
          <div className="pacman">
            <div className="pacman_eye"></div>
            <div className="pacman_mouth"></div>
          </div>
        </section>
        <section className="body">
        <img src={Moon} alt="moon" className="moon-icon" />

        </section>
        <section className="footer">
            <img src={Avatar} alt="Avatar" className="avatar" />
        </section>

    </aside>
  )
}

export default SideNav