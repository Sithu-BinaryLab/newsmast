import { useState } from "react";
import { LegacyRef, RefObject } from "react";
import { useRef } from "react";

type InputComponentState = "default" | "error" | "success";
interface InputComponentProps {
  label: string;
  type?: any;
  state?: InputComponentState;
}

interface InputContainerProps {
  state: InputComponentState;
  selected: boolean;
}

const styles = {
  inputContainer: (props: InputContainerProps) => {
    const { state, selected } = props;
    let design = "";
    if(state == "default" && selected){
      design = "selected";
    }
    if(state != "default"){
      design = state;
    }
    return ["input-container w-full relative bg-newsmast-very-light-blue text-newsmast-dark-blue h-max mt-3 rounded-lg", design].join(" ")
  }
}

const InputComponent: React.FC<InputComponentProps> = (props) => {
  const { label, type, state = "default" } = props;
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <div className={styles.inputContainer({state, selected})} data-placeholder={label ? label : "Email"}>
      <input
        className={["bg-transparent w-full text-gray-800 placeholder:text-gray-800 px-5 rounded-lg outline-none"].join(" ")}
        type={type ? type : "text"}
        onFocus={() => setSelected(true)}
        onBlur={() => setSelected(false)}
      />
    </div>
  );
}

export default InputComponent;