import React from 'react';
import icon from '../Images/87390.png';
import {Icon, Bar} from '../StyleComponents/StyledComponents';


const SearchBar = props => {
    return(
        <Bar>
            <Icon><img src={icon} alt="Icon"/></Icon>
        </Bar>
    )
}

export default SearchBar;