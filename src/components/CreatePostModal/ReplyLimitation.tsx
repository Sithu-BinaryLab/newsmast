import React from "react";

interface ReplyLimitationModalProps {
  showModal: boolean;
  setShowModal: (modal: boolean) => void;
}

const styles = {
  replyModalContainer: (showModal: boolean) => {
    const pointerEvent = showModal ? "pointer-events-auto show" : "pointer-events-none hidden"
    return "fixed top-0 left-0 w-screen h-screen z-50 audience-modal-container " + pointerEvent;
  },
  replyModal: (showModal: boolean) => {
    const status = showModal ? "show" : "hide";
    return "absolute  w-screen  pointer-events-auto flex flex-col bg-white z-50 audience-modal mt-96 " + status
  }
}

const ReplyLimitationModal: React.FC<ReplyLimitationModalProps> = (props) => {
  const { showModal, setShowModal } = props;
  const replyLimitList = [
    { type: "Anyone" },
    { type: "People you follow" },
    { type: "Followers Only" },
    { type: "Mentioned people only" },
  ]

  return (
    <div className={styles.replyModalContainer(showModal)} onClick={() => { setShowModal(false) }}>
      <div className={styles.replyModal(showModal)} onClick={(e) => { e.stopPropagation(); }}>
      <div className="box-border">
          <label className="font-bold px-5">Who can reply:</label>
          <ul>
            {replyLimitList.map((reply,index) => (
              <div key={index}>
                <li className="text-black" key={1}>
                  <div>
                    <label className="px-5">{reply.type}</label>
                  </div>
                </li>
                {reply.type !== "Mentioned people only" && <hr />}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReplyLimitationModal;
