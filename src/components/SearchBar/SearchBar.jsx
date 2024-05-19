import toast, { Toaster } from 'react-hot-toast';
import css from "./SearchBar.module.css"

export default function SearchBar({ onSubmit }) {
    const notifyError = () => toast.error("Write something please");
     const notify = () => toast.success('Nice')

  const handleSubmit = (e) => {
      e.preventDefault();
      const value = event.target.elements.query.value
      
        if (value.trim() === "") {
     notifyError()
      return;
      }  
      onSubmit(value);
      notify()
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
              <input
            name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
              <button type="submit">Search</button>
              <Toaster />
      </form>
    </header>
  );
}

