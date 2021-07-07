import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import { BASE_URL } from './API'
import Character from './components/Character'
import SearchBar from './components/SearchBar/SearchBar'




const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterInfoOpen, setCharacterInfo] = useState({});
  const [characterList, setCharacterList] = useState([]);
  const [searchText, setSearchText] = useState('')
  // const [key, setKey] = useState(1);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() =>{
    axios.get(`${BASE_URL}`)
      .then(res => {
        console.log(res.data.results)
        // setCharacterInfo(res.data)
        setCharacterList(res.data.results)
        // characterList.forEach(character => {
        //   characterArray.push(character)
        //   console.log(characterArray)
        })
        // .then(characterList =>{
        //   console.log(characterList)
        //   characterList.forEach(character =>{
        //   })
        // })
      .catch(err =>{
        console.log('error')
      })
  },[])

  // useEffect(() =>{
  //   axios.get(`${BASE_URL}${key}/`)
  //     .then(res => {
  //       console.log(res.data)
  //       setCharacterInfo(res.data)
  //     })
  //     .catch(err =>{
  //       console.log('error')
  //     })
  // }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <SearchBar updater={setSearchText}/>
      <Character listOfCharacters ={characterList.filter(character=>{
        if(!searchText || character.name.includes(searchText)){
          return character}
          return false
      })}/>
      {/* <p>{characterList[0].name}</p> */}

      {/* <Character listOfCharacters={characterList}/> */}
      <div></div>
    </div>
  );
};

export default App;
