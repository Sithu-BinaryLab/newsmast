import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";
import { BsCheck } from "react-icons/bs";
import AppleIcon from "src/assets/icons/apple-icon";
import GoogleIcon from "src/assets/icons/google-icon";
import TwitterIcon from "src/assets/icons/twitter-icon";
import getCountryPhoneNumber from "src/utils/getCountryPhoneNumbers";
import countryCodes from "country-codes-list";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import InputComponent from "src/components/forms/InputComponent";
import PhoneModal from "src/components/PhoneModal";
import SportIcon from "src/assets/icons/sport-icon";
import ProfilePlaceholder from "components/ProfilePlaceholder";
import Image from "next/image";
import PurchaseModal from "src/components/PurchaseModal";

interface SignInProps { }


interface SelectItemProps {
  
}

interface ContributorItemProps {
  
}
 
const SelectItem: React.FC<SelectItemProps> = () => {
  const [selected, setSelected] = useState<boolean>(false);
  return ( 
    <div 
      className={[
        "flex justify-between items-center py-4 px-4 border rounded overflow-hidden",
        selected ? "border-black" : "border-newsmast-blue-grey"
      ].join(" ")}
      onClick={() => setSelected(pre => !pre)}
    >
      <div className="flex items-center gap-2">
        <div className="p-2" style={{backgroundColor:"#F3FFF9"}}>
          <SportIcon width="2.5rem"/>
        </div>
        <h5 className="font-semibold text-sm">Sport</h5>
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

const ContributorItem: React.FC<ContributorItemProps> = () => {
  const [follow, setFollow] = useState<boolean>(false);
  return (
    <div className="w-full flex gap-2 border-b border-b-newsmast-light-blue py-3">
      <div 
        className="relative border-2 border-newsmast-tab-grey rounded-full" 
        style={{width: "6rem", height: "6rem", padding:"0.5rem", aspectRatio: "1"}}
      >
        <div className="rounded-full overflow-hidden">
        <Image 
          src="/images/profile-sample-1.png" 
          alt=""
          className="w-full"
          width="828"
          height="828"
        />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-end">
          <div className="flex flex-col justify-end">
            <h3 className="font-semibold mb-0">$Name</h3>
            <p className="text-newsmast-grey-3 mt-0">@iwashere</p>
          </div>
          <button 
            type="button"
            className="flex gap-2 items-center border border-newsmast-blue-grey px-5 rounded-full"
            style={{
              height: "2.2rem"
            }}
            onClick={() => setFollow(pre => !pre)}
          >
            Following
            {follow && <BsCheck className="fill-black" />}
          </button>
        </div>
        <p>Some description subtitle goes here if any added</p>
      </div>
    </div>
  )
}

const SignIn: React.FC<SignInProps> = () => {
  const [countryCodesArray, setCountryCodes] = useState<Array<any> | []>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(0);
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCountryCodes(countryCodes.all());
    }
  }, []);

  const handleNext = () => {
    if(tab == 3){
      setShowModal(true);
    }else{
      setTab(pre => {
        return pre + 1;
      })
    }
    
  }

  useEffect(() => {
    if(window){
      const bodyTag = document.querySelector("body") as any;
      bodyTag.style.backgroundColor = "white";
    }
  },[]);

  return (
    <>
      <main className="w-screen h-screen flex flex-col px-5 py-5 box-border relative bg-white text-black">
        <button className="text-3xl text-gray-600 p-3 rounded-full border-2 border-gray-400 w-max h-max flex justify-center items-center" type="button" onClick={() => router.back()}>
          <GoChevronLeft />
        </button>
        <div className="grid grid-cols-4 gap-1 my-7">
            <div 
              className={[
                "w-full bg-black rounded-full",
                tab == 0 ? "bg-black" : "bg-newsmast-tab-grey"
              ].join(" ")} 
              style={{height:"0.5rem"}}
            ></div>
            <div 
              className={[
                "w-full bg-black rounded-full",
                tab == 1 ? "bg-black" : "bg-newsmast-tab-grey"
              ].join(" ")} 
              style={{height:"0.5rem"}}
            ></div>
            <div 
              className={[
                "w-full bg-black rounded-full",
                tab == 2 ? "bg-black" : "bg-newsmast-tab-grey"
              ].join(" ")} 
              style={{height:"0.5rem"}}
            ></div>
            <div 
              className={[
                "w-full bg-black rounded-full",
                tab == 3 ? "bg-black" : "bg-newsmast-tab-grey"
              ].join(" ")} 
              style={{height:"0.5rem"}}
            ></div>
        </div>
        <div className={[
          tab != 0 ? "hidden" : ""
        ].join(" ")}>
          <h3 className="text-2xl font-bold">{"What’s your birth date?"}</h3>
          <p className="text-sm text-newsmast-dark-blue mt-2 mb-5">{"It won’t be public"}</p>
          <InputComponent type="date" label="Date of Birth"/>
        </div>
        <div className={[
          tab != 1 ? "hidden" : ""
        ].join(" ")}>
          <h3 className="text-2xl font-bold">{"Choose communities of interest"}</h3>
          <p className="text-sm text-newsmast-dark-blue mt-2 mb-5">{"Select at least 5"}</p>
          <div className="flex flex-col gap-2 bg-white mb-28">
            <SelectItem/>
            <SelectItem/>
            <SelectItem/>
            <SelectItem/>
            <SelectItem/>
            <SelectItem/>
            <SelectItem/>
            <SelectItem/>
            <SelectItem/>
          </div>
        </div>
        <div className={[
          tab != 2 ? "hidden" : ""
        ].join(" ")}>
          <h3 className="text-2xl font-bold mb-5">{"Choose Primary Interest"}</h3>
          <div className="flex flex-col gap-2 bg-white mb-28">
            <SelectItem/>
            <SelectItem/>
            <SelectItem/>
          </div>
        </div>
        <div className={[
          tab != 3 ? "hidden" : ""
        ].join(" ")}>
          <h3 className="text-2xl font-bold">{"Contributors to follow"}</h3>
          <p className="text-sm text-newsmast-dark-blue mt-2 mb-5">{"We’ve pre-selected the best contributors to follow on your topic"}</p>
          <div className="flex flex-col gap-2 bg-white mb-28">
            <ContributorItem/>
            <ContributorItem/>
            <ContributorItem/>
          </div>
        </div>
        
        
      </main>
     
      <PurchaseModal showModal={showModal} setShowModal={setShowModal} />
      <div className="absolute bottom-0 px-5 py-5 w-full box-border z-50 bg-white reverse-shadow">
        <button 
          className="bg-black py-3 rounded-lg font-semibold text-white w-full" 
          type="button"
          onClick={handleNext}
        >
          Continue
        </button>
      </div>
      
    </>
  );
};

export default SignIn;
