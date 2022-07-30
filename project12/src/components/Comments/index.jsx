import { Container } from './styles'

export function Comments({ comments, className }) {
  return( 
  <Container className={className}>
    {comments}
  </Container>
  )
}
