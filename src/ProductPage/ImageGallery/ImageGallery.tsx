import React, { SyntheticEvent, useState } from "react";
import "./ImageGallery.css";
import { ImageSources } from "../ProductPage";

type ImageGalleryProps = ImageSources;

export const ImageGallery = ({ altText, urls }: ImageGalleryProps) => {
  const [imageIdx, setImageIdx] = useState(0);
  const handleUpdateIndexClick = (e: SyntheticEvent, idx: number) => {
    e.preventDefault();
    setImageIdx(idx);
  };
  return (
    <div className="gallery">
      <img className="gallery__image" src={urls[imageIdx]} alt={altText} />
      <div className="gallery__button-area">
        {urls.map((url, idx) => (
          <button
            className={`gallery__button ${imageIdx === idx ? "gallery__button--active" : ""}`}
            onClick={(e) => handleUpdateIndexClick(e, idx)}
            aria-label={`Display image variant ${idx}`}
          />
        ))}
      </div>
    </div>
  );
};
