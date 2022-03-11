import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'

const Data = [
    {
        id: 1,
        title: 'Sewa Mobil',
        image: require('../../assets/image/fi_truck.png')
    },
    {
        id: 2,
        title: 'Oleh - Oleh',
        image: require('../../assets/image/fi_box.png')
    },
    {
        id: 3,
        title: 'Penginapan',
        image: require('../../assets/image/fi_key.png')
    },
    {
        id: 4,
        title: 'Wisata',
        image: require('../../assets/image/fi_camera.png')
    },

];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title} />
    </View>
);
const IconHome = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <View style={styles.imageContent}>
                <Image style={styles.imageList} source={item.image} />
            </View>
            <View>
                <Text style={{ marginTop: 6, color: 'black', fontSize: 14, marginLeft: 22, alignItems: 'center'}} >
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={Data}
                horizontal
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

export default IconHome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    // item: {
    //     backgroundColor: '#DEF1DF',
    //     padding: 20,
    //     marginVertical: 2,
    //     marginHorizontal: 30,

    // },
    title: {
        fontSize: 14,
        color: 'black'
    },
    imageContent:{
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DEF1DF',
        borderRadius: 8,
        marginHorizontal: 22,
    },
    imageList:{
        width:22,
        height: 18,
    }
})