import { SafeAreaView, Text, StyleSheet } from 'react-native'

import { Disney } from './components/Disney'
import {Combo } from './components/Combo'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}></Text>
      <Disney/>
      <Text style={styles.subtitulo}>AS MELHORES HISTÓRIAS EM UM SÓ LUGAR</Text>
      <Combo/>
      <Text style={styles.button}>ASSINE AGORA</Text>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 25,
    color: '#ff0000',
    textAlign: 'center',
    fontWeight: 'bold',
  },

   subtitulo: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
    marginTop:30,
  },
  container: {
    backgroundColor: '#010B2E',
    height:800,
  },
  button:   {
    alignItems: 'center',
    backgroundColor: '#000080',
    width: 150,
    marginLeft: 105,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    color: '#FFFFFF',

  },
})