import React from 'react';
import icon from '../Images/87390.png';
import {Icon, Bar,NavIcons} from '../StyleComponents/StyledComponents';
// import searchIcon from './searchIcon.png';
import compass from '../Images/compass2.png';
import heart from '../Images/heart.png';
import user from '../Images/user.png';

const SearchBar = props => {
    return(
        <Bar>
            <Icon><img src={icon} alt="Icon"/></Icon>
            <form>
                <input
                    type= "text"
                    placeholder="🔍 Search here..."
                    name= "search"
                    onChange={props.handleChanges}
                    value={props.search}
                />
                {/* <SearchIcon><img src={searchIcon} alt="search-icon"/></SearchIcon> */}
            </form>
            <NavIcons>
                <img src={compass} alt="compass"/>
                <img src={heart} alt="heart"/>
                <img src={user} alt="user"/>
            </NavIcons>
        </Bar>
    )
}

export default SearchBar;