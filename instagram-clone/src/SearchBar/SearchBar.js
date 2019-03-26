import React from 'react';
import icon from '../Images/87390.png';
import {Icon, Bar,NavIcons} from '../StyleComponents/StyledComponents';
// import searchIcon from './searchIcon.png';
import compass from '../Images/compass.jpg';
import heart from '../Images/heart.png';

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
            <NavIcons>
                <img src={compass} alt="compass"/>
                <img src={heart} alt="heart"/>
            </NavIcons>
        </Bar>
    )
}

export default SearchBar;