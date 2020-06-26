import styled from 'styled-components';

export const Container = styled.div`
display: flex;
color: #136713;
background: white;
border-radius: 5px;
box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
padding: 1em;
align-items: center;
cursor: pointer;
`;

export const ProductPhotoArea = styled.div`
width: 100px;
`;

export const ProductPhoto = styled.img`
max-width: 100%;
`;

export const ProductInfoArea = styled.div`
flex: 1;
padding: 0 1em;
`;

export const ProductName = styled.div`
font-size: 1.1em;
font-weight: bold;
`;
export const ProductPrice = styled.div`
font-size: .9em;
`;
export const ProductIngredients = styled.div`
font-size: .85em;
`;

export const ProductButtonArea = styled.div`
width: 15px;
`;
export const ProductButton = styled.img`
max-width: 100%
`;
