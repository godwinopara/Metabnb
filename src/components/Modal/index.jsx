import { IoMdClose } from "react-icons/io";
import Arrow from "./assets/arrow.svg";
import Meta from "./assets/meta.svg";
import WallectConnect from "./assets/wallet-connect.svg";

const Modal = ({ toggleModal, modalOpen }) => {
  return (
    <>
      {modalOpen && (
        <div className="fixed inset-0 h-screen bg-[#4040404d] flex justify-center ">
          <div className="w-[90%] md:w-3/5 lg:w-1/2 xl:w-[40%] h-[360px] mt-[200px] bg-white rounded-2xl">
            <div className="flex justify-between px-8 py-6 border-b text-2xl">
              <h3 className="font-bold">Connect Walllet</h3>
              <div onClick={toggleModal} className="cursor-pointer">
                <IoMdClose />
              </div>
            </div>
            <div className="p-8">
              <p className="text-[#333333]">Connect your preferred wallet:</p>
              <div className="flex items-center justify-between px-5 py-3 border border-[#CFD8DC] mt-4 rounded-xl">
                <div className="w-[40%]">
                  <img src={Meta} alt="" />
                </div>
                <div className="w-[40%] flex justify-end">
                  <img src={Arrow} alt="" />
                </div>
              </div>
              <div className="flex items-center justify-between px-5 py-3 border border-[#CFD8DC] mt-4 rounded-xl">
                <div className="w-[50%]">
                  <img src={WallectConnect} alt="" />
                </div>
                <div className="w-[40%] text-right flex justify-end">
                  <img src={Arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
