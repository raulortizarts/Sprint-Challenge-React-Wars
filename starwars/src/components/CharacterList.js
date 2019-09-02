import React from 'react';
import styled from 'styled-components';

const List = styled.div`
width: 800px;
margin: 0 auto;
background: rgb(47,47,47, 0.3);
border-radius: 20px;
box-shadow: 5px 6px 5px;
display: flex;
flex-direction: column;
justify content: space-evenly;`;

const Title = styled.h1`
color: white;
margin: 10px;
text-align: left;
`;

const Name = styled.h2`
color: white;
`;

export default function CharacterList(props) {

    return (
        <List>
            <Title>Multi Pass</Title>
            <Name>{props.people.name}</Name>
            {props.people.birth_year}
            {props.people.species}
            {props.people.homeworld}
            {props.people.gender}
            {props.people.skin_color}
            {props.people.eye_color}
            {props.people.hair_color}

        </List>
    )
}
