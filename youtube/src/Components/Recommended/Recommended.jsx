import React, { useEffect, useState } from 'react';
import './Recommended.css';
import { API_KEY } from '../../data';
import { Link } from 'react-router-dom';

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&videoCategoryId=${categoryId}&key=${API_KEY}`;
      const res = await fetch(relatedVideoUrl);
      const data = await res.json();
      if (res.ok) {
        setApiData(data.items);
      } else {
        console.error('Failed to fetch recommended videos:', data.error);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div className="recommended">
      {apiData.length > 0 ? (
        apiData.map((item, index) => (
          <Link
            to={`/video/${categoryId}/${item.id.videoId}`}
            key={index}
            className="side-video-list"
          >
            <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>Loading recommended videos...</p>
      )}
    </div>
  );
};

export default Recommended;
