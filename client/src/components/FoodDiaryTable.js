import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getFoodDetails} from '../api/foodDetailsAPI'


const useStyles = makeStyles({
    table: {
        minWidth: 650,
        maxWidth: 1000,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
//having {dayPlanResult} with curley bracket is the shortcut of having props in prantesis & have // const {dayPlanResult} = props;
//if we have more props coming to this function we can separate them with comma
const FoodDiaryTable = ({ dayPlanResult }) => {
    console.log('fooddairytable props', dayPlanResult);

    //shortcut of having props.dayPlanResult is to have props at the top and have below variable
    // const {dayPlanResult} = props;

    const classes = useStyles();

    const findBreakfastMeal = async() =>{

        // const foodDeatisl =  await getFoodDetails(dayPlanResult[0].meal.breakfast[0].foodId);
        // console.log('foodDetails', foodDeatisl);

        dayPlanResult.length && dayPlanResult[0].meal.breakfast.map((meal) => {
            console.log('meal', meal.foodId);
           
        })
    }
    findBreakfastMeal();

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Breakfast (100g serving)</TableCell>
                            <TableCell align="right">Calories&nbsp;(kcal)</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}





export default FoodDiaryTable;


