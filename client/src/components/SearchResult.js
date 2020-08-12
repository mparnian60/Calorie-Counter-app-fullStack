import React from "react";
import DrawFoodResultToDom from "./DrawFoodResultToDom";

const SearchResult = (props) => {

    // console.log("searchresult props",props);

    return (
        <React.Fragment>
            <div>
                {props.foodResult.map((food) => {
                    // console.log('food', food);
                    return (
                        <DrawFoodResultToDom foodDetails={food} key={food.food_id}/>
                    )
                })}
            </div>
        </React.Fragment>

    )
}

export default SearchResult;

