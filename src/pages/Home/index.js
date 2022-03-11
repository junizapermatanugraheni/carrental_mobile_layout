import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Banner } from '../../assets';
import CardList from '../../components/cardlist/index';
import IconHome from '../../components/iconHome';
//import ButtonIcon from '../../components/ButtonIcon';

const Home = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} >
        <ImageBackground style={{ width: 400, height: 150, top: 0, left: 0, backgroundColor: '#D3D9FD' }}>
          <View style={styles.hello}>
            <View>
              <Text style={styles.nama} >Hi, Juniza</Text>
              <Text style={styles.lokasi} >Yogyakarta</Text>
            </View>
            <Image style={styles.image} source={require('../../assets/icons/Ellipse.png')} />
          </View>

        </ImageBackground>
        <ImageBackground source={Banner} style={styles.banner} />
        <IconHome />
        <Text style={{ fontSize: 17, color: 'black', fontFamily: 'Helvetica-Bold', paddingHorizontal: 20, marginTop: 40, marginBottom: 5 }}>Daftar Mobil Pilihan</Text>
        <CardList />
        <CardList />
        <CardList />
      </ScrollView>
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

  hello: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },


  nama: {
    fontSize: 14,
    paddingHorizontal: 20,
    fontFamily: 'Helvetica',
    lineHeight: 20,
    color: 'black'
  },
  lokasi: {
    fontSize: 16,
    paddingTop: 5,
    paddingHorizontal: 20,
    fontFamily: 'Helvetica-Bold',
    lineHeight: 20,
    color: 'black'
  },
  banner: {
    width: 328,
    height: 140,
    padding: 17,
    marginHorizontal: 30,
    marginTop: -windowHeight * 0.07
  },
  image: {
    marginHorizontal: 30,
    borderRadius: 100,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginVertical: 10,
  }
})