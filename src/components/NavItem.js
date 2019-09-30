import React from 'react';
import { Link } from "react-router-dom";

const NavItem = ({text, link}) => {
    const redirectLink=`/list/${link}`
    return <h3>
        <Link to={redirectLink}>{text}</Link>
    </h3>
}

export default NavItem;