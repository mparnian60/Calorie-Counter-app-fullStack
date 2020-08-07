import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import splitFoodDesc from '../utils/splitFoodDesc';
import createDayPlanAPI from '../api/dayPlanAPI';
import DayPlanForm from './DayPlanForm';

let dayPlanFormValue = {
    date:"",
    meal: {
        breakfast: 0,
        lunch: 0,
        dinner: 0,
        snack: 0
    }
};

const DayPlanModal = (props) => {

    const toggle = () => props.setShowModal(!props.showModal);


    const onChangeDayPlanFormValue = (dayPlanData) =>{
        dayPlanFormValue = dayPlanData;
       console.log('dayplandata', dayPlanData);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('e', e);

        createDayPlanAPI({
            userId: localStorage.getItem('userId'),
            date: dayPlanFormValue.date,
            meal: {
                breakfast: [{ foodId: props.foodDetails.food_id, servingSize: dayPlanFormValue.meal.breakfast }],
                lunch: [{ foodId: props.foodDetails.food_id, servingSize: dayPlanFormValue.meal.lunch }],
                dinner: [{ foodId: props.foodDetails.food_id, servingSize: dayPlanFormValue.meal.dinner }],
                snack: [{ foodId: props.foodDetails.food_id, servingSize: dayPlanFormValue.meal.snack }]
            }

        }).then(() => {
            console.log('food added');
            toggle();
        }).catch(e => {
            console.log(e);
        });
    }



        
        return (
            <Form>
                <Modal isOpen={props.showModal} toggle={toggle} >
                    <ModalHeader toggle={toggle}>
                        <h3>Nutrition Facts</h3>
                        {props.foodDetails.food_name}
                    </ModalHeader>
                    <ModalBody>
                      
                        <DayPlanForm foodId = {props.foodDetails.food_id} onChangeDayPlanFormValue={onChangeDayPlanFormValue} />
                        <h6>Food Description per 100g: {splitFoodDesc(props.foodDetails.food_description).map((details) => {
                            return (
                                <h6>{details}</h6>
                            )
                        })}</h6>
                        <h6>Food Type: {props.foodDetails.food_type}</h6>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary"  onClick={handleFormSubmit}>Save</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Form>

        );
    }

    export default DayPlanModal;