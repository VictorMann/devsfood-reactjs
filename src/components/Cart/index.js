import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    CartArea, 
    CartHeader, 
    CartIcon, 
    CartDown, 
    CartText, 
    CartBody, 
    ProductsArea, 
    ProductItem, 
    ProductPhoto, 
    ProductInfoArea, 
    ProductName, 
    ProductPrice, 
    ProductQuantityArea, 
    ProductQtAction, 
    ProductQuantity, 
    DeliveryArea, 
    DeliveryTitle, 
    DeliveryInfoArea, 
    DeliveryInfo, 
    DeliveryIcon, 
    DiscountArea, 
    DiscountTitle, 
    DiscountInput,
    SummaryArea,
    SummaryDetails,
    CheckoutButton
} from './styled';
import { paraMoeda } from '../../helpers';

export default () => {
    const [show, setShow] = useState(true);
    
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);
    const quantity = products.reduce((qt, item) => qt + item.quantity, 0);

    const handleClickCart = () => {
        setShow(!show);
    };

    const handleProductChange = (index, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload: {index, type}
        });
    };

    return (
        <CartArea>
            <CartHeader
                onClick={handleClickCart}>
                <CartIcon src="/assets/cart.png"></CartIcon>
                <CartText>Meu carrinho ({quantity})</CartText>
                {show &&
                    <CartDown src="/assets/down.png" />
                }
            </CartHeader>
            <CartBody className={show ? 'active' : ''}>
                <ProductsArea>
                    {products.map((item, index) =>
                        <ProductItem key={index}>
                            <ProductPhoto src={item.image} />
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ {paraMoeda(item.price)}</ProductPrice>
                            </ProductInfoArea>
                            <ProductQuantityArea>
                                <ProductQtAction 
                                    src="/assets/minus.png"
                                    onClick={() => handleProductChange(index, '-')} />
                                <ProductQuantity>{item.quantity}</ProductQuantity>
                                <ProductQtAction 
                                    src="/assets/plus.png"
                                    onClick={() => handleProductChange(index, '+')} />
                            </ProductQuantityArea>
                        </ProductItem>
                    )}
                </ProductsArea>
                <DeliveryArea>
                    <DeliveryTitle>Entrega</DeliveryTitle>
                    <DeliveryInfoArea>
                        <DeliveryInfo data={{
                            location: 'Minha casa',
                            street: 'Rua das rosas',
                            number: 123,
                            city: 'Guarulhos',
                            uf: 'SP'
                        }} />
                        <DeliveryIcon src="/assets/edit.png" />
                    </DeliveryInfoArea>
                </DeliveryArea>
                <DiscountArea>
                    <DiscountTitle>Cupom de desconto</DiscountTitle>
                    <DiscountInput placeholder="Ex.: DONUT10" />
                </DiscountArea>
                <SummaryArea>
                    <SummaryDetails data={[
                        {title: 'Desconto', value: 0},
                        {title: 'Taxa de entrega', value: 7.99},
                        {title: 'Total', value: 124.31},
                    ]} />
                </SummaryArea>
                <CheckoutButton>Finalizar Compra</CheckoutButton>
            </CartBody>
        </CartArea>
    );
};