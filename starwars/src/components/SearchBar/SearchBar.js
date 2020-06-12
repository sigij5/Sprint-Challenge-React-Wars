import React from 'react'
import './SearBar.css'
import styled from 'styled-components'

const SearchDiv = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: inherit;
`
const SearchText = styled.input`
    text-align: center;
    color: gold;
    padding: 1% 2%;
    background-color: black;
`

const SearchBar = props => {
    const { updater } = props
    const changeHandler = event => {
        updater(event.target.value)
    }


    return(
        <SearchDiv>
            <SearchText 
                onChange={changeHandler}
                type='text'
                placeholder='Search for character'       
            />
        </SearchDiv>
    )
};


export default SearchBar;