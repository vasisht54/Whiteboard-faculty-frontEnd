import React from "react";
import NavTabComponent from "./NavTabComponent";

const NavListComponent = ({navTabs}) =>
    <ul className="nav nav-pills">
        {
            navTabs.map(navTab =>
                    <NavTabComponent key={navTab._id} navTab={navTab} />
            )
        }
    </ul>;
export default NavListComponent;