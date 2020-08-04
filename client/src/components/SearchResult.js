import React from "react";
import DrawFoodResultToDom from "./DrawFoodResultToDom";

const SearchResult = (props) => {

    // console.log(props);

    return (
        <React.Fragment>
            <h2> search result</h2>
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