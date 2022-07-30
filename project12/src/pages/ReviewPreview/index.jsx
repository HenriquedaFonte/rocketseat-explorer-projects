import { Link } from 'react-router-dom';

import { Author, Container, Content } from './styles';

import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';
import { Comments } from '../../components/Comments';
import { Evaluation } from '../../components/Evaluation';
import { Header } from '../../components/Header';
import { Title } from '../../components/Title';


export function ReviewPreview(data) {
  return (
    <Container>
      <Header />
      <main>
        <Content>          
          <ButtonText title="Back" icon={FiArrowLeft} to="/"/>          
          <div className="titleReview">
            <Title title="SushiLogia" />
            <Evaluation ratings={data.ratings || 3.5} />
          </div>
          <Author>
            <div>
              <img
                src="http://github.com/henriquedafonte.png"
                alt="user picture"
              />
              <span> By {data.name || 'Henrique da Fonte'}</span>
            </div>
            <div>
              <FiClock />
              <span>{data.updated_at || '27/07/2022 at 20:41'}</span>
            </div>
          </Author>
          <div className="bookmarks">
            <Tag title={data.title || 'Tag'} />
            <Tag title={data.title || 'Book'} />
            <Tag title={data.title || 'Marks'} />
          </div>
          <Comments
            comments={
              data.comments ||
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  in the 1960s with the release of  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like  PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  in the 1960s with the release of  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like  PageMaker including versions of Lorem Ipsum.          "
            }
          />
        </Content>
      </main>
    </Container>
  )
}