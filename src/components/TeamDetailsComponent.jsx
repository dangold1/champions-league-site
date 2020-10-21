import React from 'react'
import { DetailsContainer } from '../styles/ContainersStyle';
import { SecondaryTitle, DeatilsTitle } from '../styles/TitlesStyle';
import { Button } from '../styles/ButtonsStyle';
import { Logo } from '../styles/LogoStyle';

const TeamDetailsComponent = ({ data }) => {
    const { shortName, name, founded, address, website, crestUrl } = data;
    return (
        <DetailsContainer>
            <SecondaryTitle>{name}</SecondaryTitle>
            <Logo src={crestUrl} />
            <DeatilsTitle>Founded: {founded}</DeatilsTitle>
            <DeatilsTitle>Adress: {address}</DeatilsTitle>
            <a href={website}><Button>{shortName} Official Website</Button></a>
        </DetailsContainer>
    )
}

export default TeamDetailsComponent;
