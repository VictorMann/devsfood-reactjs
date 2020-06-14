import React, { useState } from 'react';
import { Container, Logo, SearchInput } from './styled';

export default () => {
    
    const [inputActive, setInputActive] = useState(false);

    const handleInputFocus = () => {
        setInputActive(true);
    };

    const handleInputBlur = e => {
        let value = e.target.value.trim();
        if (!value) setInputActive(false);
    };

    return (
        <Container>
            <Logo src="/assets/logo.png" />
            <SearchInput 
                type="search"
                placeholder="Procure um produto"
                className={inputActive ? 'active' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur} />
        </Container>
    );
}