import Link from "next/link";

const DashboardCategoryForm = ({ setIsCreatedCategory, IsCreatedCategory }) => {
  return (
    <section className="flex flex-col justify-start">
      <h1 className="mb-5 text-xl text-gray-400 w-full max-w-xs underline">
        Add Pizza
      </h1>

      <div className="w-full md:w-44">
        <Link
          href={"/menu/new-pizza"}
          className=" btn_ghost border-[1px] border-pizza_green-500 text-pizza_black rounded-full hover:bg-pizza_green-500 hover:border-[1px] hover:border-pizza_green-50/50 hover:text-white w-full"
        >
          Create new Pizza
        </Link>
      </div>
    </section>
  );
};

export default DashboardCategoryForm;
