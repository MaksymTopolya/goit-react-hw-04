import ImageCards from "./ImageCards";
import css from "./ImageGallery.module.css"

export default function ImageGallery({ photos, onClick }) {
    return (
      <ul className={css.list}>
            {photos.map((photo) => (
                <li className={css.item} key={photo.id}>
                    <ImageCards
                        img={photo.cover_photo.urls.small} 
                        alt={photo.cover_photo.alt_description}
                        onClick={onClick}
                    />
                </li>
            ))}
        </ul>
    )
}

