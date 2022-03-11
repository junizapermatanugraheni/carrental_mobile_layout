import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Home, Account, Bullet, HomeActive, AccountActive, BulletActive } from '../../assets'


const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
    const Icon = () => {
        if (label === "Home") return isFocused ? <Image source={HomeActive} /> : <Image source={Home} />

        if (label === "Daftar Mobil") return isFocused ? <Image source={BulletActive} /> : <Image source={Bullet} />

        if (label === "Akun") return isFocused ? <Image source={AccountActive} /> : <Image source={Account} />

        return <Image source={Home} />;
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon />
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
})