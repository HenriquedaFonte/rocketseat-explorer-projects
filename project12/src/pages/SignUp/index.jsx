import { Link } from 'react-router-dom';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Background, Container, Form } from './styles'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>FoodReview</h1>
        <p>Application for restaurant evaluations</p>
        <h3>Create your account</h3>
        <Input placeholder="Name" type="text" icon={FiUser} />
        <Input placeholder="Email" type="text" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />
        <Button title="SingUp" />        
        <ButtonText title="Back to login" icon={FiArrowLeft} to="/"/>        
      </Form>
      <Background />
    </Container>
  )
}
