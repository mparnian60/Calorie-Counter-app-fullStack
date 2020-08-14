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
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



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

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    table: {
        minWidth: 550,
        margin: 'auto',
        // maxWidth: 800,
        // marginTop: 10,
        // marginLeft: 20,
        // marginBottom: 10,
        // marginRight: 20,
    },
}));


const DrawFoodDiaryTableToDom = ({ mealDetailsB, mealDetailsL, mealDetailsD, mealDetailsS }) => {

    const calTotalCalori = (mealDetails) => {
        let total = 0;
        if (mealDetails.length) {
            mealDetails.map((cal) => {
                return total += ((cal.calories)*(cal.servingSize));
            })
        }
        return total;
    }

    const calTotalFat = (mealDetails) => {
        let total = 0;
        if (mealDetails.length) {
            mealDetails.map((cal) => {
                return total += ((cal.fat)*(cal.servingSize));
            })
        }
        return total;
    }

    const calTotalCarbs = (mealDetails) => {
        let total = 0;
        if (mealDetails.length) {
            mealDetails.map((cal) => {
                return total += ((cal.carbs)*(cal.servingSize));
            })
        }
        return total;
    }

    const calTotalProtein = (mealDetails) => {
        let total = 0;
        if (mealDetails.length) {
            mealDetails.map((cal) => {
                return total += ((cal.protein)*(cal.servingSize));
            })
        }
        return total;
    }




    const classes = useStyles();

    return (
        <React.Fragment>
            <Box ml={15} mr={15}>
                {mealDetailsB.length >0 &&
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell></StyledTableCell>
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
                                    <StyledTableRow key={row._id}>
                                        <IconButton aria-label="delete" className={classes.margin}>
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
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
                                    <TableCell align="center" colSpan={1}>{calTotalFat(mealDetailsB).toFixed(2)}</TableCell>
                                    <TableCell align="center" colSpan={1}>{calTotalCarbs(mealDetailsB).toFixed(2)}</TableCell>
                                    <TableCell align="center" colSpan={1}>{calTotalProtein(mealDetailsB).toFixed(2)}</TableCell>
                                    <TableCell align="center" colSpan={1}>{calTotalCalori(mealDetailsB).toFixed(0)}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
                {mealDetailsL.length >0 &&
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
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
                                <StyledTableRow key={row._id}>
                                    <IconButton aria-label="delete" className={classes.margin}>
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
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
                                <TableCell align="center" colSpan={1}>{calTotalFat(mealDetailsL).toFixed(2)}</TableCell>
                                <TableCell align="center" colSpan={1}>{calTotalCarbs(mealDetailsL).toFixed(2)}</TableCell>
                                <TableCell align="center" colSpan={1}>{calTotalProtein(mealDetailsL).toFixed(2)}</TableCell>
                                <TableCell align="center" colSpan={1}>{calTotalCalori(mealDetailsL).toFixed(0)}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                }
                {mealDetailsD.length >0 &&
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
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
                                <StyledTableRow key={row._id}>
                                    <IconButton aria-label="delete" className={classes.margin}>
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
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
                                <TableCell align="center" colSpan={1}>{calTotalFat(mealDetailsD).toFixed(2)}</TableCell>
                                <TableCell align="center" colSpan={1}>{calTotalCarbs(mealDetailsD).toFixed(2)}</TableCell>
                                <TableCell align="center" colSpan={1}>{calTotalProtein(mealDetailsD).toFixed(2)}</TableCell>
                                <TableCell align="center" colSpan={1}>{calTotalCalori(mealDetailsD).toFixed(0)}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                }
                {mealDetailsS.length >0 &&
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell></StyledTableCell>
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
                                <StyledTableRow key={row._id}>
                                    <IconButton aria-label="delete" className={classes.margin}>
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
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
                                <TableCell align="center" colSpan={1}>{calTotalFat(mealDetailsS).toFixed(2)}</TableCell>
                                <TableCell align="center" colSpan={1}>{calTotalCarbs(mealDetailsS).toFixed(2)}</TableCell>
                                <TableCell align="center" colSpan={1}>{calTotalProtein(mealDetailsS).toFixed(2)}</TableCell>
                                <TableCell align="center" colSpan={1}>{calTotalCalori(mealDetailsS).toFixed(0)}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                }
            </Box>
        </React.Fragment>
    );
}

export default DrawFoodDiaryTableToDom;