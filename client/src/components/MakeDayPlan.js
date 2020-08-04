import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';

const MakeDayPlan = (props) => {
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  

  const toggle = () => setModal(!modal);

  const changeBackdrop = e => {
    let value = e.target.value;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    setBackdrop(value);
  }

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      </Form>
      <Modal isOpen={modal} toggle={toggle} className={className} backdrop={backdrop}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
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
          <Input type="date" name="backdrop" id="backdrop" onChange={changeBackdrop}>
          </Input>
        </FormGroup>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MakeDayPlan;