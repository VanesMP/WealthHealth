import { Input } from "./Input"
import { useForm } from "react-hook-form";


export const SearchBar= ({ researchEmployee }) => {

    const { register, getValues } = useForm()

    const handleSearchChange = () => {
        let valueSearch = getValues('search')
        researchEmployee(valueSearch)
    }

    return(
        <form onKeyUp={handleSearchChange} className='searchForm'>
            <Input htmlFor='search' className='search' title='Search' type='search' id='search' name='search' register={register}/>
        </form>
    )
}