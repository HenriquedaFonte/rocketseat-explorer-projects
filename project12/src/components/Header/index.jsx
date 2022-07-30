import { Link } from 'react-router-dom';

import { Container, Profile } from './styles';

import { Input } from '../../components/Input';

export function Header() {
  return (
    <Container>
      <h1>FoodReview</h1>
      <Input placeholder="Search by title" />
      <Profile>
        <div>          
          <strong>Henrique da Fonte</strong>
          <a href="#">Exit</a>
        </div>
        <Link to="/profile">
          <img src="http://github.com/henriquedafonte.png" alt="user picture" />
        </Link>
      </Profile>
    </Container>
  )
}