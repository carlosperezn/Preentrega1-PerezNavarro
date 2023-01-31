import React from "react";

const Categorias = () => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Products
      </a>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="#">
            Headsets
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Professional Speakers
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Consoles
          </a>
        </li>
      </ul>
    </li>
  );
};

export default Categorias;
