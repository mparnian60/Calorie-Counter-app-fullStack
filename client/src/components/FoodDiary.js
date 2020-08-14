import React, { useState, useEffect } from 'react';
import FoodDiaryTable from './FoodDiaryTable';

//Import for material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import { getDayPlanAPI } from '../api/dayPlanAPI';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft:50,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const FoodDiary = (props) => {
    

    const changeISOformat = moment().format('YYYY-MM-DD');
    const [date, setDate] = useState(changeISOformat);
    const [error,setError] = useState(false);
    const [dayPlanResult, setDayPlanResult] =useState([]);

    const classes = useStyles();

    const handleDate = e => {
        e.preventDefault();
        let value = e.target.value;
        setDate(value);
    }

    // const getDayPlanFromAPI = ()=>{
    //     if(date) {
    //     getDayPlanAPI(date).then((result) =>{
    //         // console.log('result', result);
    //         setDayPlanResult(result);
    //         if(result.length<1){
    //             setError(true);
    //         }else{
    //             setError(false);
    //         }
    //     })
    //     }
    // }

    // console.log('dayPlanResult', dayPlanResult);

    useEffect(()=>{
        if(date) {
            // console.log('date',date);
            getDayPlanAPI(date).then((result) =>{
                // console.log('result', result);
                setDayPlanResult(result);
                if(result.length<1){
                    setError(true);
                }else{
                    setError(false);
                }
            })
            }
    },[date])
    
    
    const renderError = () =>{
        return(
            <Alert severity="error">There is no Food Diary for the chosen date, please choose another date</Alert>
        )
    }

    return (
        <>
        <h2>My Food Diary</h2>
            <div className={classes.container}>
                <TextField
                    id="date"
                    label="Choose Date"
                    type="date"
                    value={date}
                    onChange={handleDate}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
             {error ? renderError() : <FoodDiaryTable dayPlanResult={dayPlanResult}/>}
        </>
    )
}

export default FoodDiary;

