import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    HeroContainer: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        marginTop: -100
    },
    LeftContainer: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 10
    },
    DrinkImage: {
        width: 100,
        height: 400,
        marginTop: 35,
        marginLeft: 10,
        marginTop: -90
    },
    RightContainer: {
        flexGrow: 1,
        alignItems: 'center'
    }, 
    IngredientsText: {
        fontFamily: 'BalsamiqSans-Regular',
        fontSize: 18,
        color: '#FFC600',
        marginHorizontal: 10,
        marginVertical: 5,
        textAlign: 'center'
    },
    IngredientsTitle: {
        fontSize: 20,
        fontFamily: 'BalsamiqSans-Italic',
        color: '#2EB086',
        margin: 10
    },
    DrinkServingStyle: {
        height: 120,
        width: 120,
        borderRadius: 40,
        marginRight: 62,
        marginVertical: 10
    },
    DrinksTitle: {
        fontSize: 22,
        fontFamily: 'BalsamiqSans-Bold',
        color: '#FFC600',
        margin: 10, 
        textAlign: 'center'
    }
})

export default styles