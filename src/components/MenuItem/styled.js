import styled from 'styled-components';

export const LinkArea = styled.a`
display: flex;
justify-content: center;
padding: 1em;
margin: .5em;
border-radius: 10px;
border: 1px solid transparent;
transition: background-color .15s;

&:hover {
    border-color: #188018;
}
&.active {
    background-color: #188018;
}
`;


export const LinkIcon = styled.img`
max-width: 100%;
`;