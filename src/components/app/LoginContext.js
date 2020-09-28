import React from 'react';

const LoginContext = React.createContext(sessionStorage.getItem("jwttkn") !== null);

export default LoginContext;