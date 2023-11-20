import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <h1>This is the Layout Route</h1>
            <Outlet />
        </>
    )
}