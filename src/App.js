import './App.css';
import React,{useEffect} from 'react'
import List from "./components/List.js"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {auth} from './firebase'

const App = (props) => {
  const style = {
    position:"fixed",
    right:160,
    bottom:12,
}
const toCreate = () => {
  props.history.push("/new")
}
useEffect(()=>{
  const unSub = auth.onAuthStateChanged((user)=>{
    !user && props.history.push('login')
  })
  return ()=> unSub()
},[])

  return (
    <>
    <List/>
    <Fab color="primary" aria-label="add" style={style} onClick={toCreate}>
      <AddIcon/>
    </Fab>
    </>
  );
}

export default App;

