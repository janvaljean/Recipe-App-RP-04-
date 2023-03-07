import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from './RecipeCard';
import Heeader from '../../components/header/Heeader';




const Home = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('pizza');
    const [mealType, setMealType] = useState('lunch');

    const url = `https://api.edamam.com/search?q=${query}&app_id=76caa0e1&app_key=
a1d5842272209a97528ef100990b5bff&mealType=${mealType}`;
    console.log(url);
    const getData = async(e) => {
        
        const {data} = await axios.get(url)
        setData(data?.hits)

    }
    useEffect(() => {
        getData()
    }, [])

  return (
    <div>
        <Heeader data={data} setData={setData} setQuery={setQuery} setMealType={setMealType} query={query} mealType={mealType} getData={getData} />
        <RecipeCard data={data} setData={setData}/>
    </div>
  )
}

export default Home
