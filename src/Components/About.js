import React, { useEffect, useState } from "react";
import { Button,Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { moviesData } from "./MoviesData";

const About = () => {

  const navigate = useNavigate();

  const params = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(moviesData.find((product) => product.id === +params.id));
  }, [params.id]);

  return (
    <div> 
    <div className="Details">
 <Card style={{ width: '30rem'  , height: '40rem'}}>
      <Card.Img variant="top" src={product.img} alt={product.name}/>
    </Card>

    <Card style={{ width: '30rem'  , height: '40rem'}}>
     <Card.Title><h3> {product.name}</h3></Card.Title>
        <Card.Text>
        <h4>{product.description}</h4>
        </Card.Text>
    </Card>  
</div>

   <Button className="Add-btn" onClick={() => navigate(-1)}>
  Go Back </Button>
  
</div>
  );
};

export default About;
