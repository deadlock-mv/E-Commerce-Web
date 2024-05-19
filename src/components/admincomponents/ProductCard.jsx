// ProductCard.js
import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Button, Typography, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const ProductCard = ({ product, onDelete, onEdit }) => {
  const { img, name, price, category } = product;

  return (
    <Card className="productCard">
      <CardHeader
        action={<div >
          <Button style={{marginRight: "5px"}} aria-label="edit" color='primary' variant='contained' onClick={() => onEdit(product)}>
            <EditIcon />
          </Button>
          <Button style={{marginRight: "5px"}} aria-label="delete" variant="contained" color='secondary' onClick={() => onDelete(product)}>
          <DeleteIcon />
        </Button>
        </div>
        }
        title={name}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img src={img} alt={name} className="productImage" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Price:</strong> ${price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Category:</strong> {category}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        
      </CardActions>
    </Card>
  );
};

export default ProductCard;
