// Write your Character component here
import React, {useState} from 'react'


const Character = props => {
    const { listOfCharacters } = props
    // const { characterInfo } = props

    return (
        <div>{listOfCharacters[0].name}</div>
    )
}

export default Character;