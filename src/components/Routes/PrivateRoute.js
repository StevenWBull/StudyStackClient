// PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { getCurrentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={(props) =>
                getCurrentUser() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
};

export default PrivateRoute;
