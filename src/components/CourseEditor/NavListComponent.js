import React from "react";
import NavTabComponent from "./NavTabComponent";

const NavListComponent = ({lessons}) =>
    <ul className="nav nav-pills">
        {
            lessons.map(lesson =>
                    <NavTabComponent lesson={lesson} />
            )
        }
    </ul>;
export default NavListComponent;