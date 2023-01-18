import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import {GiSpeedometer} from "react-icons/gi";
import {RiHomeFill} from "react-icons/ri";
import {HiOutlineUserGroup} from "react-icons/hi";
import PostComponent from "src/components/PostComponent";
import { FiSend } from "react-icons/fi";

interface HomeProps {
  
}
 
const Home: React.FC<HomeProps> = () => {
  const [tab, setTab] = useState<number>(0);
  useEffect(() => {
    if(window){
      const bodyTag = document.querySelector("body") as any;
      bodyTag.style.backgroundColor = "#fff";
    }
  })
  return (
    <>
      <main className="h-screen w-screen overflow-y-auto text-black">
        <div className="flex flex-col bg-white px-3 py-2">
          <div className="relative flex justify-center items-center h-14">
            {/* avatar */}
            <div className="absolute left-0 flex justify-center items-center font-bold bg-newsmast-light-blue text-black rounded-full" style={{width:"3.5rem", height:"3.5rem"}}>
              <h5>DS</h5>
            </div>
            <h3 className="text-center font-bold 2xl">Home</h3>
            <div className="absolute right-0">
              <GiSpeedometer className="text-2xl" />
            </div>
          </div>
          <div className="w-full flex justify-between rounded-full p-1 bg-newsmast-tab-grey mt-5 items-center">
            <div
              className={[
                "py-2 px-5 text-center",
                tab == 0 ? "bg-white rounded-full" : ""
              ].join(" ")}
              style={{width:"46%"}}
              onClick={() => setTab(0)}
            >
              Following
            </div>
            <div
              className={[
                "py-2 px-5 text-center",
                tab == 1 ? "bg-white rounded-full" : ""
              ].join(" ")}
              style={{width:"51%"}}
              onClick={() => setTab(1)}
            >
              Primary Community
            </div>
          </div>
          
        </div>
        <div className="flex flex-col">
            <PostComponent/>
            <PostComponent/>
          </div>
      </main>
      <div className="fixed top-0 left-0 w-screen h-screen z-50 pointer-events-none">
        <div className="absolute flex justify-between text-center py-5 px-7 bottom-0 bg-white w-full h-20 reverse-shadow pointer-events-auto">
          <RiHomeFill className="text-black text-3xl"/>
          <BiSearchAlt2 className="text-newsmast-grey text-3xl"/>
          <HiOutlineUserGroup className="text-newsmast-grey  text-3xl"/>
          <FiSend className="text-newsmast-grey text-3xl"/>
        </div>
      </div>
    </>
  );
}
 
export default Home;