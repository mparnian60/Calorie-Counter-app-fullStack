import React, { useState } from 'react';
import { Input, Label, Form, FormGroup } from 'reactstrap';
import createDayPlanAPI from '../api/dayPlanAPI';

const DayPlanForm = (props) => {
    // console.log('dayplanform props',props);

    

        
    }

    return (
        <Form onSubmit={handleFormSubmit}>
            <FormGroup className="mx-2" check>
                <Label for="backdrop">Choose your meal</Label>{' '}
                <Label check></Label><br />
                <Input type="checkbox" checked={breakfastCheck} onChange={chooseBreakfast} /> Breakfast
                        <Label check></Label><br />
                <Input type="checkbox" checked={lunchCheck} onChange={chooseLunch} /> Lunch
                        <Label check></Label><br />
                <Input type="checkbox" checked={dinnerChcek} onChange={chooseDinner} /> Dinner
                        <Label check></Label><br />
                <Input type="checkbox" checked={snackChcek} onChange={chooseSnack} /> Snack/Other

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
        </Form>
    )
}

export default DayPlanForm;

