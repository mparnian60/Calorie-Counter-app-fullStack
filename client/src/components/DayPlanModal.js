import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import splitFoodDesc from '../utils/splitFoodDesc';
import DayPlanForm from './DayPlanForm';

const DayPlanModal = (props) => {
    console.log('modal props', props);
    // console.log('modal props', props.foodDetails.foodDetails.food_name);
    const {
        className
    } = props;
    // const [modal, setModal] = useState(false);
    
  

    const toggle = () => props.setShowModal(!props.showModal);

    return (
            <Modal isOpen={props.showModal} toggle={toggle} className={className} >
                <ModalHeader toggle={toggle}>
                    <h3>Nutrition Facts</h3>
                    {props.foodDetails.food_name}
                </ModalHeader>
                <ModalBody>
                    <DayPlanForm />
                    <h6>Food Description per 100g: {splitFoodDesc(props.foodDetails.food_description).map((details) => {
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