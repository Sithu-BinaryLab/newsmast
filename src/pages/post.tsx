import Link from "next/link";
import { GoChevronLeft, GoCommentDiscussion } from "react-icons/go";
import AppleIcon from "src/assets/icons/apple-icon";
import GoogleIcon from "src/assets/icons/google-icon";
import TwitterIcon from "src/assets/icons/twitter-icon";
import getCountryPhoneNumber from "src/utils/getCountryPhoneNumbers";
import countryCodes from "country-codes-list";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import InputComponent from "src/components/forms/InputComponent";
import PhoneModal from "src/components/PhoneModal";
import PostComponent from "src/components/PostComponent";
import { FiHeart, FiRefreshCw } from "react-icons/fi";
import { BiBookmark, BiUpload } from "react-icons/bi";
import UserComment from "src/components/UserComment";
import PostReplyModal from "src/components/PostReplyModal";

interface PostProps { }

const Post: React.FC<PostProps> = () => {
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
      <main className="w-screen h-screen flex flex-col py-5 box-border relative bg-white text-black">
        <div className="relative w-full flex justify-center items-center box-border">
          <button className="absolute left-0 text-xl text-gray-600 p-3 ml-3 rounded-full border-2 border-gray-400 w-max h-max flex justify-center items-center" type="button" onClick={() => router.back()}>
            <GoChevronLeft />
          </button>
          <h3 className="text-xl font-bold my-5 uppercase">Post</h3>
        </div>
        <PostComponent hideIcons/>
        <div className="px-3 py-2">
          <div className="flex gap-3 items-center text-lg text-newsmast-grey-2">
            <span>#tag</span>
            <span>#tag</span>
            <span>#tag</span>
            <span>#tag</span>
          </div>
          <div className="text-newsmast-grey-3 text-xl py-2">
            {"07:00 AM > 15:02.2022"}
          </div>
          <div className="flex gap-5 text-newsmast-grey">
            <div className="flex gap-2 items-center">
              <span className="text-newsmast-grey-3 text-lg">546</span>
              Comments
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-newsmast-grey-3 text-lg">546</span>
              Quotes
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-newsmast-grey-3 text-lg">546</span>
              Likes
            </div>
          </div>
        </div>
        <div className="flex justify-between py-3 gap-5 mx-3 box-border border-y border-y-newsmast-blue-grey text-newsmast-grey">
          <GoCommentDiscussion className="text-2xl " />
          <FiRefreshCw className="text-2xl " />
          <FiHeart className="text-2xl " />
          <BiBookmark className="text-2xl " />
          <BiUpload className="text-2xl" />
        </div>
        <div className="flex flex-col">
          <UserComment/>
          <UserComment/>
          <UserComment/>
        </div>
        
      </main>
      <PostReplyModal/>
    </>
  );
};

export default Post;
