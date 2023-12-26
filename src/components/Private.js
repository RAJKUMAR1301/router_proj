import React from 'react'
import { Navigate } from 'react-router-dom';
const Private = ({isLogged,children}) => {
 if(isLogged){
    return children;
 }
 else{
 return <Navigate to="/login"></Navigate>
 }
}

export default Private
