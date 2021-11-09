import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const isAuthenticated = localStorage.getItem("role");
    console.log("this", isAuthenticated);

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isAuthenticated==="admin" ? <Component {...props} /> : <Redirect to="/admin" />
            }
        />
    );
}

export default ProtectedRoute;