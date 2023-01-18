import { GoChevronLeft } from "react-icons/go";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  ChangeEventHandler,
  MouseEventHandler,
  MutableRefObject,
  RefObject,
  useRef,
  useState,
} from "react";

interface PhoneVerificationProps {}

const styles = {
  verificationInput: (code: string, index: number, selected: number | null) => {
    let isSelected = code.length - 1 == index || selected == index ? "selected" : "";
    return (
      "verification-input text-gray-800 outline-none rounded" + " " + isSelected
    );
  },
};

const PhoneVerification: React.FC<PhoneVerificationProps> = () => {
  const [code, setCode] = useState<string>("");
  const [selected, setSelected] = useState<0 | 1 | 2 | 3 | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleInputClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as any;
    setSelected(+target.getAttribute("data-index") as any);
    inputRef.current?.focus();
  };
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSelected(null)
    if (e.target.value?.length < 5) {
      setCode(e.target.value);
    }
  };
  return (
    <>
      <main className="w-screen h-screen flex flex-col px-5 py-5 box-border relative bg-white text-black">
        <button
          className="text-3xl text-gray-600 p-3 rounded-full border-2 border-gray-400 w-max h-max flex justify-center items-center"
          type="button"
          onClick={() => router.back()}
        >
          <GoChevronLeft />
        </button>
        <h3 className="text-2xl font-bold mt-6 uppercase text-center">
          Phone Verification
        </h3>
        <p className="text-md text-center mt-1">
          We sent a code to your number{" "}
        </p>
        <p className="text-center text-blue-700">9(173)605-76-05</p>

        <input
          ref={inputRef}
          onChange={handleInputChange}
          className="h-0 w-0 overflow-hidden"
          onBlur={() => setSelected(null)}
        />
        <div className="flex justify-center my-10 gap-5 w-full">
          <div
            className={styles.verificationInput(code, 0, selected)}
            style={{ width: "4.5rem", aspectRatio: "1" }}
            onClick={handleInputClick}
            data-index="0"
          >
            {code[0]}
          </div>
          <div
            className={styles.verificationInput(code, 1, selected)}
            style={{ width: "4.5rem", aspectRatio: "1" }}
            onClick={handleInputClick}
            data-index="1"
          >
            {code[1]}
          </div>
          <div
            className={styles.verificationInput(code, 2, selected)}
            style={{ width: "4.5rem", aspectRatio: "1" }}
            onClick={handleInputClick}
            data-index="2"
          >
            {code[2]}
          </div>
          <div
            className={styles.verificationInput(code, 3, selected)}
            style={{ width: "4.5rem", aspectRatio: "1" }}
            onClick={handleInputClick}
            data-index="3"
          >
            {code[3]}
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 mb-7 w-full">
          <p className="text-center py-5 text-gray-700 z-10 w-max bg-white">
            {"Don't receive your code? "}
          </p>
          <Link className="text-blue-700" href="/">Re-send in 19 sec..</Link>
        </div>
        <button className="py-4 bg-black text-white rounded-lg">
          Verify
        </button>

      </main>
    </>
  );
};

export default PhoneVerification;
