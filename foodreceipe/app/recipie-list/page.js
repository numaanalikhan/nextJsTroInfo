import React from 'react'
import Recipies from '@/components/recipieComp/recipies'  

const  getAllRecipies  = async ()=>{
    const response = await fetch('https://dummyjson.com/recipes')
    const data = await response.json()
    return data?.recipes
}

async function RecipieList() {
    const recipieList = await getAllRecipies( )
  return (
    <div>
      <Recipies recipieList={recipieList}/>
    </div>
  )
}

export default RecipieList