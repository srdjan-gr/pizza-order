import Link from "next/link";

const DashboardCategoryForm = ({ setIsCreatedCategory, IsCreatedCategory }) => {
  return (
    <section className=" ">
      <h1 className="mb-5 text-xl text-gray-400 w-full max-w-xs underline">
        Add Pizza
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-start items-end gap-5">
        <Link
          href={"/menu/new-pizza"}
          className="border-[1px] border-pizza_green-500  hover:bg-pizza_green-500 btn_ghost hover:text-white text-pizza_black max-w-xs rounded-full"
        >
          Create new Pizza
        </Link>
      </div>
    </section>
  );
};

export default DashboardCategoryForm;
