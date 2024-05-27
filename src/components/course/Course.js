import { Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Course.css';
function Courseitem({id,img,title,text}){
    return(
        <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title> {title} </Card.Title>
          <Card.Text>
           {text}
          </Card.Text>
          <Button variant="primary">
            <Link to={`course/${id}`} style={{textDecoration:'none',color:'white'}}>خرید دوره</Link>
          </Button>
        </Card.Body>
      </Card>
    )
}
export default Courseitem