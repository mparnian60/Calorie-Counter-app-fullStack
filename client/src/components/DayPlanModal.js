import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import splitFoodDesc from '../utils/splitFoodDesc';
import createDayPlanAPI from '../api/dayPlanAPI';


const DayPlanModal = (props) => {
    // console.log('modal props', props);
    // console.log('modal props', props.foodDetails.foodDetails.food_name);

    const [breakfast, setBreakfast] = useState('');
    const [lunch, setLunch] = useState('');
    const [dinner, setDinner] = useState('');
    const [snack, setSnack] = useState('');
    const [date, setDate] = useState("");
    const [servingSize, setServingSize] = useState("");
    const [breakfastCheck, setBreakfastCheck] = useState(false);
    const [lunchCheck, setLunchChcek] = useState(false);
    const [dinnerChcek, setDinnerCheck] = useState(false);
    const [snackChcek, setSnackCheck] = useState(false);

    const handleDate = e => {
        let value = e.target.value;
        setDate(value);
    }

    const handleServingSize = (e) => {
        setServingSize(e.target.value);
    }


    const chooseBreakfast = () => {
        setBreakfastCheck(!breakfastCheck);
        setBreakfast(props.foodDetails.food_id);
        
    }

    const chooseLunch = () => {
        setLunchChcek(!lunchCheck);
        setLunch(props.foodDetails.food_id);
        
    }

    const chooseDinner = () => {
        //we can write in both below options
        // setDinnerCheck(e.currentTarget.checked);
        setDinnerCheck(!dinnerChcek);
        setDinner(props.foodDetails.food_id);
        
    }

    const chooseSnack = () => {
        setSnackCheck(!snackChcek);
        setSnack(props.foodDetails.food_id);
        
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('e', e);

        createDayPlanAPI({
            userId: localStorage.getItem('userId'),
            date: date,
            meal: {
                breakfast: [{ foodId: breakfast, servingSize: servingSize }],
                lunch: [{ foodId: lunch, servingSize: servingSize }],
                dinner: [{ foodId: dinner, servingSize: servingSize }],
                snack: [{ foodId: snack, servingSize: servingSize }]
            }

        }).then(() => {
            console.log('food added');
        }).catch(e => {
            console.log(e);
        });
    }



        const toggle = () => props.setShowModal(!props.showModal);

        return (
            <Form>
                <Modal isOpen={props.showModal} toggle={toggle} >
                    <ModalHeader toggle={toggle}>
                        <h3>Nutrition Facts</h3>
                        {props.foodDetails.food_name}
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup className="mx-2" check>
                            <Label for="backdrop">Choose your meal</Label>{' '}

                            <Label check></Label><br />
                            <Input type="checkbox" checked={breakfastCheck} onChange={chooseBreakfast} /> Breakfast
                            <Label >Serving size</Label>
                            <Input type="number" name="servingSize" id="servingSize" onChange={handleServingSize} />
        
                           
                            <Label check></Label><br />
                            <Input type="checkbox" checked={lunchCheck} onChange={chooseLunch} /> Lunch
                            <Label >Serving size</Label>
                            <Input type="number" name="servingSize" id="servingSize" onChange={handleServingSize} />

                            <Label check></Label><br />
                            <Input type="checkbox" checked={dinnerChcek} onChange={chooseDinner} /> Dinner
                            <Label >Serving size</Label>
                            <Input type="number" name="servingSize" id="servingSize" onChange={handleServingSize} />

                            <Label check></Label><br />
                            <Input type="checkbox" checked={snackChcek} onChange={chooseSnack} /> Snack/Other
                            <Label >Serving size</Label>
                            <Input type="number" name="servingSize" id="servingSize" onChange={handleServingSize} />

                    </FormGroup>
                        {' '}
                        <FormGroup>
                            <Label for="backdrop">Date</Label>{' '}
                            <Input type="date" name="date" id="backdrop" onChange={handleDate}>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="backdrop">Serving size</Label>{' '}
                            <Input type="number" name="servingSize" id="backdrop" onChange={handleServingSize}>
                            </Input>
                        </FormGroup>
                        <h6>Food Description per 100g: {splitFoodDesc(props.foodDetails.food_description).map((details) => {
                            return (
                                <h6>{details}</h6>
                            )
                        })}</h6>
                        <h6>Food Type: {props.foodDetails.food_type}</h6>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle} onClick={handleFormSubmit}>Save</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Form>

        );
    }

    export default DayPlanModal;