import styled from 'styled-components';

export const Container = styled.div`
flex: 1;
`;

export const CategoryArea = styled.div`
color: white;

.category-title {
    font-weight: normal;
}
`;
export const CategoryList = styled.div`
display: flex;

& > * {
    margin-right: .75em;
}
`;

export const ProductArea = styled.div`
margin-top: 2em;
margin-bottom: 2em;
`;
export const ProductList = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
`;

export const ProductPaginationArea = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 20px;
`;


export const ProductPaginationItem = styled.div`
background: ${props => props.current == props.active ? '#bbb' : 'white'};
padding: 5px 10px;
border-radius: 5px;
box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
margin-right: .5em;
cursor: pointer;
`;