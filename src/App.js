import './App.css';
import React from 'react'
import List from "./components/List.js"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom'

const App = (props) => {
  const style = {
    position:"fixed",
    right:160,
    bottom:12,
}
const toCreate = () => {
  props.history.push("/new")
}
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

