import { Container, Form, Avatar }  from './styles';
import { Link } from 'react-router-dom';

import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText title="Back" icon={FiArrowLeft} to='/' />   
      </header>
      <Form>
        <Avatar>
          <img 
            src="https://github.com/henriquedafonte.png"
            alt="user profile photo"
          />
          <label htmlFor="avatar">
            <FiCamera/>
            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>
        <Input
          placeholder="Name" 
          type="text" 
          icon={FiUser}
        />
        <Input
          placeholder="Email" 
          type="text" 
          icon={FiMail}
        />
        <Input
          placeholder="Password" 
          type="password"  
          icon={FiLock}
        />
        <Input
          placeholder="New password"  
          type="password"  
          icon={FiLock}
        />
        <Button title="Save"/>        
      </Form>      
    </Container>
  )
}