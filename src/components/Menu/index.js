import "./menu.css";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <a className="social" href="https://github.com/jlpmartinss/">
        <BsGithub color="#fff" size={24} />
      </a>
      <a className="social" href="https://www.instagram.com/jmarti_ns/">
        <BsInstagram color="#fff" size={24} />
      </a>
      <Link className="menu-item" to="/links">
        My Links
      </Link>
    </div>
  );
}
