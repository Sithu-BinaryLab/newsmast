import React from "react";
import { useRouter } from "next/router";

interface PollModalProps {
  showModal: boolean;
  setShowModal: (modal: boolean) => void;
}

const styles = {
  pollModalContainer: (showModal: boolean) => {
    const pointerEvent = showModal ? "pointer-events-auto show" : "pointer-events-none hidden"
    return "fixed top-0 left-0 w-screen h-screen z-50 phone-modal-container " + pointerEvent;
  },
  pollModal: (showModal: boolean) => {
    const status = showModal ? "show" : "hide";
    return "w-screen h-screen pointer-events-auto flex flex-col bg-white z-50 phone-modal " + status
  }
}

const PollModal: React.FC<PollModalProps> = (props) => {
  const { showModal, setShowModal } = props;
  const router = useRouter();
  const goBack = () => {
    router.back();
  }
  return (
    <div className={styles.pollModalContainer(showModal)} onClick={() => { setShowModal(false) }}>
      <div className={styles.pollModal(showModal)} onClick={(e) => { e.stopPropagation(); }}>
        <div className="px-5 box-border">
          <div className="relative w-full flex justify-between items-center box-border text-slate-500">
            <p className="text-sm my-5" onClick={goBack}>Cancel</p>
            <p className="text-sm my-5">Create</p>
          </div>
          <h3 className="text-xl font-bold mb-3">Create a Poll</h3>
          <textarea className="w-full bg-white post-reply-input px-3 outline-none text-sm text-slate-500" placeholder="Ask a question..."></textarea>
        </div>
        <div className="border-2 border-gray-200 bg-gray-100 flex justify-between px-5 py-3.5 mx-3 rounded-md text-slate-500">
          <p className="text-sm">Option 1</p>
          <p className="text-sm">25</p>
        </div>
        <div className="border-2 border-gray-200 bg-gray-100 flex justify-between px-5 py-3.5 mx-3 my-3 rounded-md text-slate-500">
          <p className="text-sm">Option 2</p>
          <p className="text-sm">25</p>
        </div>
        <div className="flex justify-end">
          <div className="border-2 py-1 px-4 w-32 text-center rounded-full mr-3">
            <span className="mr-1 text-sm">Add option</span>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 px-5 pt-2 pb-5 bg-white border-t-2 border-gray-100">
          <div className="flex justify-between space-x-2 mt-3">
            <div className="flex-1 rounded-md text-sm">Poll Duration</div>
            <div className=" flex-1 rounded-md text-right text-sm">
              <button className="px-4 inline-flex items-center">
                <span className="mr-5 text-blue-600">6 hr</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollModal;
