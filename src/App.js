import logo from './logo.svg';
import './App.css';

const BookList = () => {
  return <section>
    <Book/>
    <Book/>
    <Book/>
    <Book/>
  </section>
}

const Book = () => {
  return <article>
    <Image/>
    <Title/>
    <Author/>
  </article>
}

const Image = () => <img alt='Amazon book listing' src='https://images-na.ssl-images-amazon.com/images/I/81crMlhnQtL._AC_UL600_SR600,400_.jpg' />
const Title = () => <h2>Book Title</h2>
const Author = () => {
  return <h4>Author</h4>
}

export default BookList;
