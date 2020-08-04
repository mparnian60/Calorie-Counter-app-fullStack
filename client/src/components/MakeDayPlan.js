import React, {useState} from 'react';
import DayPlanModal from './DayPlanModal';

const MakeDayPlan = (props) => {
   
    return (
        <div>
            <DayPlanModal foodDetails={props.foodDetails} showModal={props.showModal} setShowModal={props.setShowModal}/>
        </div>
    );
}

export default MakeDayPlan;