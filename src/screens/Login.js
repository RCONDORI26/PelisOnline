import React, { useState } from 'react'
import { View, Text, Button } from 'react-native';

const Login = () => {
  const [name, setName] = useState('')

  const handleButton = () => {
      setName('reyna')
  }

  return (
         <View>
           <Text> Mi Primer Codigo de Tipo Componente Funcion {name}</Text>
           <Button onPress={this.handleButton} title="Nombre"/>
         </View>
  );
}

export default Login