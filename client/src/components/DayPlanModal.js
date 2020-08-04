import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

const DayPlanModal = (props) => {
    console.log('modal props', props);
    // console.log('modal props', props.foodDetails.foodDetails.food_name);
    const {
        buttonLabel,
        className
    } = props;
    // const [modal, setModal] = useState(false);
    const [backdrop, setBackdrop] = useState(true);



    const toggle = () => props.setShowModal(!props.showModal);

    const changeBackdrop = e => {
        let value = e.target.value;
        if (value !== 'static') {
            value = JSON.parse(value);
        }
        setBackdrop(value);
    }

    // const splitFoodDetails = () => {

    //     const deatils = props.foodDetails.foodDetails.food_description.split("|").map((details) => {
    //         return (
    //             <h6>{details}</h6>
    //         )
    //     });


    // }

    return (
            <Modal isOpen={props.showModal} toggle={toggle} className={className} backdrop={backdrop}>
                <ModalHeader toggle={toggle}>
                    <h3>Nutrition Facts</h3>
                    {props.foodDetails.food_name}
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="backdrop">Choose your meal</Label>{' '}
                        <Input type="select" name="backdrop" id="backdrop" onChange={changeBackdrop}>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="snackOther">Snack/Other</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="backdrop">Date</Label>{' '}
                        <Input type="date" name="date" id="backdrop" onChange={changeBackdrop}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="backdrop">Serving size</Label>{' '}
                        <Input type="number" name="servingSize" id="backdrop" onChange={changeBackdrop}>
                        </Input>
                    </FormGroup>
                    <h6>Food Description per 100g: {props.foodDetails.food_description.split(/[|-]/).map((details) => {
                        return (
                            <h6>{details}</h6>
                        )
                    })}</h6>
                    <h6>Food Type: {props.foodDetails.food_type}</h6>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
    );
}

export default DayPlanModal;