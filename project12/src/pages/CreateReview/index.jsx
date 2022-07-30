import { BsStarFill } from 'react-icons/bs';
import { FiArrowLeft } from 'react-icons/fi';
import { IoFastFood } from 'react-icons/io5';

import { Bookmarks } from '../../components/Bookmarks';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Title } from '../../components/Title';
import { Container, Form } from './styles';


export function CreateReview(data) {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <ButtonText title="Back" icon={FiArrowLeft} to="/"/>
          <div className="top">            
            <Title title="New restaurant" />
          </div>
          <div className="input">
            <Input placeholder="Name" type="text" icon={IoFastFood} />
            <Input
              placeholder="Your note (0 to 5)"
              type="text"
              icon={BsStarFill}
            />
          </div>
          <textarea type="text" className="textArea" placeholder="Review" />
          <h3>Bookmarks</h3>
          <div className="bookmarks">
            <Bookmarks value={data.bookmarks || "tag"} />
            <Bookmarks value={data.bookmarks || "tag"} />
            <Bookmarks isNew placeholder="New bookmark" value={data.bookmarks || ""}/>
          </div>
          <footer>
            <Button title="Delete restaurant"/>
            <Button title="Save changes" />
          </footer>
        </Form>
      </main>
    </Container>
  )
};