import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { Cardlist } from '../../components'

const DaftarMobil = () => {
  return (
    <View styles={styles.list}>
      <ScrollView showsVerticalScrollIndicator={false} >
      <Cardlist />
      <Cardlist />
      <Cardlist />
      <Cardlist />
      <Cardlist />
      <Cardlist />
      </ScrollView>
    </View>
  )
}

export default DaftarMobil

const styles = StyleSheet.create({
  list:{
    paddingHorizontal: 30,
    backgroundColor: 'white',
    flex: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10, 
  }
})