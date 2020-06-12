// Write your Character component here
import React, {useState} from 'react'
import styled from 'styled-components'
import Button from './Button'
import Details from './Details'

const CharacterDiv = styled.div`
    display: flex;
    border:2px solid black;
    align-items: center;
    margin: 5%;
    background-color: black;
    opacity: 50%;
    color: gold;
    border-radius:20%;
    flex-direction: column;
`



const Character = props => {
    const { listOfCharacters } = props
    // const [currentFriend, setCurrentFriend] = useState(null)

    // const openDetails = name => {
    //     setCurrentFriend(name)
    // }
    // const closeDetails = () => {
    //     setCurrentFriend(null)
    // }
    // const { characterInfo } = props
    // const characterName = listOfCharacters[0].name



    return (
        <div>
            {listOfCharacters.map(character =>{
                    return <CharacterDiv>
                            <h1>{character.name}</h1>
                            <Button>Info</Button>
                            {/* {currentFriend && <Details friendName = {currentFriend} close = {closeDetails}/>} */}
                        </CharacterDiv>
            })
            }
        </div>
    )
};

export default Character;