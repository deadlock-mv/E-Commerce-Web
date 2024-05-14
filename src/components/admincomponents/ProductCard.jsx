// ProductCard.js
import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Button, Typography, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const ProductCard = ({ product, onDelete, onEdit }) => {
  const { image, name, price, category } = product;

  return (
    <Card className="productCard">
      <CardHeader
        action={
          <Button aria-label="edit" onClick={() => onEdit(product)}>
            <EditIcon />
          </Button>
        }
        title={name}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img src={image} alt={name} className="productImage" />
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
        <Button aria-label="delete" onClick={() => onDelete(product)}>
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
