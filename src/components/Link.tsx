import React, {ReactNode} from 'react';
import styled from 'styled-components';

const LinkButton = styled.a`
    color: #fff;
    padding: .75rem 1.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    border-radius: 100rem;
    line-height: 1.5;
    background-color: #273654;
    border-color: #273654;

    &:hover {
        background-color: #66874f;
        border-color: #66874f;
    }
`;

type Props = {
    children: ReactNode,
    link: string,
}

export default function Link({children, link}: Props) {

    return (
        <LinkButton className="btn btn-primary btn-lg letter-spacing" href={link} target="_blank">
            {children}
        </LinkButton>
    );
}