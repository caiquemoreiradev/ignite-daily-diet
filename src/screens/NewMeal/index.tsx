import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import MealBody from '@components/MealBody';

const NewMeal = () => {


    return(
        <MealBody
            highlightTitle='Nova refeição'
            buttonTitle='Cadastrar refeição'
        />
    )
}

export default NewMeal;