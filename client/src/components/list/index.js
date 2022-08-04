import React, { useEffect, useState } from 'react';

export default function AuthorsList() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    async function fetchAuthors() {
      const response = await fetch(`http://localhost:1337/authors`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        return;
      }

      const allAuthors = await response.json();
      setAuthors(allAuthors);
    }

    fetchAuthors();
  }, []);

  const authorsList = () => {
    if (authors.length === 0) return;

    return authors.map((author) => {
      const { _id, name, age } = author;

      return (
        <tr key={_id}>
          <td>{name}</td>
          <td>{age}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h3>Author List</h3>
      <table className='table table-striped' style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>{authorsList()}</tbody>
      </table>
    </div>
  );
}
