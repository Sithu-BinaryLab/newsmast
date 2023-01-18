import { useState } from "react";
import { LegacyRef, RefObject } from "react";
import { useRef } from "react";
import {IoSearch} from "react-icons/io5";

type SearchBoxState = "default" | "error" | "success";
interface SearchBoxProps {
}

const styles = {
  inputContainer: (selected: boolean) => {
    return ["input-container search px-7 w-full relative bg-newsmast-very-light-blue h-max mt-3 rounded-lg", selected ? "selected" : ""].join(" ")
  }
}

const SearchBox: React.FC<SearchBoxProps> = (props) => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <div className={styles.inputContainer(selected)} data-placeholder="Search..">
      <div className="absolute top-0 left-0 z-50">
        <IoSearch className="fill-newsmast-grey-2 my-4 ml-3" style={{width:"1.7rem",height:"1.7rem"}}/>
      </div>
      <input
        className={["bg-newsmast-very-light-blue disable-label-animation w-full text-gray-800 px-5 py-2 rounded-lg outline-none"].join(" ")}
        type="text"
        onFocus={() => setSelected(true)}
        onBlur={() => setSelected(false)}
      />
    </div>
  );
}

export default SearchBox;