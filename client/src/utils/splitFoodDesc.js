const splitFoodDesc = (foodDescription) => {

    const foodDesc = foodDescription.split(/[|-]/);
    foodDesc.shift();
    return foodDesc;

}

export default splitFoodDesc;