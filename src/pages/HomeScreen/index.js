import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, CategoryArea, CategoryList } from './styled';

import api from '../../api';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);

    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories();
            setCategories(cat);
        };
        getCategories();
    }, []);

    useEffect(() => {

    }, [activeCategory]);

    return (
    <>
        <Container>
            <Header
                search={headerSearch} 
                onSearch={setHeaderSearch} />
            
            {categories.length &&
                <CategoryArea>
                    <h4 className="category-title">Selecione uma categoria</h4>
                    <CategoryList>
                        <CategoryItem 
                            data={{
                                id: 0,
                                title: 'Todas as categorias',
                                image: '/assets/food-and-restaurant.png'}}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory} />
                        {categories.map((item, k) =>
                            <CategoryItem 
                                key={k} 
                                data={item}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory} />
                        )}
                    </CategoryList>
                </CategoryArea>
            }

        </Container>
    </>
    );
}