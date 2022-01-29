import React, {useEffect} from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Product from "../screens/Product";
import { getDrinks } from '../utils/getDrinks';
import { useDispatch,useSelector } from 'react-redux';
import { updateDrinks } from '../redux/drinks';
import { changeState } from '../redux/globalLoading';

const Navigation = () => {
    const globalLoading = useSelector((state) => state.globalLoading.value)
    const dispatch = useDispatch()

    useEffect(() => {
        getDrinks(globalLoading, dispatch, updateDrinks, changeState)
    }, [])

    return(
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Product" component={Product} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Navigation