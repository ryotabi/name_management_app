import React,{useState,useEffect} from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {db} from './firebase';

const Create = (props) => {
    const [name,setName] = useState("")
    const [date,setDate] = useState("")
    const [place,setPlace] = useState("")
    const [age,setAge] = useState("")
    const [comment,setComment] = useState("")
    const style = {
        margin:30,
    }
    const createName = () => {
        db.collection('names').add({name:name,date:date,place:place,age:age,comment:comment})
        setName("")
        setDate("")
        setPlace("")
        setAge("")
        setComment("")
        props.history.push("/")
    }
    return (
        <>
            <Container>
                <TextField
                    InputLabelProps={{
                        shrink:true,
                    }}
                    label="name"
                    style={style}
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                />
                <TextField
                    InputLabelProps={{
                        shrink:true,
                    }}
                    label="date"
                    value={date}
                    style={style}
                    type="date"
                    onChange={(e)=>{setDate(e.target.value)}}
                />
                <TextField
                    InputLabelProps={{
                        shrink:true,
                    }}
                    label="place"
                    value={place}
                    style={style}
                    onChange={(e)=>{setPlace(e.target.value)}}
                />
                <TextField
                    InputLabelProps={{
                        shrink:true,
                    }}
                    label="age"
                    value={age}
                    style={style}
                    onChange={(e)=>{setAge(e.target.value)}}
                />
                <TextField
                    InputLabelProps={{
                        shrink:true,
                    }}
                    label="comment"
                    value={comment}
                    style={style}
                    onChange={(e)=>{setComment(e.target.value)}}
                />
                <Button variant="contained" color="primary" style={style} onClick={createName}>
                    Create
                </Button>
            </Container>
        </>
    )
}

export default Create
