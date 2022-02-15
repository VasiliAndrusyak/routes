import {Link, useMatch} from 'react-router-dom';
import React from "react";

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to);
    console.log(match);

    return (
        <Link
            to={to}
            style={{
                color: match ? 'var(--color-active)' : 'white',
            }}
            {...props}
        >
            {children}
        </Link>
    )
}
export default CustomLink;

