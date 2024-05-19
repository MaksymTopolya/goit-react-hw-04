import css from "./ImageGallery.module.css";

export default function ImageCards({ img, alt, onClick, key }) {
  return (
      <div className={css.img} key={key}>
      <img src={img} alt={alt} onClick={() => onClick( img, alt )} />
    </div>
  );
}