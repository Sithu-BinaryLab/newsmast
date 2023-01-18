import React from "react";
import TwitterIcon from "src/assets/icons/twitter-icon";

interface AccessLocationModalProps {
    showModal: boolean;
    setShowModal: (modal: boolean) => void;
}

const styles = {
    createPostModalContainer: (showModal: boolean) => {
        const pointerEvent = showModal ? "pointer-events-auto show" : "pointer-events-none hidden"
        return "fixed top-0 left-0 w-screen h-screen z-50 audience-modal-container " + pointerEvent;
    },
    createPostModal: (showModal: boolean) => {
        const status = showModal ? "show" : "hide";
        return "absolute  w-screen  pointer-events-auto flex flex-col bg-white z-50 audience-modal mt-64 " + status
    }
}

const AccessLocationModal: React.FC<AccessLocationModalProps> = (props) => {
    const { showModal, setShowModal } = props;
    return (
        <div className={styles.createPostModalContainer(showModal)} onClick={() => { setShowModal(false) }}>
            <div className={styles.createPostModal(showModal)} onClick={(e) => { e.stopPropagation(); }}>
                <div className="px-5 box-border flex flex-col gap-8 py-4">
                    <div className="d-flex">
                        <div className="flex justify-center px-5 py-10">
                            <TwitterIcon width={50} />
                        </div>
                        <div className="flex justify-center font-bold text-md">Location Access</div>
                    </div>
                    <div className="flex text-center">
                        It will help us enhance your experience and collect a necessay data to show your post to more accurate audience
                    </div>
                    <div className="bg-black text-white rounded-md text-center text-md p-3" onClick={() => { setShowModal(false) }}>
                        ok
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccessLocationModal;
