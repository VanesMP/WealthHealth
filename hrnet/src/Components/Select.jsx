import PropTypes from 'prop-types';
import ErrorMessageField from "./ErrorMessageField";

/**Render select element for form
 * @function Select
 * @param {string} htmlFor
 * @param {string} className
 * @param {string} title
 * @param {function} register
 * @param {boolean} required
 * @param {object} errors
 * @param {array} options
 * @param {string} name
 * @returns {JSX}
 */

export default function Select({
  htmlFor,
  className,
  title,
  register,
  required,
  name,
  options,
  errors
}) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {title}
      <select {...register(name, { required })}>
        <option value=""> </option>
        {options.map((arrayItem) => (
          <option
            name={arrayItem.name}
            value={arrayItem.abbreviation}
            key={arrayItem.name}
          >
            {arrayItem.name}
          </option>
        ))}
      </select>
      {errors && (
        <ErrorMessageField
          className="errorMessageSelect"
          message="Please, choose an option"
        />
      )}
    </label>
  );
}

Select.propTypes = {
    htmlFor: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    required: PropTypes.bool,
    register: PropTypes.func,
    errors: PropTypes.object,
    name: PropTypes.string,
    options: PropTypes.array
}
