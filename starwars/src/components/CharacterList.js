import React from 'react';
import styled from 'styled-components';

import CharacterDOB from "./CharacterDOB";
import CharacterSpecies from "./CharacterSpecies";
import CharacterHomeworld from "./CharacterHomeworld";

const List = styled.div`
width: 800px;
margin: 15px auto;
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

const Id= styled.div`
width: 750px;
margin: 0 auto;
background: rgba(0.8,0,0,0.3);
border-radius: 20px;
box-shadow: 5px 6px 5px;
display: flex;
flex-direction: row;
justify-content: flex-end;
 `;

const Picture = styled.div`
width: 100px;
height: 100px;
margin: 10px auto;
background: rgba(0.8,0,0,0.5);
display: flex;
flex-direction: column;
justify-content: flex-start;
align-content: flex-start;
align-items: center;
text-align: center;
 `;


export default function CharacterList(props) {

    return (
        <List>
            <Title>Multi Pass</Title>

            <Name>{props.people.name}</Name>

            <Id>
                <Picture>USER PICTURE</Picture>
            
                <CharacterDOB dob={props.people.birth_year} />
                <CharacterSpecies species={props.people.species} />
                <CharacterHomeworld homeworld={props.people.homeworld}/>

            </Id>
            {props.people.gender}
            {props.people.skin_color}
            {props.people.eye_color}
            {props.people.hair_color}

        </List>
    )
}
