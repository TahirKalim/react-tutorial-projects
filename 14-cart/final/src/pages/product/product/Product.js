import React from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  SlideImg,
  Direct,
  Detail,
  Img,
  Title,
  Price,
  OverLay,
} from './styles'

function Product({ product, removeProduct }) {
  const { id, img, title, category, description, price, rating } = product

  return (
    <Box>
      <SlideImg>
        <Img src={img}></Img>
        <OverLay>
          <Direct>
            <Link to={`/product/${id}`}>Show Now</Link>
          </Direct>
        </OverLay>
      </SlideImg>
      <Detail>
        <Title>{title}</Title>
        <Price>${price}</Price>
      </Detail>
    </Box>
  )
}

export default Product
