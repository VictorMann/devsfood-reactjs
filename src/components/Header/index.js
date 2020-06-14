import React from 'react';
import { Container, Logo, SearchInput } from './styled';

export default () => {
    
    return (
        <Container>
            <Logo src="/assets/logo.png" />
            <SearchInput placeholder="Procure um produto" />
        </Container>
    );
}