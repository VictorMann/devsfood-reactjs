import React from 'react';
import { Container, CategoryImage } from './styled';

export default ({data, activeCategory, setActiveCategory}) => {
    return (
        <Container 
            className={data.id == activeCategory ? 'active' : ''}
            onClick={() => setActiveCategory(data.id)}>
            
            <CategoryImage src={data.image} />
        </Container>
    );
}