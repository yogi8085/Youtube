import { useState, useEffect } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../../data';

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const videoListUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
      const response = await fetch(videoListUrl);
      const data = await response.json();
      if (response.ok) {
        setData(data.items);
      } else {
        console.error('Failed to fetch videos:', data.error);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.length > 0 ? (
        data.map((item, index) => (
          <Link
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="card"
            key={index}
          >
            <img
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
            />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {value_converter(item.statistics.viewCount)} views &bull; 2 days
              ago
            </p>
          </Link>
        ))
      ) : (
        <p>Loading videos...</p>
      )}
    </div>
  );
};

export default Feed;
