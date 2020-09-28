import React, { useState, createContext, useContext } from 'react';
import moment from 'moment';

const FoodDiaryContext = createContext();
const FoodDiaryProvider = (props) =>{


    const [addMealSearchModal, setAddMealSearchModal] = useState(false);

    const changeISOformat = moment().format('YYYY-MM-DD');
    const [date, setDate] = useState(changeISOformat);

    return (
        <FoodDiaryContext.Provider value={{addMealSearchModal,setAddMealSearchModal, date, setDate}}>
            {props.children}
        </FoodDiaryContext.Provider>
    )
}

const useFoodDiaryContext = () =>{
    const context = useContext(FoodDiaryContext)
    return context
}

export {FoodDiaryProvider, useFoodDiaryContext}


