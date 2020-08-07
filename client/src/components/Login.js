import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {loginAPI} from '../api/userAPI';
import jwt from 'jwt-decode';


export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };

export function Login() {

    const [username, setUsername] =useState('');
    const [password, setPassword] =useState('');


        let history = useHistory();
        let location = useLocation();
      
        // let { from } = location.state || { from: { pathname: "/" } };
        // let login = () => {
        //   fakeAuth.authenticate(() => {
        //     history.replace(from);
        //   });
        // };

    const handleSubmit = (e) =>{
        e.preventDefault();

        loginAPI({
            username: username,
            password: password
        }).then((token)=>{
            // console.log(token);
            const decoded = jwt(token);
            // console.log(decoded);

            //save token in local storage
            localStorage.setItem('token', token);
            localStorage.setItem('userId', decoded.id);

        }).catch(e => {
            console.log(e);
            //do something to tell user it failed
        })

    }

    return (
        <React.Fragment>
            <Form onSubmit= {handleSubmit}>
                <FormGroup>
                    <Label for="username">Usename</Label>
                    <Input type="text" name="username"  id="username" placeholder="Username" 
                    onChange={(e) => setUsername(e.currentTarget.value)}
                    value={username}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Password" 
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    value={password}
                    />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </React.Fragment>
    )
} 

