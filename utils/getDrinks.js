import axios from "axios"
import {API_ENDPOINT_LOCAL, API_ENDPOINT, RAPID_API_HOST, RAPID_API_KEY} from '@env'

export const getDrinks = async(globalLoading, dispatch, updateDrinks, changeState) => {
    if(globalLoading) return
    dispatch(changeState(true))

    const options = {
        method: 'GET',
        url: API_ENDPOINT,
        headers: {
          'x-rapidapi-host': RAPID_API_HOST,
          'x-rapidapi-key': RAPID_API_KEY
        }
    };

    // const options = {
    //     method: 'GET',
    //     url: API_ENDPOINT_LOCAL
    // }
    
    try{
        const Response = await axios.request(options)
        dispatch(updateDrinks(Response?.data?.drinks))
        // dispatch(updateDrinks(Response?.data))
        dispatch(changeState(false))
    }
    catch(error){
        console.log(error)
        dispatch(changeState(false))
        return
    }
}