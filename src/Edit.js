import React,{useState,useEffect} from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {db} from './firebase';

const Edit = (props) => {
    const id = props.match.params.id
    const [name,setName] = useState("")
    const [date,setDate] = useState("")
    const [place,setPlace] = useState("")
    const [age,setAge] = useState("")
    const [comment,setComment] = useState("")
    useEffect(()=>{
        db.collection('names').doc(id).get().then(function(doc) {
            setName(doc.data().name)
            setDate(doc.data().date)
            setPlace(doc.data().place)
            setAge(doc.data().age)
            setComment(doc.data().comment)
    })
    },[])
    const style = {
        margin:30,
    }
    const editName = () => {
        db.collection("names").doc(id).set({name:name,date:date,place:place,age:age,comment:comment},{merge: true})
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
                <Button variant="contained" color="primary" style={style} onClick={editName}>
                    Edit
                </Button>
            </Container>
        </>
    )
}

export default Edit
