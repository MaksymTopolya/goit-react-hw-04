import css from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({ increasePage }) {
    return (
        <>
            <button type="button" onClick={increasePage} className={css.btn}>Load More</button>
        </>
    )
    
}