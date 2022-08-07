import { useState } from 'react';
import { useApiFetch } from '../../hooks/useAxios';
import BookDetails from '../book-details';

function BookList() {
  const [bookId, setBookId] = useState('');
  const { data, loading } = useApiFetch({ url: 'http://localhost:1337/books' });

  const displayBooks = () => {
    if (loading) return <p>Loading...</p>;

    return data.map((book) => {
      return (
        <li key={book._id} onClick={() => setBookId(book._id)}>
          {book.title}
        </li>
      );
    });
  };

  return (
    <div>
      {data && <ul id='book-list'>{displayBooks()}</ul>}
      {bookId && <BookDetails bookId={bookId} />}
    </div>
  );
}

export default BookList;
