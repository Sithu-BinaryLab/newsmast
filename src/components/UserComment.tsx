import Image from "next/image";
import Link from "next/link";
import { BiBellOff, BiCheck, BiLinkAlt, BiUpload } from "react-icons/bi";
import { FiHeart, FiMoreVertical, FiRefreshCw } from "react-icons/fi";
import { GoCommentDiscussion } from "react-icons/go";
import { ImBlocked } from "react-icons/im";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineReportProblem } from "react-icons/md";

interface UserCommentProps {
  
}
 
const UserComment: React.FC<UserCommentProps> = () => {
  return ( 
    <div className="py-3">
      <div className="flex justify-between px-3">
        <div className="flex items-center gap-1">
          <div
            className="rounded-full overflow-hidden"
            style={{ width: "3.5rem" }}
          >
            <Image
              src="/images/profile-sample-1.png"
              alt=""
              className="w-full"
              width="828"
              height="828"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold">The Profile</h3>
            <p className="text-sm text-newsmast-grey-3">
              @theprofile &nbsp; 4h ago
            </p>
          </div>
        </div>
        <div className="flex items-center">
        <button className="relative group" type="button">
            <FiMoreVertical className="text-2xl stroke-newsmast-grey" />
            <ul
              className="absolute flex-col top-10 right-0 bg-white rounded-lg overflow-hidden w-max border border-newsmast-light-blue shadow hidden group-focus:flex"
              style={{ minWidth: "10rem", marginRight: "-0.5rem" }}
            >
              <li className="flex gap-2 items-center px-5 py-3 text-black border-b border-b-newsmast-light-blue">
                Following <BiCheck />
              </li>
              <li className="flex gap-2 items-center px-2 py-3 text-lg text-newsmast-dark-blue border-b border-b-newsmast-light-blue">
                <ImBlocked /> Block
              </li>
              <li className="flex gap-2 items-center px-2 py-3 text-lg text-newsmast-dark-blue border-b border-b-newsmast-light-blue">
                <MdOutlineReportProblem /> Report
              </li>
              <li className="flex gap-2 items-center px-2 py-3 text-lg text-newsmast-dark-blue border-b border-b-newsmast-light-blue">
                <BiBellOff /> Mute User
              </li>
              <li className="flex gap-2 items-center px-2 py-3 text-lg text-newsmast-dark-blue border-b border-b-newsmast-light-blue">
                <IoLanguage /> Translate to my language
              </li>
              <li className="flex gap-2 items-center px-2 py-3 text-lg text-newsmast-dark-blue">
                <BiLinkAlt /> Mute Whole Domain (Entertainment)
              </li>
            </ul>
          </button>
        </div>
      </div>
      <div className="flex flex-col px-3 pt-2">
        <h5 className="text-newsmast-grey-3 text-sm">
          {"Replying to >"}&nbsp;
          <Link className="text-newsmast-primary" href="/" passHref>
            @lucy
          </Link>
        </h5>
        <p className="text-newsmast-dark-blue">Idk what that means</p>
      </div>
      <div className="flex justify-between px-3 py-3 border-b border-b-newsmast-blue-grey">
          <div className="flex gap-7">
            <Link href="/post" className="flex gap-2 text-newsmast-grey items-center">
              <GoCommentDiscussion className="text-2xl " />
              546
            </Link>
            <div className="flex gap-2 text-newsmast-grey items-center">
              <FiRefreshCw className="text-1xl " />
              546
            </div>
            <div className="flex gap-2 text-newsmast-grey items-center">
              <FiHeart className="text-1xl " />
              546
            </div>
          </div>
          <BiUpload className="text-2xl text-newsmast-grey" />
        </div>
    </div>
   );
}
 
export default UserComment;