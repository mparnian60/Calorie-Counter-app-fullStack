import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from 'reactstrap';
import Button from '@material-ui/core/Button';
import { sortedLastIndex } from 'lodash';
import { signUpAPI } from '../api/userAPI'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        '& > *': {
            margin: theme.spacing(1),
        },
        '& .makeStyles-root-5 > *': {
            width: '5ch',
            height: '350px',

        }
    },
}));

const SignUp = () => {
    const classes = useStyles();

    let history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [startWeight, setStartWeight] = useState("");

    const handleClick = () => {

        signUpAPI({
            username: username,
            password: password,
            startWeight: startWeight
        }).then(() => {

            history.push('/login');

        }).catch(e => {
            console.log(e);
            //do something to tell user it failed
        })
    }


    return (
        <form className={classes.root} noValidate autoComplete="off" >
            <div className={classes.signup}>
                <TextField
                    onChange={(e) => setUsername(e.currentTarget.value)}
                    required
                    id="filled-required"
                    label="username"
                    Value={username}
                    variant="filled"
                />
                <TextField
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    id="filled-required"
                    label="Password"
                    Value={password}
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                />
                <TextField
                    onChange={(e) => setStartWeight(e.currentTarget.value)}
                    id="filled-number"
                    label="Start Weight"
                    type="startWeight"
                    Value={startWeight}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="filled"
                />
            </div>
            <Button variant="contained" color="primary" onClick={handleClick}>
                Submit
            </Button>
        </form>
    );
}

export default SignUp;



