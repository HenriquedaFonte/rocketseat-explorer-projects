import { FiLock, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Background, Container, Form }  from './styles';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>FoodReview</h1>
        <p>Application for restaurant evaluations</p>
        <h3>Login</h3>
        <Input placeholder="Email" type="text" icon={FiMail}/>
        <Input placeholder="Password" type="password" icon={FiLock} />  
        <Button title="Login"/>        
        <ButtonText title="SingUp" to="/signup" />       
      </Form>
      <Background/>
    </Container>
  );
};