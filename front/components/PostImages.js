import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

import ImagesZoom from './ImagesZoom';
import { BACKEND } from '../utils/factory';

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img
          style={{ width: '50%', display: 'inline-block' }}
          role='presentation'
          src={`${BACKEND}/${images[0].name}`}
          alt={`${BACKEND}/${images[0].name}`}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          style={{ width: '50%', display: 'inline-block' }}
          role='presentation'
          src={`${BACKEND}/${images[0].name}`}
          alt={`${BACKEND}/${images[0].name}`}
          onClick={onZoom}
        />
        <img
          style={{ width: '50%', display: 'inline-block' }}
          role='presentation'
          src={`${BACKEND}/${images[1].name}`}
          alt={`${BACKEND}/${images[1].name}`}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  return (
    <>
      <div>
        <img
          style={{ width: '50%', display: 'inline-block' }}
          role='presentation'
          src={`${BACKEND}/${images[0].name}`}
          alt={`${BACKEND}/${images[0].name}`}
          onClick={onZoom}
        />
        <div
          role='presentation'
          style={{
            display: 'inline-block',
            width: '50%',
            textAlign: 'center',
            verticalAlign: 'middle',
          }}
        >
          <PlusOutlined />
          <br />
          {images.length - 1}개의 사진 더보기
        </div>
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};

PostImages.porpTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
