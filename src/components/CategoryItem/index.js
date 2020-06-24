import React from 'react';
import { Container, CategoryImage } from './styled';

export default ({data, activeCategory, setActiveCategory}) => {
    return (
        <Container 
            data-tip={data.name}
            data-for="tip-top"
            className={data.id == activeCategory ? 'active' : ''}
            onClick={() => setActiveCategory(data.id)}>
            
            <CategoryImage src={data.image} />
        </Container>
    );
}