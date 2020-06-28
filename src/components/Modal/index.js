import React from 'react';
import { Container, ModalBody } from './styled';

export default ({ status, setStatus, children }) => {

    const handleClick = e => {
        if (e.target.classList.contains('modalBg')) {
            setStatus(false);
        }
    };

    return (
        <>
            <Container 
                className={status ? 'modalBg active' : 'modalBg'}
                onClick={handleClick}>
                    <ModalBody>
                        {children}
                    </ModalBody>
            </Container>
        </>
    );
}