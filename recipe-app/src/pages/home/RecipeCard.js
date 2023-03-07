import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const RecipeCard = ({data,setData}) => {
    console.log(data)
    return (
        <div  className='d-flex flex-wrap'>
    
        {data?.map(data => 

    
    <div >
        <Card style={{ width: '18rem' }}>
        <Card.Title>{data.recipe?.label}</Card.Title>
      <Card.Img variant="top" src={data.recipe?.image} />
      <Card.Body>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>)}
       
    </div>
  )
}

export default RecipeCard
