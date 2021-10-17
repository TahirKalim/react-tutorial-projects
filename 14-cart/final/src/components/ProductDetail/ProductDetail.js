import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import Loading from '../../pages/product/Loading'

import {
  Img,
  Card,
  CardContent,
  ProductPrice,
  ProductInfo,
  ProductTitle,
  Action,
  Button,
} from './styles'
import Rating from '../Rating/Rating'

function ProductDetail(props) {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  //const url = `https://fakestoreapi.com/products/${id}`
  const url = 'https://course-api.com/react-useReducer-cart-project/'

  const fetchSingleProduct2 = async () => {
    setLoading(true)
    axios
      .get(url)
      .then((res) => {
        const result = res.data
        setLoading(false)
        setProduct(result)
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchSingleProduct2()
  }, [])

  if (loading) {
    return <Loading />
  }
  console.log(product)
  const { img, title, price, amount } = product
  return (
    <Card>
      <Img src={img} alt='image of product' />
      <CardContent>
        <ProductTitle>{product.title}</ProductTitle>
        {/* <Rating rating={product.rating.rate}>{`${product.rating.rate}(${product.rating.count})`}</Rating> */}
        <ProductPrice>
          Price: <span>{price}$</span>{' '}
        </ProductPrice>
        {/* <ProductInfo>
          <h2>About this item: </h2>
          <p>{product.description}</p>
        </ProductInfo> */}
        <Action>
          <Button>Add to Cart</Button>
        </Action>
      </CardContent>
    </Card>
  )
}

export default ProductDetail
