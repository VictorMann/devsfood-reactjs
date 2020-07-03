import React from 'react';
import styled from 'styled-components';
import { paraMoeda } from '../../helpers';


export const CartArea = styled.div`
background-color: #136713;
position: fixed;
bottom: 0;
right: 30px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
box-shadow: 0 0 5px rgba(255, 255, 255, .3);
`;
export const CartHeader = styled.div`
display: flex;
justify-content: center;
color: white;
width: 290px;
cursor: pointer;
padding: .5em;
`;
export const CartIcon = styled.img`
width: 1.3em;
margin-right: .75em;
`;
export const CartDown = styled.img`
position: absolute;
top: .8em;
right: 1em;
max-width: 100%;
width: 1em;
`;

export const CartText = styled.div``;
export const CartBody = styled.div`
color: white;
font-size: .9em;
height: 0;
opacity: 0;
overflow: hidden;
padding: 0 1em;
transition-property: height, opacity;
transition-duration: .2s, 1s;

&.active {
    height: 80vh;
    opacity: 1;
}
`;
export const ProductsArea = styled.div`
padding-top: 1em;
margin-bottom: 1.5em;
`;
export const ProductItem = styled.div`
display: flex;
margin-bottom: .65em;
`;
export const ProductPhoto = styled.img`
max-width: 100%;
width: 5em;
border-radius: 5px;
margin-right: .65em;
`;
export const ProductInfoArea = styled.div`
flex: 1;
`;
export const ProductName = styled.div`
font-weight: bold;
`;
export const ProductPrice = styled.div`
font-size: .9em;
`;
export const ProductQuantityArea = styled.div`
display: flex;
align-items: center;
align-self: center;
`;
export const ProductQtAction = styled.img`
max-width: 100%;
width: .75em;
height: .75em;
cursor: pointer;
`;
export const ProductQuantity = styled.div`
margin: 0 .3em;
`;
export const DeliveryArea = styled.div`
margin-bottom: 1.5em;

.delivery-info {
    font-size: .9em;
}
`;
export const DeliveryTitle = styled.div`
font-weight: bold;
margin-bottom: .5em;
`;
export const DeliveryInfoArea = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
export const DeliveryInfo = ({ data }) => {
    return (
        <div className="delivery-info">
            <div>{data.location}</div>
            <div>{data.street}, {data.number}</div>
            <div>{data.city} – {data.uf}</div>
        </div>
    );
};
export const DeliveryIcon = styled.img`
max-width: 100%;
width: 1.2em;
cursor: pointer;
`;
export const DiscountArea = styled.div`
margin-bottom: 1.5em;
`;
export const DiscountTitle = styled.div`
font-weight: bold;
margin-bottom: .3em;
`;
export const DiscountInput = styled.input`
font-size: 1em;
font-weight: bold;
text-transform: uppercase;
color: #136713;
padding: .5em;
width: 100%;
border: none;
border-radius: 5px;
outline: none;

::placeholder {
    color: #CCC;
    text-transform: initial;
}
`;
export const SummaryArea = styled.div`
margin-bottom: 1.5em;

.summary-details {
    width: 100%;
    font-weight: bold;

    td:last-child {text-align: right}
}
`;
export const SummaryDetails = ({ data }) => {
    return (
        <table className="summary-details">
            <tbody>
                {data.map((item, index) => 
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>R$ {paraMoeda(item.value)}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export const CheckoutButton = styled.button`
display: inline-block;
text-transform: uppercase;
background-color: #073c07;
color: white;
border: none;
text-align: center;
padding: 1em 0;
border-radius: 30px;
width: 100%;
cursor: pointer;
box-shadow: 0 2px 1px rgba(255, 255, 255, .2);
transition: box-shadow .2s;

&:hover {
    box-shadow: 0 0 0 5px rgba(255, 255, 255, .2);
    color: #ffe900;
}
`;



 