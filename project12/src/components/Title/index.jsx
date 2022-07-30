import { Container } from './styles';

export function Title({title, ...rest}) {
  return (
    <Container {...rest}>
      {title}
    </Container>
        
  );
}