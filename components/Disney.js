import { View, Text, StyleSheet, Image } from 'react-native'

export function Disney() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/image3.png')}/>
      
      
    </View>
  )
}
const styles= StyleSheet.create({
  image:{
    height:110,
    width:205,
    marginTop:60,
  },
  container:{
    justifyContent:'center',
    alignItems:'center',
  }

}) 