import { FC, InputHTMLAttributes } from "react";
import { BsSearch } from "react-icons/bs";
import LoadingSpinner from "./LoadingSpinner";

type SearchBarProps = InputHTMLAttributes<HTMLInputElement> & {
  loading: boolean;
};
const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div className="relative">
      <input
        {...props}
        className="w-full h-10 px-1 py-1 border border-black rounded-full"
        type="text"
        placeholder="Search"
      />
      {props.loading && (
        <span className="absolute -translate-y-1/2 right-[-30px] top-1/2">
          {" "}
          <LoadingSpinner />
        </span>
      )}
      <BsSearch className="absolute -translate-y-1/2 right-4 top-1/2" />
    </div>
  );
};

export default SearchBar;
