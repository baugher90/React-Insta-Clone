import React from 'react';
import icon from '../Images/87390.png';
import {Icon, Bar} from '../StyleComponents/StyledComponents';
// import searchIcon from './searchIcon.png';


const SearchBar = props => {
    return(
        <Bar>
            <Icon><img src={icon} alt="Icon"/></Icon>
            <form>
                <input
                    placeholder="🔍 Search here..."
                />
                {/* <SearchIcon><img src={searchIcon} alt="search-icon"/></SearchIcon> */}
            </form>
            
        </Bar>
    )
}

export default SearchBar;