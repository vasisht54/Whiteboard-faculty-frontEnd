import React from "react";

export const SideBar = () =>
    <div className="col-3 bg-dark wbdv-side-bar">
        <ul className="nav flex-column nav-pills pt-3 wbdv-module-list">
            <li className="nav-item bg-dark wbdv-module-item">
                <a href="#" className="nav-link list-group-item my-1 font-weight-bolder wbdv-module-item-title">
                    Module 1 - jQuery
                    <button type="button" className="btn btn-sm float-right wbdv-bold wbdv-module-item-delete-btn">
                        X
                    </button>
                </a>
            </li>
            <li className="nav-item bg-dark wbdv-module-item">
                <a href="#" className="nav-link list-group-item active my-1 font-weight-bolder wbdv-module-item-title">
                    Module 2 - React
                    <button type="button" className="btn btn-sm float-right wbdv-bold wbdv-module-item-delete-btn">
                        X
                    </button>
                </a>
            </li>
            <li className="nav-item bg-dark wbdv-module-item">
                <a href="#" className="nav-link list-group-item my-1 font-weight-bolder wbdv-module-item-title">
                    Module 3 - Redux
                    <button type="button" className="btn btn-sm float-right wbdv-bold wbdv-module-item-delete-btn">
                        X
                    </button>
                </a>
            </li>
            <li className="nav-item bg-dark wbdv-module-item">
                <a href="#" className="nav-link list-group-item my-1 font-weight-bolder wbdv-module-item-title">
                    Module 4 - Native
                    <button type="button" className="btn btn-sm float-right wbdv-bold wbdv-module-item-delete-btn">
                        X
                    </button>
                </a>
            </li>
            <li className="nav-item bg-dark wbdv-module-item">
                <a href="#" className="nav-link list-group-item my-1 font-weight-bolder wbdv-module-item-title">
                    Module 5 - Angular
                    <button type="button" className="btn btn-sm float-right wbdv-bold wbdv-module-item-delete-btn">
                        X
                    </button>
                </a>
            </li>
            <li className="nav-item bg-dark wbdv-module-item">
                <a href="#" className="nav-link list-group-item my-1 font-weight-bolder wbdv-module-item-title">
                    Module 6 - Node
                    <button type="button" className="btn btn-sm float-right wbdv-bold wbdv-module-item-delete-btn">
                        X
                    </button>
                </a>
            </li>
            <li className="nav-item bg-dark wbdv-module-item">
                <a href="#" className="nav-link list-group-item my-1 font-weight-bolder wbdv-module-item-title">
                    Module 7 - Mongo
                    <button type="button" className="btn btn-sm float-right wbdv-bold wbdv-module-item-delete-btn">
                        X
                    </button>
                </a>
            </li>
            <li className="bg-dark">
                <a href="#" className="nav-link font-weight-bolder">
                    <button className="btn float-right btn-add-module wbdv-bold wbdv-module-item-add-btn">
                        +
                    </button>
                </a>
            </li>
        </ul>
    </div>;