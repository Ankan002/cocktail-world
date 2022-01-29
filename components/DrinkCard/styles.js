import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    CardContainer: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ImageStyle: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        borderRadius: 100
    },
    InfoContainer: {
        flexGrow: 1,
        height: 100,
        paddingLeft: 10,
        justifyContent: 'center',
        paddingBottom: 10
    },
    TextContainer: {
        width: '100%',
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    InfoTitle: {
        color: '#FFC600',
        fontFamily: 'BalsamiqSans-Italic',
        fontSize: 17,
        marginLeft: 5,
        marginBottom: 4,
        width: 180
    },
    ReadMoreButton: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B8405E',
        borderRadius: 15
    },
    ReadMoreText: {
        fontSize: 17,
        color: '#FFC600',
        fontFamily: 'BalsamiqSans-Regular'
    }
})

export default styles