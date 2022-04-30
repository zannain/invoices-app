import Avatar from "public/assets/image-avatar.jpg";
function SideNav() {
  return (
    <aside className="side-bar-grid">
        <section className="header"></section>
        <section className="body"></section>
        <section className="footer">
            <img src={Avatar} alt="Avatar" className="avatar" />
        </section>
    </aside>
  )
}

export default SideNav