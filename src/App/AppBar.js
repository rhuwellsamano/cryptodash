import React from 'react';
import styled, {css} from 'styled-components';

const Logo = styled.div`
    font-size: 1.5em;
`

const Bar = styled.div`
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: 150px auto 140px 140px;
`

const ControlButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        text-shadow: 0px 0px 60px #03ff03;
    `}
`

function ControlButton({name, active}) {
    return (
    <ControlButtonElem active={active}>
        {toProperCase(name)}
    </ControlButtonElem>
    )
}

function toProperCase(lower) {
    return lower.charAt(0).toUpperCase() + lower.substr(1);
}

export default function() {
    return (
    <Bar>
        <Logo>CryptoDash</Logo>
        <div/>
        <ControlButton active name={"Dashboard"}/>
        <ControlButton name={"Settings"}/>
    </Bar>
    )
}