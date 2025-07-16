import { useEffect, useState } from 'react';

export default function ApiData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const filtered = data.filter(item => item.title.includes(search));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <input
        className="border p-2 mb-4"
        placeholder="Search posts"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filtered.slice(0, 10).map(post => (
          <li key={post.id} className="mb-2 p-2 border rounded">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
