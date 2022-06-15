// import PropTypes from 'prop-types';
import ErrorMessageField from './ErrorMessageField';

/**Render classic/simple input element for form
 * @function Input
 * @param {string} htmlFor
 * @param {string} className
 * @param {string} title
 * @param {string} type
 * @param {function} register
 * @param {boolean} required
 * @param {object} errors
 * @param {string} name
 * @returns {JSX}
 */

export const Input = (
    { htmlFor, className, title, type, id, register, required, errors, name }
) => {
    return (
        <label htmlFor={htmlFor} className={className}>
            {title} 
            <input type={type} id={id} {...register(name, {required})}/>
        {errors && <ErrorMessageField className="errorMessageInput" message="Please, fill out the field !"/>}
        </label>
        )
}

// Input.propTypes = {
//     htmlFor: PropTypes.string,
//     className: PropTypes.string,
//     title: PropTypes.string,
//     type: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number
//     ]),
//     id: PropTypes.string,
//     input: PropTypes.string,
//     register: PropTypes.element,//React element ref methode pour enregistrer un entrér ou selectionner un element
//     required: PropTypes.bool 
// }
