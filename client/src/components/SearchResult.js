import React from "react";
import DrawFoodResultToDom from "./DrawFoodResultToDom";

const SearchResult = ({foodResult, date}) => {

    // console.log("searchresult props",props);

    return (
        <React.Fragment>
            <div>
                {foodResult.map((food) => {
                    // console.log('food', food);
                    return (
                        <DrawFoodResultToDom foodDetails={food} key={food.food_id} date={date}/>
                    )
                })}
            </div>
        </React.Fragment>

    )
}

export default SearchResult;

