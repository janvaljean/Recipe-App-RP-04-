import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const MyForm = ({data,setData,query,mealType,setQuery,setMealType,getData}) => {
 

  
 

  return (
    <form  className="mb-3 ">
      <fieldset>
      <div className='d-flex justify-content-center m-2 gap-4'>
        
        <input
            id="text"
            type="text"
            placeholder="Search"
            name="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        <button onClick={getData} type="button">Submit</button>
        <select 
        onChange={(e) => setMealType(e.target.value)}        id="disabledSelect">
            <option value="lunch">Lunch</option>
            <option  value="breakfast">Breakfast</option>
            <option  value="dinner">Dinner</option>
            <option  value="snake">Snake</option>
            <option  value="teatime">TeaTime</option>
          </select>
  
      </div>
        
      </fieldset>
    </form>
  )
}

export default MyForm
