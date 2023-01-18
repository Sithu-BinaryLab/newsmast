import Image from "next/image";
import { BsCheck } from "react-icons/bs";

interface ProfilePlaceholderProps {
  image: string;
  user?: string;
  active?: boolean;
}

const ProfilePlaceholder: React.FC<ProfilePlaceholderProps> = ({
  image,
  user,
  active,
}) => {
  return (
    <div className={["profile-placeholder", active ? "active" : ""].join(" ")}>
      <div className="white-circle"></div>
      <div className="image-container">
        <Image src={image} alt="background-image" fill />
      </div>
      <div 
        className={[
          "check-icon-container",
          !user ? "without-user" : ""
        ].join(" ")}
      >
        <div className="check-icon">
          <div className="check-icon-placeholder-container">
            <div className="check-icon-placeholder"></div>
          </div>
          <BsCheck />
        </div>
      </div>
      {user && (
        <div className="user">
          <h5>{user}</h5>
        </div>
      )}
    </div>
  );
};

export default ProfilePlaceholder;
