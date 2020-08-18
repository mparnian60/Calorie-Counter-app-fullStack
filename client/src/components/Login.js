import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { loginAPI } from '../api/userAPI';
import jwt from 'jwt-decode';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
           
        },
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export function Login(props) {
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    let history = useHistory();
    let location = useLocation();

    // let { from } = location.state || { from: { pathname: "/" } };
    // let login = () => {
    //   fakeAuth.authenticate(() => {
    //     history.replace(from);
    //   });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();

        loginAPI({
            username: username,
            password: password
        }).then((token) => {
            // console.log(token);
            const decoded = jwt(token);
            // console.log(decoded);

            //save token in local storage
            localStorage.setItem('token', token);
            localStorage.setItem('userId', decoded.id);

            props.loginStatus(true);

            history.push('/');

        }).catch(e => {
            console.log(e);
            //do something to tell user it failed
        })

    }

    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit}>
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
                </div>
                <Button variant="contained" color="primary">
                    Submit
                </Button>
                </form>
            </Form>
        </React.Fragment>
    )
}


