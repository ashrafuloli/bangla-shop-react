import React from 'react';
import {Button} from "react-bootstrap";
import {Images} from "../../utilities/Images";

const Header = () => {
    return (
        <>
            <header className="header-area">
                <img src={Images.logo} alt="logo"/>
                <h2><i className="fa-thin fa-face-awesome"></i></h2>
                <Button variant="success">Success</Button>
            </header>
        </>
    );
};

export default Header;
