
import { UserContext } from "../../../contexts/userContext";
import { useContext } from "react";

const Header: React.FC = () => {
  const { userData } = useContext(UserContext);

  return (
    <div className="z-10 w-full h-20  flex flex-row scrollbar-hide overflow-auto flex-nowrap items-center justify-end mt-0 py-2 px-8 bg-white shadow-sm ">
      <p className="m-4">{userData?.name}</p>
      <img className="rounded-full w-[50px] h-[50px]" src={userData?.image} alt="avatar" />
    </div>
  );
}

export default Header;