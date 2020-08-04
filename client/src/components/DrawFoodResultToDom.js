import React, {useState} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import MakeDayPlan from './MakeDayPlan';
import DayPlanModal from './DayPlanModal';

const DrawFoodResultToDom = (props) => {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () =>{
        setShowModal(true);
        //redirect to FoodDiary route
       
        console.log('link clicked');
        
    }

        return (
            <div key={props.foodDetails.food_id}>
                <ListGroup>
                    <ListGroupItem tag="a" href="#" onClick={handleClick}>{props.foodDetails.food_name}</ListGroupItem>
                    <ListGroupItem>{props.foodDetails.food_description}</ListGroupItem>
                </ListGroup>
                <DayPlanModal foodDetails={props.foodDetails} showModal={showModal} setShowModal={setShowModal}/>
            </div>
        );
    };

export default DrawFoodResultToDom;