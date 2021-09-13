import React from 'react'
import style from '../css_modules/recipe.module.css'

const Recipe = ({title, calories, image, ingredients, more}) => {
    return (
        <div className={style.recipe}>
            <h2 className={style.title}><a href={more} rel="noreferrer" target="_blank">{title}</a></h2>
            <div className={style.recipeImg}>
                <img src={image} alt="" /> 
            </div>
            <p>Calories: {Math.floor(calories)}</p>
            <h4>Ingredients:</h4>
            <ol className={style.ingredients}>
                {ingredients.map((ingredient,index) =>(
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe;
