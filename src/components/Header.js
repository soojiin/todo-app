import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Div = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 18px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 25px;
    cursor: pointer;
`;

const Aside = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 18px;

    >*:first-child {
        align-self: flex-end;
    }
`;

const Button = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    margin-left: auto;
    font-size: 18px;
`;

const Header = () => {
    const [ isNavbarOpen, setIsNavbarOpen ] = useState(false);

    const openNavbar = () => {
        setIsNavbarOpen(true);
    }

    const closeNavbar = () => {
        setIsNavbarOpen(false);
    }

    return (
        <Div>
            <StyledFontAwesomeIcon icon={faBars} inverse onClick={openNavbar}/>
            <StyledFontAwesomeIcon icon={faCircleUser} inverse />
            { isNavbarOpen ?
            <Aside>
                <StyledFontAwesomeIcon icon={faXmark} onClick={closeNavbar} />
                <Link to="/"><Button>TodoList</Button></Link>
                <Link to="/calendar"><Button>Calendar</Button></Link>
            </Aside>
            : null }
        </Div>  
    );
    
};

export default Header;