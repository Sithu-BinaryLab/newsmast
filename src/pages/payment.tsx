import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";
import AppleIcon from "src/assets/icons/apple-icon";
import GoogleIcon from "src/assets/icons/google-icon";
import TwitterIcon from "src/assets/icons/twitter-icon";
import getCountryPhoneNumber from "src/utils/getCountryPhoneNumbers";
import countryCodes from "country-codes-list";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import InputComponent from "src/components/forms/InputComponent";
import PhoneModal from "src/components/PhoneModal";
import { BsCheck } from "react-icons/bs";

interface SignInProps { }

interface SelectItemProps {
  label: string;
  subLabel?: string;
  bestValue?: boolean
}

const SelectItem: React.FC<SelectItemProps> = ({label, subLabel, bestValue}) => {
  const [selected, setSelected] = useState<boolean>(false);
  return ( 
    <div 
      className={[
        "relative flex justify-between items-center py-4 px-4 border rounded",
        selected ? "border-black" : "border-newsmast-blue-grey"
      ].join(" ")}
      onClick={() => setSelected(pre => !pre)}
    >
      {
        bestValue && (
          <div 
            className="absolute top-0 text-primary bg-white px-2 py-1 border border-black rounded-lg text-xs"
            style={{
              marginTop: "-0.7rem",
              marginLeft: "-0.5rem",
            }}
          >
            BEST VALUE
          </div>
        )
      }
      <div className="flex items-center gap-2">
        <h5 className="font-semibold text-sm">
          {label} 
          {subLabel && (<span className="ml-2 text-xs text-newsmast-dark-blue">{subLabel}</span>)}
        </h5>
      </div>
      <div 
        className={[
          "flex justify-center items-center rounded-full border-2",
          selected ? "bg-black border-transparent" : "bg-white border-newsmast-blue-grey"
        ].join(" ")} 
        style={{width:"1.5rem", aspectRatio:"1"}}
      >
        <BsCheck className="fill-white"/>
      </div>
    </div>
  );
}

const SignIn: React.FC<SignInProps> = () => {
  const [countryCodesArray, setCountryCodes] = useState<Array<any> | []>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tab, setTab] = useState<"email" | "phone">("email");
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCountryCodes(countryCodes.all());
      const bodyTag = document.querySelector("body") as any;
      bodyTag.style.backgroundColor = "white"
    }
  }, []);

  const handlePhoneClick = () => {
    setShowModal(true)
  }

  return (
    <>
      <main className="w-screen h-screen flex flex-col py-5 box-border relative bg-white text-black">
        <div className="relative flex justify-center items-center border-b px-5 pb-1  border-b-newsmast-blue-grey">
          <button className="absolute left-0 ml-5 text-3xl text-gray-600 p-3 rounded-full border-2 border-gray-400 w-max h-max flex justify-center items-center" type="button" onClick={() => router.back()}>
            <GoChevronLeft />
          </button>
          <h3 className="text-2xl font-semibold my-5">Subscription</h3>
        </div>
        <div className="flex flex-col gap-3 px-5 mt-5 pb-5 border-b border-b-newsmast-blue-grey">
          <SelectItem label="Donation"/>
          <SelectItem label="$12.99/Month"/>
          <SelectItem label="$99.99/Month" subLabel="$8.33/month" bestValue/>
        </div>
        <div className="px-3 py-3 border-b border-b-newsmast-blue-grey">
          <h5>Your Summary:</h5>
          <p className="text-lg font-bold text-black">
            $12.99
            <span className="text-newsmast-grey text-xs font-normal ml-3">month subscription</span>
          </p>
        </div>
        <div className="px-5 pt-5 pb-1 flex flex-col gap-4">
          <Link href="/home" className="flex justify-center items-center gap-2 w-full py-3 bg-black text-white text-center rounded-lg text-2xl">
            <span>Pay with </span>
            <AppleIcon fill="white" width={30}/>
            <span className="font-bold">Pay</span>
          </Link>
          <Link href="/home" className="flex justify-center items-center gap-2 w-full py-3 bg-white text-black text-center rounded-lg text-2xl shadow">
            <span>Pay with </span>
            <GoogleIcon width={30}/>
            <span className="font-bold">Pay</span>
          </Link>
          <div className="relative flex justify-center items-center">
            <div className="absolute border-t border-t-newsmast-blue-grey w-full"></div>
            <p className="bg-white z-50 px-3 text-newsmast-grey-2">Or pay with card</p>
          </div>
        </div>
        <div className="flex justify-between flex-wrap px-5 pb-10">
          <InputComponent label="0000 0000 0000 0000"/>
          <div style={{width: "48%"}}>
            <InputComponent label="MM/YY"/>
          </div>
          <div style={{width: "48%"}}>
            <InputComponent label="CVC"/>
          </div>
          <InputComponent label="Name on Card"/>
          <InputComponent label="Email (Optional)"/>
          <Link href="/home" className="bg-primary text-center text-white w-full py-4 rounded-lg mt-7 mb-5">
            Pay $18.00
          </Link>
        </div>
        
        
      </main>
    </>
  );
};

export default SignIn;
