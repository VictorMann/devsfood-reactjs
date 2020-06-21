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