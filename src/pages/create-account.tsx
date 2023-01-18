import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GoChevronLeft } from "react-icons/go";
import AppleIcon from "src/assets/icons/apple-icon";
import GoogleIcon from "src/assets/icons/google-icon";
import TwitterIcon from "src/assets/icons/twitter-icon";

interface CreateAccountProps { }

const CreateAccount: React.FC<CreateAccountProps> = () => {
  const [tab, setTab] = useState<"email" | "phone">("email");
  const router = useRouter();
  return (
    <>
      <main className="w-screen h-screen flex flex-col px-5 py-5 box-border relative bg-white text-black">
        <button className="text-3xl text-gray-600 p-3 rounded-full border-2 border-gray-400 w-max h-max flex justify-center items-center" type="button" onClick={() => router.back()}>
          <GoChevronLeft />
        </button>
        <h3 className="text-3xl font-bold my-5">Create Account</h3>
        <div className="p-1 w-max h-max bg-gray-300 flex gap-2 rounded-full overflow-hidden">
          <button
            className={["px-7 py-2 ", tab == "email" ? "bg-white rounded-full" : ""].join(" ")}
            onClick={() => setTab("email")}>Email</button>
          <button
            className={["px-7 py-2", tab == "phone" ? "bg-white rounded-full" : ""].join(" ")}
            onClick={() => setTab("phone")}>Phone Number</button>
        </div>
        <input className={["bg-gray-200 text-gray-800 placeholder:text-gray-800 px-5 py-5 mt-5 rounded-lg", tab !== "email" ? "hidden" : ""].join(" ")} placeholder="Email" type="text" />
        <div className={["flex justify-between box-border", , tab != "phone" ? "hidden" : ""].join(" ")}>
          <div className="bg-gray-200 text-gray-800 placeholder:text-gray-800 px-5 py-5 mt-5 rounded-lg" style={{ width: "27%" }}>
            🇲🇲 +950
          </div>
          <input
            className="bg-gray-200 text-gray-800 placeholder:text-gray-800 px-5 py-5 mt-5 rounded-lg col-span-3"
            placeholder="000-00-00"
            type="text"
            style={{ width: "71%" }}
          />
        </div>
        <input className="bg-gray-200 text-gray-800 placeholder:text-gray-800 px-5 py-5 mt-3 rounded-lg" placeholder="Username" type="email" />
        <input className="bg-gray-200 text-gray-800 placeholder:text-gray-800 px-5 py-5 mt-3 rounded-lg" placeholder="Password" type="password" />
        <input className="bg-gray-200 text-gray-800 placeholder:text-gray-800 px-5 py-5 mt-3 rounded-lg" placeholder="Repeat Password" type="password" />
        <Link href="sign-up" className="px-5 py-4 text-center bg-black text-white rounded-lg mt-5">
          Create Account
        </Link>
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
        <div className="flex justify-center items-center gap-3 mt-5">
          <p>Already have an account ?</p>
          <Link className="px-5 py-2 border-2 border-gray-200 rounded-full" href="/sign-in">Sign In</Link>
        </div>
      </main>
    </>
  );
};

export default CreateAccount;
