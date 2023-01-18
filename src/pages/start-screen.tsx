import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import AppleIcon from "src/assets/icons/apple-icon";
import GoogleIcon from "src/assets/icons/google-icon";
import TwitterIcon from "src/assets/icons/twitter-icon";
import ProfilePlaceholder from "src/components/ProfilePlaceholder";
import StartScreenDottedLine from "src/vector/start-screen-dotted-line";

interface StartScreenProps {}

const StartScreen: React.FC<StartScreenProps> = () => {
  return (
    <>
      <main className="w-screen h-screen flex flex-col items-center relative">
        <div className="absolute top-0 left-0 w-screen h-screen pointer-events-none">
          <Image src="/images/splash-screen.png" alt="background-image" fill />
        </div>
        <div className="relative grid grid-cols-2 z-10 h-max mt-5">
          <div
            className="flex justify-start items-center"
            style={{ width: "100%", height: "100%" }}
          >
            <h5 className="w-max h-max bg-white text-black px-5 py-2 rounded-full border-2 border-gray-500 shadow-lg">
              Music
            </h5>
          </div>
          <ProfilePlaceholder image="/images/profile-sample-1.png" user="You" />
          <ProfilePlaceholder
            image="/images/profile-sample-2.png"
            user="Lane"
            active
          />
          <div
            className="flex justify-end items-center"
            style={{ width: "100%", height: "100%" }}
          >
            <h5 className="w-max h-max bg-white text-black px-5 py-2 rounded-full border-2 border-gray-500 shadow-lg mt-14">
              Technologies
            </h5>
          </div>
          <div className="absolute" style={{transform:"scale(1.2)"}}>
            <StartScreenDottedLine/>
          </div>
        </div>
        <div className="z-10 w-full h-max flex flex-col items-center mt-10 uppercase font-bold text-2xl">
          <h3>Discover communities </h3>
          <h5>worldwide</h5>
          <p className="text-sm font-normal mt-3">
            Any topic, any time, any place
          </p>
        </div>
        <div className="z-10 w-full h-max grid grid-cols-2 gap-2 box-border px-10 mt-9">
          <button
            className="flex items-center gap-1 bg-white text-black px-5 py-2 rounded-full border-2 border-gray-500 shadow-lg"
            style={{ width: "100%" }}
          >
            <GoogleIcon width={40} />
            Google
          </button>
          <button
            className="flex justify-center items-center gap-2 bg-white text-black px-5 py-2 rounded-full border-2 border-gray-500 shadow-lg"
            style={{ width: "100%" }}
          >
            <TwitterIcon width={30} />
            Twitter
          </button>
          <button
            className="flex justify-center items-center text-center col-span-2 gap-2 bg-white text-black px-5 py-2 rounded-full border-2 border-gray-500 shadow-lg mt-2"
            style={{ width: "100%" }}
          >
            <AppleIcon width={35} />
            Apple ID
          </button>
          <div className="relative flex justify-center col-span-2 text-center py-1">
            <h5 className="w-max bg-">or</h5>
            <div className="border-t absolute top-4 left-0 border-white" style={{width: "40%"}}></div>
            <div className="border-t absolute top-4 right-0 border-white" style={{width: "40%"}}></div>
          </div>
          <Link
            href="/create-account"
            className="flex justify-center items-center text-center col-span-2 gap-2 text-md font-bold bg-primary text-white px-5 py-3 rounded-lg shadow-lg mt-3"
            style={{ width: "100%" }}
          >
            Create Account
          </Link>
          <div className="col-span-2 flex justify-center items-center gap-3 my-3">
            <p className="text-white">Already have an account?</p>
            <Link href="/sign-in" className="text-white px-5 py-2 border border-white rounded-full text-sm">
              Sign In
            </Link>
          </div>
          <div className="col-span-2 text-center">
            <p className="text-gray-500">
              By continuing you agree to our <Link href="/" className="text-primary">Terms & Conditions, Privacy Policy</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default StartScreen;
