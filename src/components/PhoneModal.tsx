import InputComponent from "./forms/InputComponent";
import countryCodes from "country-codes-list";
import SearchBox from "./forms/SearchBox";

interface PhoneModalProps {
  showModal: boolean;
  setShowModal: (modal:boolean) => void;
}

const styles = {
  phoneModalContainer: (showModal:boolean) => {
    const pointerEvent = showModal ? "pointer-events-auto show" : "pointer-events-none hidden"
    return "fixed top-0 left-0 w-screen h-screen z-50 phone-modal-container " + pointerEvent;
  },
  phoneModal: (showModal:boolean) => {
    const status = showModal ? "show" : "hide";
    return "absolute top-0 left-0 w-screen h-screen pointer-events-auto flex flex-col bg-white z-50 phone-modal " + status
  }
}

const PhoneModal: React.FC<PhoneModalProps> = (props) => {
  const {showModal, setShowModal} = props;
  return (
    <div className={styles.phoneModalContainer(showModal)} onClick={() => {setShowModal(false)}}>
      <div className={styles.phoneModal(showModal)} onClick={(e) => {e.stopPropagation();}}>
        <div className="px-5 box-border">
          <SearchBox />
          <ul>
            {countryCodes.all().map((item,index) => (
              <li className="text-black" key={index}>{`${item.flag} ${item.countryNameLocal}`}</li>
            ))}
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PhoneModal;
