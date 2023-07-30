import { Outlet, Link } from "react-router-dom";
import style from './my-style.module.css'

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" className={style.home}>Home</Link>
          </li>
          <li>
            <Link to="/inventory" className={style.inventory}>Inventory</Link>
          </li>
          <li>
            <Link to="/party-info" className={style.partyinfo}>Party Info</Link>
          </li>
          <li>
            <Link to="/quest" className={style.quest}>Quests</Link>
          </li>
          <li>
            <Link to="/notes" className={style.notes}>Notes</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Home;