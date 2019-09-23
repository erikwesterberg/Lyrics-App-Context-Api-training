import React from "react";
import { Link } from 'react-router-dom';

const Track = props => {
  const { track } = props;
  return (
    <div classNae="col-md-6">
      <div cassName="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <srong>
              <i className="fas fa-play"></i>track
            </srong>
            : {track.track_name}
            <br />
            <srong>
              <i className="fas fa-compact-disc"></i>Album
            </srong>
            :{track.album_name}
          </p>
        <Link to={`lyrics/track/${track.track.id}`} className="btn btn-dark btn-block">
        <i className="fas fa-chevron-right" /> View Lyrics
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
