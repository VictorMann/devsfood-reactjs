import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default ({children, ...rest}) => {
    
    const history = useHistory();
    const token = useSelector(state => state.user.token);

    if (!token) {
        history.push('/login');
        return 0;
    }

    return (
    <Route {...rest}>
        {children}
    </Route>
    );
};