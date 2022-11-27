import { Grid, TextField, Button  } from "@mui/material";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config.js'
import { useNavigate } from "react-router-dom";
import { Typography } from '@mui/material';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, pwd)
            console.log(user)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user != null)
                navigate('/auth');
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
                    onClick={register}
                    sx = {{ minWidth: "400px", minHeight: "60px" }}
                >
                    Register
                </Button>
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="outlined"
                    onClick={() => navigate('/')}
                    sx = {{ minWidth: "400px", minHeight: "60px" }}
                >
                    If already signed up, log in
                </Button>
            </Grid>
        </Grid>
    )
}

export default Register
