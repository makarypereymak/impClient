import React, { useRef } from "react";
import "./NavLowerList.scss";
import { Link } from "react-router-dom";

function NavLowerList(props) {
  const lowerList = useRef(null);

  return (
    <>
      {props.buttonExist ? (
        <button
          onClick={() => {
            if (
              lowerList.current.className ===
              "nav__lower-list nav__lower-list--closed"
            ) {
              lowerList.current.className =
                "nav__lower-list nav__lower-list--opened";
            } else {
              lowerList.current.className =
                "nav__lower-list nav__lower-list--closed";
            }
          }}
          className="nav__open-lower-list"
        >
          &gt;
        </button>
      ) : null}
      <ul ref={lowerList} className={props.startClassName}>
        {props.list.lowerLavelLinks.map((routeLower) => (
          <li
            className={"nav__lower-list-item " + props.modifier}
            key={routeLower.id}
          >
            <Link
              className="nav__lower-list-link"
              to={{ pathname: props.list.path, hash: "#" + routeLower.idName }}
            >
              {routeLower.text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavLowerList;
