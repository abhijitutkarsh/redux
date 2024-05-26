import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

  const [cartCount, setCartCount] = useState(0)

  const cartTotal = useSelector((state)=> state.reducer)

  useEffect(()=>{
    setCartCount(cartTotal?.length)
  },[cartTotal])

  
  return (
    <View>
      <Text style={{fontSize: 25}} >{cartCount}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})