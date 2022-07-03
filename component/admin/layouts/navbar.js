import React from "react";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AdminNavbar() {
    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <Link href="/">
                <a className="navbar-brand">Khata Management</a>
            </Link>
            <input className="form-control form-control-dark w-100" type="text" placeholder="Search"
                   aria-label="Search"/>
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <a className="navbar-brand" href="/admin/login">Sign out</a>
                </li>
            </ul>
        </nav>
    );
}
