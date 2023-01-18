import { GoChevronLeft } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { HiGift } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { TfiList } from "react-icons/tfi";
import { useState } from "react";
import { useRouter } from 'next/router';
import AudienceModal from "src/components/CreatePostModal/AudienceModal";
import ReplyLimitationModal from "src/components/CreatePostModal/ReplyLimitation";
import AccessLocationModal from "src/components/CreatePostModal/AccessLocationModal";

interface CreatePostModalProps {

}

const styles = {
    publishButton: (open: boolean) => {
        const state = open ? "text-newsmast-grey pr-3" : "hidden";
        return state;
    },
    replyModal: (open: boolean) => {
        const state = open ? "top-24 border-t broder-t-newsmast-blue-grey" : "reverse-shadow"
        return ["absolute bottom-0 px-4 py-2 bg-white w-full ", state].join(" ")
    },
    inputIcons: (open: boolean) => {
        const state = open ? "bottom-0" : "top-0"
        return ["flex w-full left-0 flex justify-between py-2", state].join(" ")
    },
    homeIcon: () => {
        return [""]
    }
}

const CreatePost: React.FC<CreatePostModalProps> = () => {
    const [open, setOpen] = useState<boolean>(true);
    const [isOpenUnListedBox, setIsOpenUnlistedBox] = useState<boolean>(false);
    const [isOpenReplyLimitBox, setIsOpenReplayLimitBox] = useState<boolean>(false);
    const [isOpenLocationAccBox, setIsOpenLocationAccBox] = useState<boolean>(false);
    
    const router= useRouter();

    const goToPoll = () => {
        router.push("/create-post/add-poll");
    }
    const goToAttachment = () => {
        router.push("create-post/add-attachments");
    }

    return (
        <div className="relative fixed top-0 left-0 w-screen h-screen z-50">
            <div className="w-full flex justify-between items-center box-border">
                <button className="text-xl text-gray-600 p-3 ml-3 rounded-full border-2 border-gray-400 w-max h-max flex justify-center items-center" type="button" onClick={() => router.back()}>
                    <GoChevronLeft />
                </button>
                <h3 className="text-xl font-bold my-8">New Post</h3>
                <div className={styles.publishButton(open)}>
                    Publish
                </div>
            </div>
            <div className={styles.replyModal(open)} style={{ minHeight: "5rem" }}>
                <div className="flex justify-start my-3">
                    <div className="dropdown inline-block relative">
                        <div className="cursor-pointer border-2 py-1 px-4 rounded-full inline-flex items-center"
                            onClick={() => setIsOpenUnlistedBox(!isOpenUnListedBox)}
                        >
                            <span className="mr-1">Unlisted</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </div>
                        {
                            isOpenUnListedBox && (
                                <AudienceModal showModal={isOpenUnListedBox} setShowModal={setIsOpenUnlistedBox} />

                            )
                        }
                    </div>
                    <div className="dropdown inline-block relative ml-2">
                        <button className=" border-2 py-1 px-4 rounded-full inline-flex items-center"
                            onClick={() => setIsOpenReplayLimitBox(!isOpenReplyLimitBox)}
                        >
                            <span className="mr-1">Anyone can reply</span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                        {
                            isOpenReplyLimitBox && (
                                <ReplyLimitationModal showModal={isOpenReplyLimitBox} setShowModal={setIsOpenReplayLimitBox} />

                            )
                        }
                    </div>
                </div>
                <textarea onClick={() => setIsOpenLocationAccBox(true)} className="w-full bg-white post-reply-input px-3 outline-none" placeholder="Start Typing here..."></textarea>
            </div>
            {
                isOpenLocationAccBox && (
                    <AccessLocationModal showModal={isOpenLocationAccBox} setShowModal={setIsOpenLocationAccBox} />
                )
            }
            <div className="w-full absolute bottom-0 px-5">
                <div className={styles.inputIcons(open)}>
                    <div className="flex justify-between w-full">
                        <div className="flex gap-4 items-center">
                            <BsImage className="fill-newsmast-dark-blue text-2xl" onClick={goToAttachment}/>
                            <HiGift className="fill-newsmast-dark-blue text-2xl" />
                            <GrLocation className="fill-newsmast-dark-blue text-2xl" />
                            <TfiList className="fill-newsmast-dark-blue text-2xl" onClick={goToPoll}/>
                        </div>
                        <div className="text-newsmast-grey">
                            Add Thread
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;