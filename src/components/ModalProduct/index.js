import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { 
    Container,
    ProductArea,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductName,
    ProductIngredients,
    ProductPriceTotal,
    ProductQuantityArea,
    ProductQuantity,
    ProductQtImage,
    ProductQtText,
    ProductPrice,
    ProductButtons,
    ProductButton
 } from './styled';
 import { paraMoeda } from '../../helpers';

export default ({ data, setStatus }) => {

    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setQuantity(1);
    }, [data]);

    const handleCancelButton = () => {
        setStatus(false);
    };

    const handleMinusQt = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handlePlusQt = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        // junta as informarções
        // manda para o reducer
        dispatch({
            type: 'ADD_PRODUCT',
            payload: {data, quantity}
        });

        setStatus(false);
    };

    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                        <ProductPrice>R$ {paraMoeda(data.price)}</ProductPrice>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtImage 
                                src="/assets/minus.png"
                                onClick={handleMinusQt} />
                            <ProductQtText>{quantity}</ProductQtText>
                            <ProductQtImage 
                                src="/assets/plus.png"
                                onClick={handlePlusQt} />
                        </ProductQuantity>
                        <ProductPriceTotal>
                            R$ {paraMoeda(data.price * quantity)}
                        </ProductPriceTotal>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton
                    onClick={handleCancelButton}>
                        Cancelar
                </ProductButton>
                <ProductButton 
                    tam="lg"
                    onClick={handleAddToCart}>
                        Adicionar ao Carrinho
                </ProductButton>
            </ProductButtons>
        </Container>
    );
};