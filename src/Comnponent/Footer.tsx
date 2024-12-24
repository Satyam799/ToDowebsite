import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
        <Link to='/'>All</Link>
        <Link to='/inprogress'>Inprogress</Link>
        <Link to='/done'>Done</Link>

    </footer>
  )
}
