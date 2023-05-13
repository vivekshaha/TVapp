import { FC, InputHTMLAttributes } from "react";
import { BsSearch } from "react-icons/bs";

type SearchBarProps = InputHTMLAttributes<HTMLInputElement>;
const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div className="relative">
      <input
        {...props}
        className="w-full h-10 px-2 py-1 border border-black rounded-full"
        type="text"
        placeholder="Search"
      />
      <BsSearch className="absolute -translate-y-1/2 right-4 top-1/2" />
    </div>
  );
};

export default SearchBar;
