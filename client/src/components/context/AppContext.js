import React, { useState, createContext, useContext } from 'react';
import moment from 'moment';

const AppContext = createContext();
const AppProvider = (props) =>{


    const [addMealSearchModal, setAddMealSearchModal] = useState(false);

    const changeISOformat = moment().format('YYYY-MM-DD');
    const [date, setDate] = useState(changeISOformat);

    return (
        <AppContext.Provider value={{addMealSearchModal,setAddMealSearchModal, date, setDate}}>
            {props.children}
        </AppContext.Provider>
    )
}

const useAppContext = () =>{
    const context = useContext(AppContext)
    return context
}

export {AppProvider, useAppContext}


