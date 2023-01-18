import InputComponent from "./forms/InputComponent";
import countryCodes from "country-codes-list";
import SearchBox from "./forms/SearchBox";
import Link from "next/link";
import ProfilePlaceholder from "./ProfilePlaceholder";
import { BsCheck } from "react-icons/bs";

interface PurchaseModalProps {
  showModal: boolean;
  setShowModal: (modal: boolean) => void;
}

const styles = {
  PurchaseModalContainer: (showModal: boolean) => {
    const pointerEvent = showModal
      ? "pointer-events-auto show"
      : "pointer-events-none hidden";
    return (
      "fixed top-0 left-0 w-screen h-screen z-50 purchase-modal-container " +
      pointerEvent
    );
  },
  PurchaseModal: (showModal: boolean) => {
    const status = showModal ? "show" : "hide";
    return (
      "absolute top-0 left-0 w-screen h-screen pointer-events-auto flex flex-col bg-white z-50 purchase-modal " +
      status
    );
  },
};

const PurchaseModal: React.FC<PurchaseModalProps> = (props) => {
  const { showModal, setShowModal } = props;
  return (
    <div
      className={styles.PurchaseModalContainer(showModal)}
      onClick={() => {
        setShowModal(false);
      }}
    >
      <div
        className={styles.PurchaseModal(showModal)}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="pt-2 pb-10">
          <div className="flex justify-end px-5">
            <Link className="font-light" href="/purchase">
              Maybe later
            </Link>
          </div>
        </div>
        <div className="px-5">
          <h1 className="text-3xl font-bold tracking-wider mb-1">
            Unlimited Content
          </h1>
          <h1 className="text-3xl font-bold tracking-wider">
            Whenever you need it.
          </h1>
          <p className="pt-5 pb-3 pr-5">
            Support our project by a donation or subscription
          </p>
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="border-2 border-white rounded-full">
                  <BsCheck className="text-2xl" />
                </div>
                <h3 className="text-2xl font-light">Ad-free</h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="border-2 border-white rounded-full">
                  <BsCheck className="text-2xl" />
                </div>
                <h3 className="text-2xl font-light">Unique badge</h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="border-2 border-white rounded-full">
                  <BsCheck className="text-2xl" />
                </div>
                <h3 className="text-2xl font-light">No limits</h3>
              </div>
            </div>
            <div>
              <ProfilePlaceholder
                image="/images/profile-sample-1.png"
                user=""
              />
            </div>
          </div>
          <div className="flex justify-center gap-3 py-3 mt-5">
            <div className="relative bg-newsmast-black-lighter px-7 py-8 rounded-lg border border-white">
              <div 
                className="absolute flex w-full justify-center top-0 left-0 self-center"
                style={{marginTop: "-0.7rem"}}
              >
                <div className="text-sm px-2 py-1 text-newsmast-primary bg-white w-max rounded">
                  BEST VALUE
                </div>
              </div>
              <p className="text-xl">1 year</p>
              <h3 className="text-3xl font-bold pt-1 pb-2">$99.99</h3>
              <p className="text-sm">$8.33/month</p>
            </div>
            <div className="relative bg-newsmast-black-lighter px-7 py-8 rounded-lg border border-transparent">
              <p className="text-xl">1 year</p>
              <h3 className="text-3xl font-bold pt-1 pb-2">$99.99</h3>
              <p className="text-sm">$8.33/month</p>
            </div>
          </div>
          <div className="flex w-full justify-center mt-2">
            <Link 
              href="/payment"
              className="py-2 text-center rounded-lg"
              style={{
                width: "90%",
                backgroundColor:"rgba(255, 255, 255, 0.1)",
              }}
            >
              Single Donation Option
            </Link>
          </div>
          <p className="text-center py-5">
            By purchasing you agree to our &nbsp;
            <Link className="text-newsmast-primary" href="/">
              Terms & Conditions, Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
