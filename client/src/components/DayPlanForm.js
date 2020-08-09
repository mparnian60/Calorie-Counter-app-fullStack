import React, { useState, useEffect } from 'react';
import { Input, Label, Form, FormGroup } from 'reactstrap';
import createDayPlanAPI from '../api/dayPlanAPI';

const DayPlanForm = (props) => {
    // console.log('dayplanform props',props);

    const [servingSize, setServingsize] = useState({
        breakfast: 0,
        lunch: 0,
        dinner: 0,
        snack: 0
    });
    const [date, setDate] = useState("");


    const handleDate = e => {
        let value = e.target.value;
        setDate(value);
    }

    //for having couple of variable in one state, we need to use the spread function (...) to make a new object
    //react always like to keep the previous and have the new and always compare them togeteher
    const onChange = (e) => {
        const newServingSizes = { ...servingSize }
        newServingSizes[e.target.name] = e.target.value
        setServingsize(newServingSizes);
    }

    //now we capture everytime state changes and as setStae is a asynchronous function, if we don't put it in a useeffect, 
    //onChangeDayPlanFormValue get called before change state get captured
    useEffect(() => {
        props.onChangeDayPlanFormValue({
            date: date,
            meal: servingSize
        })
    })



    return (
        <Form>
            <FormGroup className="mx-2" check>
                <Label for="backdrop">Choose your meal by adding the Serving Size</Label>{' '}
                <FormGroup>
                    <Label >Breakfast</Label>
                    <Input type="number" name="breakfast" value={servingSize.breakfast} onChange={onChange} />
                </FormGroup>

                <FormGroup>
                <Label >Lunch</Label>
                <Input type="number" name="lunch" value={servingSize.lunch} onChange={onChange} />
                </FormGroup>

                <FormGroup>
                <Label >Dinner</Label>
                <Input type="number" name="dinner" value={servingSize.dinner} onChange={onChange} />
                </FormGroup>

                <FormGroup>
                <Label >Snack/Other</Label>
                <Input type="number" name="snack" value={servingSize.snack} onChange={onChange} />
                </FormGroup>

            </FormGroup>
            {' '}
            <FormGroup>
                <Label for="backdrop">Date</Label>{' '}
                <Input type="date" name="date" id="backdrop" onChange={handleDate}>
                </Input>
            </FormGroup>
            {/* <FormGroup>
                <Label for="backdrop">Serving size</Label>{' '}
                <Input type="number" name="servingSize" id="backdrop" onChange={handleServingSize}>
                </Input>
            </FormGroup> */}
        </Form>
    )
}

export default DayPlanForm;

