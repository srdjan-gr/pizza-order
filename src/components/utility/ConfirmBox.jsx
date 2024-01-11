"use client";

const PopupOptions = {
  render: (message, onConfirm, onCancel) => {
    const options = {
      closeOnEscape: true,
      closeOnClickOutside: true,
      keyCodeForClose: [8, 32],
      willUnmount: () => {},
      afterClose: () => {},
      onClickOutside: () => {},
      onKeypress: () => {},
      onKeypressEscape: () => {},
      overlayClassName: "overlay-custom-class-name",
    };
    return (
      <article className=" bg-white p-6 shadow-md rounded-xl -translate-x-1/3 -translate-y-1/3">
        <p className="text-lg"> {message} </p>

        <div className="flex justify-end gap-5 mt-10 w-full">
          <button className="hover:text-gray-500" onClick={onCancel}>
            {" "}
            Cancel
          </button>

          <button
            className="px-6 py-3 rounded-lg bg-pizza_red-400 text-white hover:bg-pizza_red-300"
            onClick={onConfirm}
          >
            {" "}
            OK
          </button>
        </div>
      </article>
    );
  },
};

export default PopupOptions;
