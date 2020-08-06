import React from 'react';
import DayPlanForm from './DayPlanForm';

function CreateDayPlan() {

    const [submitMsg, setSubmitMsg] = useState({ msg: "", state: false });
    const [redirectHome, setRedirectHome] = useState(false);

    const DayPlanHandler = async (plan) => {
        //submit movie to backend
        try {
            const data = await createDayPlan(plan);
            console.log(data);
            setSubmitMsg({ msg: 'Selected food added, add another?', state: true });
        } catch (e) {
            console.log(e);
            setSubmitMsg({ msg: "Something went wrong, please try again!", state: false });
        }

    };

    return (
        <React.Fragment>
            <DayPlanForm submitHandler={DayPlanHandler} />
            <FormCompleteMsg submitMsg={submitMsg} setRedirectHome={setRedirectHome} redirectHome={redirectHome}/>
        </React.Fragment>

    )
}

export default CreateDayPlan;