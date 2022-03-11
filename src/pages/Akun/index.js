import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Akun = () => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={require('../../assets/image/Park.png')} />
      <Text style={styles.text}>
        Upss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR lebih mudah
      </Text>
      <TouchableOpacity style={styles.button}><Text style={styles.textBtn}>Register</Text></TouchableOpacity>
    </View>
  )
}

export default Akun

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 350,
    height: 230,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Helvetica',
    lineHeight: 20,
    color: 'black',
    marginHorizontal: 13,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5CB85F',
    width: 81,
    height: 36,
    justifyContent: 'center',
    borderRadius: 2,
    alignItems: 'center'
  },
  textBtn: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 14
  }
})