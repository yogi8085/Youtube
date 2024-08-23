import React from 'react';
import './Video.css';
import { useParams } from 'react-router-dom';
import Recommended from '../../Components/Recommended/Recommended';
import Playvideo from '../../Components/Playvideo/Playvideo';

const Video = () => {
  const { videoId, categoryId } = useParams();
  
  return (
    <div className='play-container'>
      <div className='playvideo'>
        <Playvideo videoId={videoId} />
      </div>
      <div className='recommended'>
        <Recommended categoryId={categoryId} />
      </div>
    </div>
  );
}

export default Video;
