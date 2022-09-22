import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Login = (props) => {
    const [names, setName] = useState(''); /* Constructor */

    useEffect(() => {
      console.log('State : Creacion ')
    },[]
    )

    useEffect(()=>{
      if(names!=''){
        console.log('state : Actualizacion')
      }

    },[names]) /* se le pasa un parametro para que escuche cuando esta cambiando */

    useEffect(() => {
      return () => {
        console.log('State : Destruccion o Desmontaje ')
    }
    },[]
    )

  const handleButton = () => {
    setName('reyna');
  };

  return (
    <View>
      <View style={style.container}>
      <Text style={style.textColor}> Nombre : </Text>
      <Text> {names} {props.lastName}</Text>
      </View>
      <Button onPress={handleButton} title="Precione" />
    </View>
  )
}
const style = StyleSheet.create({
  textColor:{
    color:'blue',
    fontWeight:'bold'
  },
   container:{
    flexDirection:'row'
   }
})
export default Login
