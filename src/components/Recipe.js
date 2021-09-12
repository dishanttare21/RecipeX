import React from 'react'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className="recipe">
            <h2 className="title"><a href="">{title}</a></h2>
            <div className="recipe-img">
                <img src={image} alt="" /> 
            </div>
            <p>Calories: {Math.floor(calories)}</p>
            <h4>Ingredients:</h4>
            <ol className="ingredients">
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe
