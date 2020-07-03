import styled from 'styled-components';


export const Container = styled.div`
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
display: flex;
visibility: hidden;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, .7);
z-index: 100;
opacity: 0;

transition: opacity .2s ease;

&.active {
    visibility: visible;
    opacity: 1;
}
&.active > * {
    opacity: 1;
    margin-top: 0;
}
`;

export const ModalBody = styled.div`
max-height: 90vh;
max-width: 90vw;
min-height: 200px;
min-width: 200px;
background: white;
border-radius: 20px;
box-shadow: 0 0 50px #000;
overflow: auto;
opacity: 0;
margin-top: -50px;

transition-property: opacity, margin-top;
transition-duration: .5s;
transition-timing-function: ease;
`;