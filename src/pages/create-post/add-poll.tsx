import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";
import PollModal from "src/components/CreatePostModal/PollModal";

interface PollProps { }

const AddPoll: React.FC<PollProps> = () => {
    const [showModal, setShowModal] = useState<boolean>(true);
    const router = useRouter();

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
                    <h3 className="text-xl font-bold my-5">New Post</h3>
                </div>
            </main>
            <PollModal showModal={showModal} setShowModal={setShowModal} />
        </>
    );
};

export default AddPoll;
