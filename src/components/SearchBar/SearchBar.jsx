import s from "./SearchBar.module.css";
import { Formik, Form, Field } from "formik";

function SearchBar({ setPage, onSearchQuery, notify }) {
  const initialValues = {
    query: "",
  }

  function onSubmit(data, options) {
    if (!data.query) { notify() }
    setPage(1)
    onSearchQuery(data.query)
    options.resetForm()
  }
  return (
    <header>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field
            type="text"
            autoComplete="on"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
          <button className={s.button} type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}

export default SearchBar;
