import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import MakeDayPlan from './MakeDayPlan';

const DrawFoodResultToDom = (props) => {

        return (
            <div key={props.foodDetails.food_id}>
                <ListGroup>
                    <ListGroupItem tag="a" href="#">{props.foodDetails.food_name}</ListGroupItem>
                    <ListGroupItem>{props.foodDetails.food_description}</ListGroupItem>
                </ListGroup>
                <MakeDayPlan />
            </div>
        );
    };

export default DrawFoodResultToDom;