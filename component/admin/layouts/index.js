import React from 'react'
import AdminNavbar from "./navbar";
import AdminSidebar from "./Sidebar";

export default function AdminLayouts(props) {
    return (
        <>
            <AdminNavbar/>

            <AdminSidebar/>

            <main role="main">
                {props.preContainer && props.preContainer}
                <div className="album py-5 bg-light">
                    <div className="container">
                        {props.children}
                    </div>
                </div>
            </main>
        </>
    )
}
