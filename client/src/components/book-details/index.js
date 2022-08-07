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
        <p>
          {data.name} ({data.age})
        </p>
        <p>All books by this author:</p>
        <ul className='other-books'>
          {data.books.map((item, index) => {
            return <li key={`${item.id}_${index}`}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  };

  return <div id='book-details'>{!loading && displayBookDetails()}</div>;
}

export default BookDetails;
