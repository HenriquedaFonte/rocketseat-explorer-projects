import { FiPlus } from 'react-icons/fi'
import { Container } from './styles';

export function Button(props) {
  return (
    <Container type="button" disabled={props.loading} >
      {props.loading ? 'Carregando...' : props.title}
    </Container>
  );
}