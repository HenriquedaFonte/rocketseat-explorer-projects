import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Container } from './styles';

export function Evaluation({ ratings }) {
  const stars = [];
  for (let i = 0; i < 5; i++){
    let star = i < ratings ? BsStarFill : BsStar;
    if ( ratings > i && ratings < i+1 ){
      star = BsStarHalf;
    }
    stars.push(star)
  }
  return (
    <Container>
      {stars.map((Star, index) => (<Star key={index}/>))}
    </Container>
  );
}