import React from "react";

export const NavBarMain = () =>
    <div className="container-fluid wbdv-navbar">
        <nav className="navbar navbar-dark navbar-expand-md fixed-top">
            <button className="btn wbdv-course-editor wbdv-close wbdv-bold">
                X
            </button>
            &nbsp;<a className="navbar-brand wbdv-bold wbdv-course-title" href="#">CS5610 - WebDev</a>
            <div className="navbar-collapse flex-row-reverse">
                <ul className="nav nav-pills">
                    <li className="nav-item wbdv-page-tab">
                        <a href="#" className="wbdv-bold nav-link">Build</a>
                    </li>
                    <li className="nav-item wbdv-page-tab">
                        <a href="#" className="wbdv-bold active nav-link">Pages</a>
                    </li>
                    <li className="nav-item wbdv-page-tab">
                        <a href="#" className="wbdv-bold nav-link">Theme</a>
                    </li>
                    <li className="nav-item wbdv-page-tab">
                        <a href="#" className="wbdv-bold nav-link">Store</a>
                    </li>
                    <li className="nav-item wbdv-page-tab">
                        <a href="#" className="wbdv-bold nav-link">Apps</a>
                    </li>
                    <li className="nav-item wbdv-page-tab">
                        <a href="#" className="wbdv-bold nav-link">Settings</a>
                    </li>
                    <li className="nav-item wbdv-page-tab">
                        <a href="#" className="wbdv-bold nav-link wbdv-new-page-btn">+</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>