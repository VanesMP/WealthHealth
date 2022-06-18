// import PropTypes from 'prop-types';
import ErrorMessageField from "./ErrorMessageField"

/**Render select element for form
 * @function Select
 * @returns {JSX}
 */

export default function Select({ htmlFor, className, title, register, required, name, options, errors, abb }) {
  
    return(
        <label htmlFor={htmlFor} className={className}>
            {title} 
            <select {...register(name, {required})}>
                <option value=""> </option>
                {options.map(arrayItem => <option name={arrayItem.name} value={arrayItem.abbreviation} key={arrayItem.name}>{arrayItem.name}</option>)}
            </select>
            {errors && <ErrorMessageField className="errorMessageSelect" message="Please, choose an option"/>}
        </label>
    )
}

// Select.propTypes = {
//     htmlFor: PropTypes.string,
//     className: PropTypes.string,
//     title: PropTypes.string,
//     required: PropTypes.bool,
//     register: PropTypes.element,
//     name: PropTypes.string,
//     options: PropTypes.array
// }