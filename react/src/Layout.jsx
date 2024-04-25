import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/museum">Museum</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;