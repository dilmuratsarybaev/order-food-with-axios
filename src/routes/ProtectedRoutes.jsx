import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoutes = ({ component, fallBackPath, isAllowed }) => {
    if (!isAllowed) {
        return <Navigate to={fallBackPath} />
    }
    return component
}
