import styled from 'styled-components';

export const Container = styled.div`
width: 600px;
padding: 1em;
`;

export const ProductArea = styled.div`
display: flex;
margin-bottom: 1em;
color: #073C07;
`;
export const ProductPhoto = styled.img`
width: 40%;
max-width: 100%;
border-radius: 10px;
`;
export const ProductInfoArea = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
flex: 1;
padding-left: 1em;
`;

export const ProductDetails = styled.div``;
export const ProductName = styled.h4`
font-size: 2em;
margin: 0;
`;
export const ProductIngredients = styled.p`
margin-top: .5em;
margin-bottom: 0;
`;
export const ProductPrice = styled.div``;


export const ProductQuantityArea = styled.div`
display: flex;
justify-content: space-between;
font-size: 1.8em;
`;
export const ProductQuantity = styled.div`
display: flex;
align-items: center;
`;
export const ProductQtImage = styled.img`
background-color: #073C07;
width: 1em;
height: 1em;
border-radius: 5px;
padding: .2em;
cursor: pointer;
`;
export const ProductQtText = styled.div`
font-weight: bold;
margin: 0 .5em;
`;


export const ProductPriceTotal = styled.p`
font-weight: bold;
`;

export const ProductButtons = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;

& > :first-child {
    margin-right: 1em;
}
`;
export const ProductButton = styled.button`
border: 0;
background-color: #073C07;
color: white;
font-size: ${props => props.tam === 'lg' ? '1em' : '.8em'};
font-weight: bold;
border-radius: 5px;
padding: .7em 1em;
box-shadow: 4px 5px 0 rgba(0, 0, 0, .16);
cursor: pointer;
`;

