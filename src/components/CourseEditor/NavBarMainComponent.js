import React from "react";
import LessonListComponent from "./LessonListComponent";

const NavBarMainComponent = ({closeEditor}) =>
    <div className="wbdv-navbar">
        <nav className="navbar navbar-dark navbar-expand-md">
            <button onClick={closeEditor} className="btn wbdv-course-editor wbdv-close wbdv-bold">
                X
            </button>
            &nbsp;<a className="navbar-brand wbdv-bold wbdv-course-title" href="#">CS5610 - WebDev</a>
            <div className="navbar-collapse flex-row-reverse">
                <LessonListComponent lessons = {[
                    {title: "Build"},
                    {title: "Pages"},
                    {title: "Theme"},
                    {title: "Store"},
                    {title: "Apps"},
                    {title: "Settings"},
                    {title: "+"}
                ]} />
            </div>
        </nav>
    </div>;
export default NavBarMainComponent;