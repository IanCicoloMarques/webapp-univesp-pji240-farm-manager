import { useState } from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function Product(props){
    const { id, name, price, image, setSelected, index } = props;
    const [ counter, setCounter ] = useState(0);

    function handleProductAdd(){
        if (counter == 0){
            setCounter(counter+1);
            setSelected(index, counter);

        }
        else{
            setCounter(counter+1);
            setSelected(index, counter);
        }
      }

      function handleProductSubtract(){
        if (counter == 1){
            setCounter(0);
            setSelected(index, counter);
        }
        else if(counter > 1)
        {
            setCounter(counter-1);
            setSelected(index, counter);
        }
      }

    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="240"
                image={props.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                R${props.price}
                </Typography>
            </CardContent>
            <CardActions justifyContent="center">
                <Button onClick={handleProductSubtract}>-</Button>
                {counter}
                <Button onClick={handleProductAdd}>+</Button>
                <a>Total: R$ {counter*props.price}</a>
            </CardActions>
        </Card>

        )

}