import { View, Text, StyleSheet, Image } from 'react-native'

export function Combo() {
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={require('../assets/image4.png')}/>
   
      
      
    </View>
  )
}
const styles= StyleSheet.create({
  image:{
    height:55,
    width:165,
    marginTop:45,

  },
  container:{
    justifyContent:'center',
    alignItems:'center',
  }

}) 