import React from 'react';
import { Link } from "react-router-dom";

const NavItem = ({text, link}) => {
    const redirectLink=`/${link}`
    return <h3>
        <Link to={redirectLink}>{text}</Link>
    </h3>
}

export default NavItem;