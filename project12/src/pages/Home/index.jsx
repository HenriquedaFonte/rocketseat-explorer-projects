import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Card, Container, Content } from './styles'


import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { Title } from '../../components/Title';
import { Evaluation } from '../../components/Evaluation';
import { Comments } from '../../components/Comments';



export function Home(data) {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <div>
            <h1>My restaurants</h1>
            <Link to="/createreview">
              <button title="Add a restaurant">                        
              <FiPlus />
              Add new restaurant
              </button>
            </Link>
          </div>
          <Card>
            <Link to="/reviewpreview/:id">
              <Title title="SushiLogia" />
              <Evaluation ratings={data.ratings || 2.5} />
              <Comments className="description" comments={data.comments || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  in the 1960s with the release of  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like  PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was  in the 1960s with the release of  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like  PageMaker including versions of Lorem Ipsum."}/>
              <Tag title={data.title || 'Tag'} />
              <Tag title={data.title || 'Tag'} />
              <Tag title={data.title || 'Tag'} />
            </Link>
          </Card>
        </Content>
      </main>
    </Container>
  )
}
