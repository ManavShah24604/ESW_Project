import { Grid, TextField, Button  } from "@mui/material";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config.js'
import { useNavigate } from "react-router-dom";
import { Typography } from '@mui/material';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, pwd)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user != null)
                navigate('/auth');
            else
                navigate('/');
        })
    }, [])

    return (
        <Grid container align={"center"} spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='h3'>DC MOTORS: REMOTE LABS</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={val => setEmail(val.target.value)}
                    sx = {{ minWidth: "400px", minHeight: "60px" }}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={pwd}
                    onChange={val => setPwd(val.target.value)}
                    sx = {{ minWidth: "400px", minHeight: "60px" }}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    onClick={login}
                    sx = {{ minWidth: "400px", minHeight: "60px" }}
                >
                    Login
                </Button>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="outlined"
                    onClick={() => navigate('/register')}
                    sx = {{ minWidth: "400px", minHeight: "60px" }}
                >
                    Did not register, sign up
                </Button>
            </Grid>
        </Grid>
    )
}

export default Login
