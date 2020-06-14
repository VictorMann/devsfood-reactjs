import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: space-between;
background: #136713;
border-radius: 10px;
padding: 1em;
`;

export const Logo = styled.img`
max-width: 100%;
width: 130px;
`;

export const SearchInput = styled.input`
background: rgba(255, 255, 255, .7) url("/assets/search.png") no-repeat .6em center;
background-size: auto 2em;
width: 0;
padding: 1em 0 1em 3.2em;
border-radius: 2em;
outline: none;
border: none;
cursor: pointer;
transition: .2s ease;

&.active {
    padding-right: 1em;
    width: 250px;
    background-color: white;
    cursor: initial;
}
`;