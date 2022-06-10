// import PropTypes from 'prop-types';
import ErrorMessageField from './ErrorMessageField';

/**Render classic/simple input element for form
 * @function Input
 * @param {string} title //text on the label attributs
 * @param {string} attribut //associate the label and the input
 * @param {string} type //type of the input
 * @returns {JSX}
 */

export const Input = (
    { htmlFor, className, title, type, id, input, register, required, errors, errorMessage }
) => {
    return (
        <label htmlFor={htmlFor} className={className}>
            {title} 
            <input type={type} id={id} {...register(input, {required})}/>
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

// export default function Input({ title, attribut, type }) {

//     return(
//         <label htmlFor={attribut} className={attribut}>
//             {title} 
//             <input type={type} id={attribut} ref={attribut}/>
//         </label>
//     )
// }