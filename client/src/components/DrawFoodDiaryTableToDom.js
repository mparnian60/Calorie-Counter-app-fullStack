import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';


const TAX_RATE = 0.07;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

function priceRow(qty, unit) {
    return qty * unit;
  }

function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }

const rows = [
    createRow('Paperclips (Box)', 100, 1.15),
    createRow('Paper (Case)', 10, 45.99),
    createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 550,
        margin: 'auto',
        // maxWidth: 800,
        // marginTop: 10,
        // marginLeft: 20,
        // marginBottom: 10,
        // marginRight: 20,
    },
});



const DrawFoodDiaryTableToDom = ({ mealDetailsB, keyB, mealDetailsL, keyL, mealDetailsD, keyD, mealDetailsS, keyS }) => {

    const calTotalCalori = (mealDetails)=>{
        let total = 0;
        if(mealDetails.length){
            mealDetails.map((cal)=>{
                return total += cal.calories;   
            })
        }
        return total;
    }

    const calTotalFat = (mealDetails)=>{
        let total = 0;
        if(mealDetails.length){
            mealDetails.map((cal)=>{
                return total += cal.fat;   
            })
        }
        return total;
    }

    const calTotalCarbs = (mealDetails)=>{
        let total = 0;
        if(mealDetails.length){
            mealDetails.map((cal)=>{
                return total += cal.carbs;   
            })
        }
        return total;
    }

    const calTotalProtein = (mealDetails)=>{
        let total = 0;
        if(mealDetails.length){
            mealDetails.map((cal)=>{
                return total += cal.protein;   
            })
        }
        return total;
    }

    
    

    const classes = useStyles();

    return (
        <React.Fragment>
            <Box ml={25} mr={25}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Breakfast (100g serving)</StyledTableCell>
                            <StyledTableCell>Serving Size</StyledTableCell>
                            <StyledTableCell align="right">Calories</StyledTableCell>
                            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mealDetailsB.map((row) => (
                            <StyledTableRow keyB={keyB}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.servingSize}</StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={1}>Total</TableCell>
                            <TableCell align="center" colSpan={1}>Fat(g)</TableCell>
                            <TableCell align="center" colSpan={1}>Carbs(g)</TableCell>
                            <TableCell align="center" colSpan={1}>Prot(g)</TableCell>
                            <TableCell align="center" colSpan={1}>Kcal</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={1}></TableCell>
                            <TableCell align="center" colSpan={1}>{calTotalFat(mealDetailsB).toFixed(0)}</TableCell>
                            <TableCell align="center" colSpan={1}>{calTotalCarbs(mealDetailsB).toFixed(0)}</TableCell>
                            <TableCell align="center" colSpan={1}>{calTotalProtein(mealDetailsB).toFixed(0)}</TableCell>
                            <TableCell align="center" colSpan={1}>{calTotalCalori(mealDetailsB).toFixed(0)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Lunch (100g serving)</StyledTableCell>
                            <StyledTableCell>Serving Size</StyledTableCell>
                            <StyledTableCell align="right">Calories</StyledTableCell>
                            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mealDetailsL.map((row) => (
                            <StyledTableRow keyL={keyL}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.servingSize}</StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={1}>Total</TableCell>
                            <TableCell align="center" colSpan={1}>Fat(g)</TableCell>
                            <TableCell align="center" colSpan={1}>Carbs(g)</TableCell>
                            <TableCell align="center" colSpan={1}>Prot(g)</TableCell>
                            <TableCell align="center" colSpan={1}>Kcal</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={1}></TableCell>
                            <TableCell align="center" colSpan={1}>{calTotalFat(mealDetailsL).toFixed(0)}</TableCell>
                            <TableCell align="center" colSpan={1}>{calTotalCarbs(mealDetailsL).toFixed(0)}</TableCell>
                            <TableCell align="center" colSpan={1}>{calTotalProtein(mealDetailsL).toFixed(0)}</TableCell>
                            <TableCell align="center" colSpan={1}>{calTotalCalori(mealDetailsL).toFixed(0)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Dinner (100g serving)</StyledTableCell>
                            <StyledTableCell>Serving Size</StyledTableCell>
                            <StyledTableCell align="right">Calories</StyledTableCell>
                            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mealDetailsD.map((row) => (
                            <StyledTableRow keyD={keyD}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.servingSize}</StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={1}>Total</TableCell>
                            <TableCell align="center" colSpan={1}>Fat(g)</TableCell>
                            <TableCell align="center" colSpan={1}>Carbs(g)</TableCell>
                            <TableCell align="center" colSpan={1}>Prot(g)</TableCell>
                            <TableCell align="center" colSpan={1}>Kcal</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={1}></TableCell>
                            <TableCell align="center" colSpan={1}>{calTotalFat(mealDetailsD).toFixed(0)}</TableCell>
                            <TableCell align="center" colSpan={1}>{calTotalCarbs(mealDetailsD).toFixed(0)}</TableCell>
                            <TableCell align="center" colSpan={1}>{calTotalProtein(mealDetailsD).toFixed(0)}</TableCell>
                            <TableCell align="center" colSpan={1}>{calTotalCalori(mealDetailsD).toFixed(0)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Snack (100g serving)</StyledTableCell>
                            <StyledTableCell>Serving Size</StyledTableCell>
                            <StyledTableCell align="right">Calories</StyledTableCell>
                            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mealDetailsS.map((row) => (
                            <StyledTableRow keyS={keyS}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.servingSize}</StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={1}>Total</TableCell>
                            <TableCell align="center" colSpan={1}>Fat(g)</TableCell>
                            <TableCell align="center" colSpan={1}>Carbs(g)</TableCell>
                            <TableCell align="center" colSpan={1}>Prot(g)</TableCell>
                            <TableCell align="center" colSpan={1}>Kcal</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={1}></TableCell>
                            <TableCell align="center" colSpan={1}>{calTotalFat(mealDetailsS).toFixed(0)}</TableCell>
                            <TableCell align="center" colSpan={1}>{calTotalCarbs(mealDetailsS).toFixed(0)}</TableCell>
                            <TableCell align="center" colSpan={1}>{calTotalProtein(mealDetailsS).toFixed(0)}</TableCell>
                            <TableCell align="center" colSpan={1}>{calTotalCalori(mealDetailsS).toFixed(0)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            </Box>
        </React.Fragment>
    );
}

export default DrawFoodDiaryTableToDom;