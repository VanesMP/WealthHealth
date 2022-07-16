import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

/** Render to navigation system
 * @function Nav
 * @param {string} linkTo
 * @param {string} text
 * @returns {JSX}
 */

export default function Nav({ linkTo, text }) {

    let activeStyle = { textDecoration: "underline" };

    return(
        <div>
            <NavLink
            to={linkTo}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="nav">
                {text}
            </NavLink>
        </div>
    )
}

Nav.propTypes = {
    linkTo: PropTypes.string,
    text: PropTypes.string
  }