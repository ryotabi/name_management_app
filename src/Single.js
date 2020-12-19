import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './Single.module.css'
import Button from '@material-ui/core/Button';
import {db} from './firebase'

const Single = (props) => {
    const id = props.match.params.id
    const [info,setInfo] = useState({name:"",date:"",place:"",age:"",comment:""})
    useEffect(()=>{
        db.collection('names').doc(id).get().then(function(doc) {
            setInfo({name:doc.data().name,date:doc.data().date,place:doc.data().place,age:doc.data().age,comment:doc.data().comment})
    })
    },[])
    const deleteItem = () => {
        db.collection('names').doc(id).delete()
        props.history.push("/")
    }
    const toEdit = () =>{
        props.history.push("/edit/" + id)
    }
    return (
        <div>
            <Container className={styles.text_center}>
                <h2>{info.name}さん</h2>
                <TableContainer component={Paper}>
                <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>時間</TableCell>
                    <TableCell>場所</TableCell>
                    <TableCell>年齢</TableCell>
                    <TableCell>一言</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                    <TableCell>{info.date}</TableCell>
                    <TableCell>{info.place}</TableCell>
                    <TableCell>{info.age}</TableCell>
                    <TableCell>{info.comment}</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary" className={styles.button_margin}  onClick={toEdit}>
                Edit
            </Button>
            <Button variant="contained" color="secondary" className={styles.button_margin} onClick={deleteItem}>
                Delete
            </Button>
            </Container>
        </div>
    )
}

export default Single

