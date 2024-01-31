import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../../context/UserContext';

const Github = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${user.username}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const userData = await response.json();
        setData(userData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user.username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-8 mb-4 p-6 bg-white rounded-md shadow-md">
      <div className="flex items-center mb-4">
        <img className="h-20 w-20 rounded-full mr-4" src={data.avatar_url} alt={`${user.username}'s Avatar`} />
        <div>
          <h2 className="text-xl font-semibold">{data.name || user.username}</h2>
          <p className="text-gray-600">{data.bio || 'No bio available'}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <strong>Followers:</strong> {data.followers}
        </div>
        <div>
          <strong>Following:</strong> {data.following}
        </div>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default Github;