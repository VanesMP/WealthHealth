import { Input } from "./Input";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';

/**Render of the search bar for the employee tables
 * @function SearchBar
 * @param {function} researchEmployee
 * @return {JSX}
 */

export const SearchBar = ({ researchEmployee }) => {
  //utilisation du hook personnalisé useFrom() de React-Hook-Form pour recuperer les valeurs de la barre de recherche
  const { register, getValues } = useForm();

  const handleSearchChange = () => {
    let valueSearch = getValues("search");
    researchEmployee(valueSearch);
  };

  return (
    <form onKeyUp={handleSearchChange} className="searchForm">
      <Input
        htmlFor="search"
        className="search"
        title="Search"
        type="search"
        id="search"
        name="search"
        register={register}
      />
    </form>
  );
};

SearchBar.propTypes = {
  researchEmployee: PropTypes.func
}
