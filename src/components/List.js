import React,{useState,useEffect} from 'react'
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {db} from '../firebase'
import { Link } from 'react-router-dom'

const List = () => {
    const [names,setNames] = useState([{id:"",name:"",date:"",place:""}])
    useEffect(()=>{
        const unSub = db.collection("names").onSnapshot((snapshot)=>{
            setNames(
                snapshot.docs.map((doc)=>{
                    return {id:doc.id,name:doc.data().name,date:doc.data().date,place:doc.data().place}
                })
            )
        })
        return ()=>unSub();
    },[])
    return (
    <>
        <Container maxWidth="sm" >
            <TableContainer component={Paper}>
                <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>名前</TableCell>
                    <TableCell>時間</TableCell>
                    <TableCell>場所</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((name)=>
                    <TableRow>
                    <TableCell><Link to={"/single/" + name.id}>{name.name}さん</Link></TableCell>
                    <TableCell>{name.date}</TableCell>
                    <TableCell>{name.place}</TableCell>
                    </TableRow>
                    )}
                </TableBody>
                </Table>
            </TableContainer>
        </Container>
    </>
    )
}

export default List
