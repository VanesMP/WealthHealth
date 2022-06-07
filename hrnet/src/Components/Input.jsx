import PropTypes from 'prop-types';

/**Render classic/simple input element for form
 * @function Input
 * @param {string} title //text on the label attributs
 * @param {string} attribut //associate the label and the input
 * @param {string} type //type of the input
 * @returns {JSX}
 */

export default function Input({ title, attribut, type }) {

    return(
        <label htmlFor={attribut}>
            {title} 
            <input type={type} name={attribut} id={attribut} />
        </label>
    )
}

Input.propTypes = {
    title: PropTypes.string,
    attribut: PropTypes.string,
    type: PropTypes.string
}