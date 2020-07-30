import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export function Login() {


    return (
        <React.Fragment>
            <Form>
                <FormGroup>
                    <Label for="username">Usename</Label>
                    <Input type="text" name="username" id="username" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="Password" placeholder="Password" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </React.Fragment>
    )
} 
