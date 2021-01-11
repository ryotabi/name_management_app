import React,{useState,useEffect} from 'react'
import {auth} from './firebase'
import styles from './Single.module.css'
import Container from '@material-ui/core/Container';
import FormController from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Login = (props)=>{
    const [isLogin,setIsLogin] = useState(true)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    useEffect(() => {
        const unSub = auth.onAuthStateChanged((user)=>{
            user && props.history.push('/');
        })
        return ()=>unSub()
    },[props.history])
    const style = {
        margin:30,
    }
return(
    <>
    <Container className={styles.text_center}>
        <h2>{isLogin ? 'ログイン':'新規登録'}</h2>
        <FormController>
            <TextField
                        InputLabelProps={{
                            shrink:true,
                        }}
                        label="email"
                        name='email'
                        style={style}
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                    />
        </FormController>
        <FormController>
            <TextField
                            InputLabelProps={{
                                shrink:true,
                            }}
                            label="password"
                            type="password"
                            name='password'
                            style={style}
                            value={password}
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                        />
        </FormController>
        <Button variant="contained" color="primary" style={style} onClick={
            isLogin ? async()=>{
                try{
                    await auth.signInWithEmailAndPassword(email,password)
                    props.history.push('/')
                }catch(error){
                    alert(error.message)
                }
            }:async()=>{
                try{
                    await auth.createUserWithEmailAndPassword(email,password)
                    props.history.push('/')
                }catch(error){
                    alert(error.message)
                }
            }
        } >
            {isLogin ? 'ログイン':'新規登録'}
        </Button>
        <Typography align='center'>
            <span onClick={()=>{setIsLogin(!isLogin)}}
            >
            {isLogin ? '新規登録へ':'ログインへ'}
            </span>
        </Typography>
    </Container>
    </>
)
}

export default Login