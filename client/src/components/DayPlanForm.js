import React, {useState} from 'react';
import { Input, Label, Form, FormGroup } from 'reactstrap';

const DayPlanForm = (props) =>{

    const [food, setFood] = useState([]);
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

    const handleServingSize = (e) =>{
        setServingSize(e.target.value);
    }


    const chooseBreakfast = e => {
        setBreakfastCheck(!breakfastCheck);
      }

      const chooseLunch = e => {
        setLunchChcek(!lunchCheck);
      }

      const chooseDinner = e => {
          //we can write in both below options
        // setDinnerCheck(e.currentTarget.checked);
        setDinnerCheck(!dinnerChcek);
      }

      const chooseSnack = e => {
        setSnackCheck(!snackChcek);
      }

      if(breakfastCheck) {
          setFood()
      }

      const handleSubmit = (e) =>{
          e.preventDefault();

          props.submitHandler({
              userId:'',
              date: date,
              
          })
          
      }

    return(
        <Form onSubmit={handleSubmit}>
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

