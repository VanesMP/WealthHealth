import PropTypes from 'prop-types';

/**Render select element for form
 * @function Select
 * @returns {JSX}
 */

export default function Select({ title, attribut, data }) {
  
    return(
        <label htmlFor={attribut} className={attribut}>
            {title} 
            <select name={attribut} id={attribut}>
                {data.map(arrayItem => <option name={arrayItem.name} value={arrayItem.name} key={arrayItem.name}>{arrayItem.name}</option>)};
            </select>
        </label>
    )
}

Select.propTypes = {
    title: PropTypes.string,
    attribut: PropTypes.string,
    options: PropTypes.array
}