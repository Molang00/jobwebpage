import { serialize } from 'cookie';
import React from 'react';
import { useLocation } from 'react-router';
import Helmet from 'react-helmet';

import { REACT_APP_FILE_DOWNLOAD_URL } from '../config';

const PopupPage = () => {
  const image = React.useRef<HTMLImageElement>(null);

  const [isChecked, setIsChecked] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const location = useLocation();

  const query = new URLSearchParams(location.search);

  const onImageLoad = () => {
    if (image.current !== null) {
      setWidth(image.current.width);
      setHeight(image.current.height);
      setIsLoaded(true);
      window.resizeTo(image.current.width, image.current.height + 100);
    }
  };

  const onClose = () => {
    if (isChecked) {
      const date = new Date();
      date.setHours(24);
      date.setMinutes(0);
      document.cookie = `${serialize(`popup#${query.get('id')}`, 'Y', {
        expires: date
      })}`;
    }

    window.close();
  };

  return (
    <div>
      <Helmet>
        <title>{query.get('title')}</title>
      </Helmet>
      <div style={isLoaded ? { margin: 'auto', width, height: height + 20 } : {}}>
        <img
          ref={image}
          src={`${REACT_APP_FILE_DOWNLOAD_URL}/public/popup/${query.get('imageName')}`}
          style={isLoaded ? { width, height } : {}}
          onLoad={onImageLoad}
        />
        <br />
        <div style={{ float: 'right' }}>
          <label style={{ fontSize: '10px', color: 'black', display: 'inline-block' }}>하루 동안 띄우지 않기</label>
          <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}></input>
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export default PopupPage;
