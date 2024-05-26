import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart, removeFromCart } from './redux/action'

const Products = (props) => {
  const {item} = props

  const [showButton, setShowButton] = useState(false)

  const cartData = useSelector((state)=> state.reducer)


  useEffect(()=>{

    let checkCart = cartData.filter((data)=> data.title === item.title)

    if(checkCart.length)
      {
        setShowButton(true)
      }
      else
      {
        setShowButton(false)
      }

  },[cartData])

  const dispatch = useDispatch()

  const handleToCart = () => {
    console.log("Handle cart")
    dispatch(addTocart(item))
  }
  const handleRemoveFromCart = () => {
    console.log("remove cart")
    dispatch(removeFromCart(item))
  }

  return (
    <View style={styles.sectionContainer}>
      <Text>{item.title}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Price: {item.price}</Text>
      <Image source={{uri: item.images[0]}} height={100} width={100} />
      {
      !showButton?
       <Button title="Add to cart" onPress={handleToCart} />
      :
      <Button title="Remove from cart" onPress={handleRemoveFromCart} />
      }

    </View>
  )
}

export default Products

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
})