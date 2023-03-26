import { React, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './VideoProjectUser.module.css';

const VideoProjectUser = ({ nick, nameVideo, dateVideo}) => {
  const videoRef = useRef();
  
  useEffect(() => {
    videoRef.current?.load();
  }, [nick, nameVideo, dateVideo]);

  return (
    <video ref={videoRef} className="img-fluid" controls>
      <source src={"http://localhost:3001/" + `${nick}/` + nameVideo + "?" + dateVideo} type="video/mp4"></source>
    </video>
  )
};

VideoProjectUser.propTypes = {};

VideoProjectUser.defaultProps = {};

export default VideoProjectUser;
