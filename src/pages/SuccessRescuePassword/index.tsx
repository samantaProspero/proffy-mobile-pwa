import React from 'react';

import { useNavigation } from '@react-navigation/native';
import Success from '../../components/Success';


function SuccessRescuePassword(){
  return (
      <Success
      title = 'Redefinição enviada!'
      description='Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos.'
      textButton = 'Voltar ao Login'
      destination = 'SignIn'
      />
  )
}
export default SuccessRescuePassword;