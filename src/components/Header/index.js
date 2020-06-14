import React, { useState } from 'react';
import { Container, Logo, SearchInput } from './styled';

export default ({ search, onSearch }) => {
    
    const [inputActive, setInputActive] = useState( !!search );

    const handleInputFocus = () => {
        setInputActive(true);
    };

    const handleInputBlur = e => {
        if (!search) setInputActive(false);
    };

    const handleChange = e => {
        onSearch(e.target.value);
    };

    return (
        <Container>
            <Logo src="/assets/logo.png" />
            <SearchInput 
                type="search"
                value={search}
                className={inputActive ? 'active' : ''}
                placeholder="Procure um produto"
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur} />
        </Container>
    );
}