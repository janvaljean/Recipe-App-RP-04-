
import MyForm from './MyForm'



const Heeader = ({data,setData,query,
mealType,setQuery,setMealType,getData}) => {
  return (
    <div>
      <h1>Food App</h1>
      <MyForm data={data} setData={setData} setQuery={setQuery} setMealType={setMealType} getData={getData}/>
    </div>
  )
}

export default Heeader
