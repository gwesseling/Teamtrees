import React from 'react';
import styled from 'styled-components';
import useScrollUp from './containerHook';
import Animation from '_COMPONENTS/Animation';

import spaceship from '_ASSETS/spaceship.svg';

const ScrollUpContainer = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    z-index: 999;
    bottom: 25px;
    right: 25px;
    background-color: #273654;
    border: none;
    border-radius: 100rem;
    padding: 10px 25px 10px 15px;
    color: white;
    font-weight: 600;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15);
    outline: none !important;

    &:hover {
        background-color: #66874f;
        border-color: #66874f;
    }

    @media screen and (max-width: 768px) {
        right: 50%;
        transform: translateX(50%);
    }
`;

const ScrollImage = styled.img`
    height: 25px;
    width: 25px;
    margin-right: 15px;
`;

/** 
 * Scroll up button component.
 */
export default function ScrollUp() {
    const {isActive} = useScrollUp();

    /** 
     * Scroll to top of the page.
     */
    function scrollTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <Animation animation = "fade">
            {isActive ? 
                <ScrollUpContainer onClick={scrollTop}>
                    <ScrollImage src={spaceship} />
                    Scroll to top
                </ScrollUpContainer> : null 
            }
        </Animation>
    );
}