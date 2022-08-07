import { useApiFetch } from '../../hooks/useAxios';

function BookDetails(props) {
  const { bookId } = props;
  const { data, loading } = useApiFetch({
    url: `http://localhost:1337/books/${bookId}`,
  });

  const displayBookDetails = () => {
    return (
      <div>
        <h2>{data.title}</h2>
        <p>{data.genre}</p>
        {/* <p>{book.author.name}</p>
        <p>All books by this author:</p>
        <ul className='other-books'>
          {book.author.books.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul> */}
      </div>
    );
  };

  return <div id='book-details'>{!loading && displayBookDetails()}</div>;
}

export default BookDetails;
