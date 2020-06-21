import styled from 'styled-components';

export const Container = styled.div`
width: 3em;
height: 3em;
background-color: rgba(255, 255, 255, .5);
padding: .75em;
border-radius: 10px;
cursor: pointer;
transition: background-color .2s ease;

&:hover {
    background-color: rgba(255, 255, 255, .9);
}
&.active {
    background-color: #00ff2b;
}
`;

export const CategoryImage = styled.img`
max-width: 100%;
`;
