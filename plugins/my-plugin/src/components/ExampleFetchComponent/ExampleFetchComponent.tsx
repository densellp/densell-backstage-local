import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

export const ExampleFetchComponent = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/testGet');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setData(data);
      alert('Data fetched successfully!');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const postData = async () => {
    try {
      const response = await fetch('http://localhost:3001/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: 'value' }), // Replace with your actual data
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setData(data);
      alert('Data posted successfully!');
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleFetchDataClick = async () => {
    const fetchedData = await fetchData();
    if (typeof fetchedData !== 'undefined') {
      alert(`Data fetched successfully: ${JSON.stringify(fetchedData, null, 2)}`);
    } else {
      alert('Data fetch failed!');
    }
  };

  const handlePostDataClick = async () => {
    const fetchedData = await postData();
    if (typeof fetchedData !== 'undefined') {
      alert(`Data posted successfully: ${JSON.stringify(fetchedData, null, 2)}`);
    } else {
      alert('Data post failed!');
    }
  };

  useEffect(() => {
    fetchData();
    postData();
    handleFetchDataClick();
    handlePostDataClick();
  }, []);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleFetchDataClick}>
        Fetch Data
      </Button>
      <Button variant="contained" color="primary" onClick={handlePostDataClick}>
        Post Data
      </Button>
      <Button variant="contained" color="secondary" onClick={() => alert('Just for fun!')}>
        Fun Button
      </Button>
      {/* {data ? (
        <div>
          <h3>Fetched Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>No data fetched yet.</p>
      )} */}
    </div>
  );
};
