import { changeFilter } from "../../redux/filters/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);
  const handleChangeInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.searchBoxContainer}>
      <p className={css.searchBoxLabel}>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        value={filterValue}
        onChange={handleChangeInput}
        placeholder="type contact name"
      />
    </div>
  );
};

export default SearchBox;
