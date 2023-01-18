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

interface SignInProps { }

const SignIn: React.FC<SignInProps> = () => {
  const [countryCodesArray, setCountryCodes] = useState<Array<any> | []>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tab, setTab] = useState<"email" | "phone">("email");
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCountryCodes(countryCodes.all());
    }
  }, []);

  const handlePhoneClick = () => {
    setShowModal(true)
  }

  return (
    <>
      <main className="w-screen h-screen flex flex-col px-5 py-5 box-border relative bg-white text-black">
        <button className="text-3xl text-gray-600 p-3 rounded-full border-2 border-gray-400 w-max h-max flex justify-center items-center" type="button" onClick={() => router.back()}>
          <GoChevronLeft />
        </button>
        <h3 className="text-3xl font-bold my-5 uppercase">Login</h3>
        <div className="p-1 w-max h-max bg-newsmast-tab-grey flex gap-2 rounded-full overflow-hidden">
          <button
            className={[
              "px-7 py-2 rounded-full",
              tab == "email" ? "bg-white shadow" : "",
            ].join(" ")}
            type="button"
            onClick={() => setTab("email")}
          >
            Email
          </button>
          <button
            className={[
              "px-7 py-2 rounded-full",
              tab == "phone" ? "bg-white shadow" : "",
            ].join(" ")}
            type="button"
            onClick={() => setTab("phone")}
          >
            Phone Number
          </button>
        </div>
        { 
        (tab == "email") ? (
            <InputComponent label="Email" />
          ) : (
            <div className={["flex justify-between box-border"].join(" ")}>
              <div className="bg-newsmast-very-light-blue text-gray-800 placeholder:text-gray-800 px-5 py-5 mt-5 rounded-lg" style={{ width: "27%" }} onClick={handlePhoneClick}>
                🇲🇲 +950
              </div>
              <input
                className="bg-newsmast-very-light-blue text-gray-800 placeholder:text-gray-800 px-5 py-5 mt-5 rounded-lg col-span-3"
                placeholder="000-00-00"
                type="text"
                style={{ width: "71%" }}
              />
              {/* <InputComponent label=""/> */}
            </div>
          )
        }
        
        
        {/* <input
          className="bg-gray-200 text-gray-800 placeholder:text-gray-800 px-5 py-5 mt-3 rounded-lg"
          placeholder="Password"
          type="password"
        /> */}
        <InputComponent label="Password" type="password" />

        <div className="w-ful flex justify-end py-5">
          <Link className="text-newsmast-primary text-right" href="/">
            Forgot your password?
          </Link>
        </div>
        <button className="px-5 py-4 bg-black text-white rounded-lg">
          Login
        </button>

        <div className="relative flex justify-center w-full">
          <p className="text-center py-5 text-gray-700 z-10 w-max bg-white px-4">
            or
          </p>
          <div className="absolute top-8 border-t border-gray-500 w-full"></div>
        </div>
        <div className="flex justify-center gap-3 mt-3">
          <Link className="p-1 border-2 border-gray-300 rounded-full" href="/">
            <AppleIcon width={40} />
          </Link>
          <Link className="p-2 border-2 border-gray-300 rounded-full" href="/">
            <TwitterIcon width={30} />
          </Link>
          <Link className="p-1 border-2 border-gray-300 rounded-full" href="/">
            <GoogleIcon width={40} />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-3 fixed bottom-10 w-full">
          <p>{"Don't have account yet?"}</p>
          <Link
            className="px-5 py-2 border-2 border-gray-200 rounded-full"
            href="/create-account"
          >
            Create
          </Link>
        </div>
        
      </main>
      <PhoneModal showModal={showModal} setShowModal={setShowModal}/>
    </>
  );
};

export default SignIn;
