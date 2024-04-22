import React from 'react'
import type { PropsWithChildren } from 'react'
import {View,Text,StyleSheet} from 'react-native'

type currencyButtonProps=PropsWithChildren<{
    name:string,
    value:number,
    flag:string
}>


const currencyButton=(props:currencyButtonProps):JSX.Element=>{
    return(

        <View style={styles.buttonContainer}>
            <Text style={styles.country}>{props.name}</Text>
            <Text style={styles.buttonContainer}>{props.value}</Text>
            <Text style={styles.flag}>{props.flag}</Text>
        </View>

    )
}

const styles=StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#fff',
        width:100,
        height:100,
        borderRadius:10,
        padding:10,
        margin:10,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5

    },
    flag:{
        fontSize:50,
        marginBottom:4,
        alignSelf:'center'
    },
    country:{
        fontSize:20
    }



})
export default currencyButton
