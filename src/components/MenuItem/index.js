import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { LinkArea, LinkIcon } from './styled';

export default ({ title, icon, link }) => {

    const history = useHistory();
    const location = useLocation();

    // link ativo
    const isActive = location.pathname === link;


    const handleLinkClick = e => {
        e.preventDefault();
        history.push(link);
    };

    return (
        <LinkArea 
            data-tip={title}
            data-for="tip-right"
            href={link} 
            onClick={handleLinkClick} 
            className={isActive ? 'active' : ''}>
                
                <LinkIcon src={icon} />
        </LinkArea>
    );
};