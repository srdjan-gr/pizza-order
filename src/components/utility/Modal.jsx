import { IoClose } from "react-icons/io5";
import SingleProduct from "@/components/SingleProduct";

const Modal = ({ label, modal, setModal, data }) => {
  const closeModal = () => {
    setModal(false);
  };

  if (label === "singleProduct") {
    return (
      <div
        className={`${
          modal ? "visible" : "invisible"
        } fixed top-0 left-0 w-full h-screen z-50 bg-black/20 flex items-center justify-center transition-all ease-in-out delay-350 `}
      >
        <SingleProduct data={data} />
        <IoClose
          onClick={closeModal}
          className="h-8 w-8 absolute top-20 right-20 text-pizza_light cursor-pointer"
        />
      </div>
    );
  }
};

export default Modal;
