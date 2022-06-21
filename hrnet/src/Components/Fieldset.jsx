import PropTypes from "prop-types";

/**Render of form sections
 * @function Fieldset
 * @param {string} title //text in the legend tag
 * @param {string} attribut //text to style fieldset tag
 * @returns {JSX}
 */

export default function Fieldset({ title, attribut, children }) {
  return (
    <fieldset className={attribut}>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
}

Fieldset.propTypes = {
  title: PropTypes.string,
  attribut: PropTypes.string,
  children: PropTypes.node.isRequired,
};
