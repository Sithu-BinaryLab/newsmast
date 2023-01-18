import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

//images
import SpaceIcon from "src/assets/icons/space-icon";

interface PollModalProps {
    showModal: boolean;
    setShowModal: (modal: boolean) => void;
}

const styles = {
    attachmentModalContainer: (showModal: boolean) => {
        const pointerEvent = showModal ? "pointer-events-auto show" : "pointer-events-none hidden"
        return "fixed top-0 left-0 w-screen h-screen z-50 phone-modal-container " + pointerEvent;
    },
    attachmentModal: (showModal: boolean) => {
        const status = showModal ? "show" : "hide";
        return "bg-gray-100 w-screen h-screen pointer-events-auto flex flex-col bg-white z-50 phone-modal " + status
    }
}

const PollModal: React.FC<PollModalProps> = (props) => {
    const { showModal, setShowModal } = props;
    const [getPhoto, setGetPhoto] = useState(false);

    const router = useRouter();
    const goBack = () => {
        router.back();
    }
    return (
        <div className={styles.attachmentModalContainer(showModal)} onClick={() => { setShowModal(false) }}>
            <div className={styles.attachmentModal(showModal)} onClick={(e) => { e.stopPropagation(); }}>
                <div className="px-5 box-border">
                    <div className="relative w-full flex justify-between items-center box-border text-slate-500">
                        <p className="text-sm my-5" onClick={goBack}>Cancel</p>
                        <p className="text-sm my-5 text-gray-300">Add</p>
                    </div>
                </div>
                {!getPhoto ?
                    <div className="flex mt-36">
                        <div className="m-auto text-center">
                            <h3 className="text-xl font-bold ">No files to access</h3>
                            <p className="text-sm">We have access only to assets <br />that you allowed</p>
                            <div className="border-2 py-1 px-4 w-32 rounded-full ml-10 mt-5">
                                <span className="mr-1 text-sm">Manage</span>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="mx-5">
                        <h3 className="text-xl font-bold">Photos</h3>
                        <div className="flex justify-between my-3">
                            <p className="text-sm">We have access only to assets <br />that you allowed</p>
                            <div className="border-2 py-1  h-10 px-4 rounded-full">
                                <span className="mr-1 my-auto text-sm">Manage</span>
                            </div>
                        </div>
                        <div className="flex justify-center"><SpaceIcon width="5rem" /></div>
                    </div>
                }

                <div className="absolute inset-x-0 bottom-0 px-5 pt-2 pb-5 bg-white">
                    <div className="flex justify-between text-center space-x-2">
                        <div className="border-2 border-gray-100 py-2 flex-1 rounded-md text-sm" onClick={() => setGetPhoto(true)}>Take a photo</div>
                        <div className="border-2 border-gray-100 py-2 flex-1 rounded-md text-sm" onClick={() => setGetPhoto(true)}>Open Gallery</div>
                    </div>
                    <div className="border-2 border-gray-100 px-8 py-2 mt-2 text-center rounded-md text-sm">Add file</div>
                </div>
            </div>
        </div>
    );
};

export default PollModal;
