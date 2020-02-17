import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    display: grid;
    grid-template-columns: 150px auto 140px 140px;
`

export default function() {
    return <Bar>
        <div>CryptoDash</div>
        <div/>
        <div>Dashboard</div>
        <div>Settings</div>
    </Bar>
}