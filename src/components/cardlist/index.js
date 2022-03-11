import { StyleSheet, Text, View, TouchableOpacity, Image,Dimensions} from 'react-native'
import React from 'react'

const cardlist = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={require('../../assets/icons/mobil.png')} />
      <View>
        <Text style={styles.txtHead}>Daihatsu Xenia</Text>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.imageP} source={require('../../assets/icons/people.png')} />
        <Text style={{marginLeft: 10}}>4</Text>
        <Image style={{width: 20, height: 25, marginLeft:20}} source={require('../../assets/icons/case.png')} />
        <Text style={{marginLeft: 10}}>2</Text>
      </View>
      <View>
        <Text style={{color: '#5CB85F', fontFamily: 'Helvetica', marginLeft:15, marginTop: 5,}}>Rp 230.000</Text>
      </View>
      </View>
    </TouchableOpacity>
  )
}

export default cardlist

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset:{
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 3,
    marginBottom: 1,
    marginVertical: windowHeight*0.01
  },
  image:{
    width: 40,
    height: 24,
    marginVertical: 15
  },
  imageP:{
    width: 20,
    height: 25,
    marginLeft:15
  },
  txtHead:{
    color: 'black',
    fontSize: 15,
    marginBottom: 5,
    marginVertical: 5,
    fontFamily: 'Helvetica',
    marginLeft:15
  },
  txt:{

  }
})