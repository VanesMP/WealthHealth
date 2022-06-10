// import PropTypes from 'prop-types';

/**Render a error message for empty field to form
 * @function ErrorMessageField
 * @returns {JSX}
 */

export default function ErrorMessageField({ className, message }) {

    return (
        <div>
            <p className={className}>{message}</p>
        </div>
    )
}