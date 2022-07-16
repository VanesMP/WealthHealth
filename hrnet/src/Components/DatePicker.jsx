import ErrorMessageField from "./ErrorMessageField";
import PropTypes from 'prop-types';

/** Render form datPicker field
 * @function DatePicker
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

export const DatePicker = ({
  htmlFor,
  className,
  title,
  type,
  register,
  required,
  errors,
  name,
}) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {title}
      <input type={type} {...register(name, { required })} />
      {errors && (
        <ErrorMessageField
          className="errorMessageDate"
          message="Please, fill out the field !"
        />
      )}
    </label>
  );
};

DatePicker.propTypes = {
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string, 
  type: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.bool,
  errors: PropTypes.object,
  name: PropTypes.string
}
