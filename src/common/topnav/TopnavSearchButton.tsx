import React from 'react'
import booksitoutIcon from '../icons/booksitoutIcon'
import styled from 'styled-components';
import breakpoints from '../breakpoints';

const TopnavSearchButton = ({ showSearchBar, handleSearchClick, md = false }) => {

    if (md) {
        return (
            <NavbarButton>
                <booksitoutIcon.topnavSearch
                    className={`h2 m-0 button-hover ${showSearchBar ? 'text-black' : 'text-secondary'}`}
                    onClick={handleSearchClick}
                />
            </NavbarButton>
        )
    }

    return (
        <button className={`d-lg-none ms-auto me-3 navbar-toggler mt-1`} style={{ height: '35px', paddingTop: '2.5px' }}>
            <booksitoutIcon.topnavSearch
                className={`h2 m-0 button-hover ${showSearchBar ? 'text-black' : 'text-secondary'}`}
                onClick={handleSearchClick}
            />
        </button>
    )
}

const NavbarButton = styled.button`
    margin-top: 7.5px;
    margin-right: 10px;
    
    padding: 2.5px 12px 4px;
    height: 35px;
    color: var(--bs-navbar-color);
    background-color: transparent;
    border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
    border-radius: var(--bs-navbar-toggler-border-radius);
    transition: var(--bs-navbar-toggler-transition);

    @media screen and (max-width: ${breakpoints.md}) {
        display: none;
    }

    @media screen and (min-width: ${breakpoints.lg}) {
        display: none;
    }
`;

export default TopnavSearchButton