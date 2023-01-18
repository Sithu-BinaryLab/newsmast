import { FaExpandAlt } from "react-icons/fa";
import { BsImage } from "react-icons/bs";
import { HiGift } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { TfiList } from "react-icons/tfi";
import { FiMinimize2 } from "react-icons/fi";
import { useState } from "react";

interface AddPoolModalProps {

}

const styles = {
  publishButton: (open: boolean) => {
    const state = open ? "absolute text-newsmast-grey right-5 top-10" : "hidden";
    return state;
  },
  replyModal: (open: boolean) => {
    const state = open ? "top-24 border-t broder-t-newsmast-blue-grey" : "reverse-shadow"
    return ["absolute bottom-0 px-4 py-2 bg-white w-full ", state].join(" ")
  },
  inputIcons: (open: boolean) => {
    const state = open ? "bottom-10" : "top-0"
    return ["absolute w-full left-0 flex justify-between py-2", state].join(" ")
  }
}

const AddPostModal: React.FC<AddPoolModalProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <div className={styles.publishButton(open)}>
        Publish
      </div>
      <div className={styles.replyModal(open)} style={{ minHeight: "5rem" }}>
        <div className="relative">
          {
            open ? (
              <>
                <textarea className="w-full bg-white post-reply-input px-3 outline-none" placeholder="Post your reply..."></textarea>
                <FiMinimize2
                  className="absolute top-2 right-3 stroke-newsmast-dark-blue fill-newsmast-dark-blue text-xl"
                  onClick={() => setOpen(false)}
                />
              </>
            ) : (
              <>
                <input className="w-full bg-newsmast-tab-grey post-reply-input px-3 outline-none" placeholder="Post your reply..." />
                <FaExpandAlt
                  className="absolute top-2 right-3 fill-newsmast-dark-blue text-xl"
                  onClick={() => setOpen(true)}
                />
              </>
            )
          }

        </div>
        <div className="relative" style={{ height: "100%" }}>
          <div className={styles.inputIcons(open)}>
            <div className="flex gap-4 items-center">
              <BsImage className="fill-newsmast-dark-blue text-2xl" />
              <HiGift className="fill-newsmast-dark-blue text-2xl" />
              <GrLocation className="fill-newsmast-dark-blue text-2xl" />
              <TfiList className="fill-newsmast-dark-blue text-2xl" />
            </div>
            <div className="text-newsmast-grey">
              Publish
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPostModal;