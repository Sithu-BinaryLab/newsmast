import React from "react";

interface ChooseAudienceModalProps {
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
    return "absolute w-screen  pointer-events-auto flex flex-col bg-white z-50 audience-modal mt-96 " + status
  }
}

const AudienceModal: React.FC<ChooseAudienceModalProps> = (props) => {
  const { showModal, setShowModal } = props;
  const audiences = [
    { type: "Unlisted" },
    { type: "Public" },
    { type: "Followers Only" },
    { type: "Mentioned people only" },
  ]
  return (
    <div className={styles.createPostModalContainer(showModal)} onClick={() => { setShowModal(false) }}>
      <div className={styles.createPostModal(showModal)} onClick={(e) => { e.stopPropagation(); }}>
        <div className="box-border">
          <label className="font-bold px-5">Choose audience:</label>
          <ul>
            {audiences.map((audience, index) => (
              <div key={index}>
                <li className="text-black" key={1}>
                  <div>
                    <label className="px-5">{audience.type}</label>
                  </div>
                </li>
                {audience.type !== "Mentioned people only" && <hr />}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AudienceModal;
