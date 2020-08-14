import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getFoodDetailsAPI } from '../api/foodDetailsAPI'
import DrawFoodDiaryTableToDom from './DrawFoodDiaryTableToDom';


const useStyles = makeStyles({
    table: {
        minWidth: 450,
        maxWidth: 600,
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 10,
        marginRight: 20,


    },
});


//having {dayPlanResult} with curley bracket is the shortcut of having props in prantesis & have // const {dayPlanResult} = props;
//if we have more props coming to this function we can separate them with comma
const FoodDiaryTable = ({ dayPlanResult }) => {
    // console.log('fooddairytable props', dayPlanResult);

    //shortcut of having props.dayPlanResult is to have props at the top and have below variable
    // const {dayPlanResult} = props;

    const classes = useStyles();

    const [mealDetailsB, setMealDetailsB] = useState([]);
    const [mealDetailsL, setMealDetailsL] = useState([]);
    const [mealDetailsD, setMealDetailsD] = useState([]);
    const [mealDetailsS, setMealDetailsS] = useState([]);


    useEffect(() => {
        if(!dayPlanResult.length){
            setMealDetailsB([]);
            setMealDetailsL([]);
            setMealDetailsD([]);
            setMealDetailsS([]);
        }
        if (dayPlanResult.length) {
            findBreakfastMeal(dayPlanResult[0]).then((mealDetailsB) => {
                // console.log('mealDetailsB', mealDetailsB);
                if (mealDetailsB.length) {
                    setMealDetailsB(mealDetailsB)
                }
            });
       
            findLunchMeal(dayPlanResult[0]).then((mealDetails) => {
                // console.log('mealDetailsL', mealDetails);
                if (mealDetails.length) {
                    setMealDetailsL(mealDetails)
                }
            });
       
            findDinnerMeal(dayPlanResult[0]).then((mealDetails) => {
                // console.log('mealDetailsD', mealDetails);
                if (mealDetails.length) {
                    setMealDetailsD(mealDetails)
                }
            });
    
            findSnackMeal(dayPlanResult[0]).then((mealDetails) => {
                // console.log('mealDetailsS', mealDetails);
                if (mealDetails.length) {
                    setMealDetailsS(mealDetails)
                }
            });
        }

    }, [dayPlanResult])

    // dayPlanResult.meal.breakfast[0].foodId

    const findBreakfastMeal = async (dayPlan) => {

        return Promise.all(
            dayPlan.meal.breakfast.map(async (meal) => {
                // console.log('meal', meal);
                const result = await getFoodDetailsAPI(meal.foodId)
                // console.log('result breakfast', result);
                //think about if there is no result
                return ({
                    name: result[0].food_name,
                    servingSize: meal.servingSize,
                    calories: result[0].calories,
                    fat: result[0].fat,
                    carbs: result[0].carbs,
                    protein: result[0].protein
                });
            }),
        )

    }

    const findLunchMeal = async (dayPlan) => {

        return Promise.all(
            dayPlan.meal.lunch.map(async (meal) => {
                // console.log('meal', meal);
                const result = await getFoodDetailsAPI(meal.foodId)
                // console.log('result', result);
                //think about if there is no result
                return ({
                    name: result[0].food_name,
                    servingSize: meal.servingSize,
                    calories: result[0].calories,
                    fat: result[0].fat,
                    carbs: result[0].carbs,
                    protein: result[0].protein
                });
            })
        )

    }

    const findDinnerMeal = async (dayPlan) => {

        return Promise.all(
            dayPlan.meal.dinner.map(async (meal) => {
                // console.log('meal', meal);
                const result = await getFoodDetailsAPI(meal.foodId)
                // console.log('result', result);
                //think about if there is no result
                return ({
                    name: result[0].food_name,
                    servingSize: meal.servingSize,
                    calories: result[0].calories,
                    fat: result[0].fat,
                    carbs: result[0].carbs,
                    protein: result[0].protein
                });
            })
        )

    }

    const findSnackMeal = async (dayPlan) => {

        return Promise.all(
            dayPlan.meal.snack.map(async (meal) => {
                // console.log('meal', meal.servingSize);
                const result = await getFoodDetailsAPI(meal.foodId)
                // console.log('result', result);
                //think about if there is no result
                return ({
                    name: result[0].food_name,
                    servingSize: meal.servingSize,
                    calories: result[0].calories,
                    fat: result[0].fat,
                    carbs: result[0].carbs,
                    protein: result[0].protein
                });
            })
        )

    }

    return (

        <DrawFoodDiaryTableToDom
            mealDetailsB={mealDetailsB} 
            mealDetailsL={mealDetailsL} 
            mealDetailsD={mealDetailsD} 
            mealDetailsS={mealDetailsS} 
        />
    )
}


export default FoodDiaryTable;


