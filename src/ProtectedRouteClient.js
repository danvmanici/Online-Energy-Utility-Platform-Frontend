import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRouteClient({ component: Component, ...restOfProps }) {
    const isAuthenticated = localStorage.getItem("role");
    console.log("this", isAuthenticated);
    localStorage.removeItem("role")
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isAuthenticated==="client" ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
}

export default ProtectedRouteClient;