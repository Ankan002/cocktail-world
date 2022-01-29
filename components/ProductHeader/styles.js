import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    HeaderContainer: {
        width: '100%',
        height: 190,
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
    },
    HeaderBar: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingHorizontal: 5,
        marginTop: 20,
        justifyContent: 'space-between'
    },
    BackButton: {
        height: 30,
        width: 30,
        justifyContent:'center',
        alignItems: 'center'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'black',
        opacity: 0.3,
        borderBottomRightRadius: 110, 
        borderBottomLeftRadius: 110,
        resizeMode: 'stretch',
        width: '100%'
    },
    notificationIcon: {
        marginRight: 10
    }
})

export default styles