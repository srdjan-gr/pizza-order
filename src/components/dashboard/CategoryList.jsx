import { HiOutlinePencil, HiOutlineTrash  } from "react-icons/hi2";

const CategoryList = () => {
  return (
    <section className=' '>
        <h1 className='mb-5 text-xl text-gray-400 w-full max-w-xs underline'>Category list</h1>

        <div className="overflow-hidden rounded-lg border border-gray-200  my-6 w-5/6">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-400">Name</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-400">State</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-400">Role</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-400">Team</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-400">Options</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-100 border-t border-gray-100">

                    <tr className="hover:bg-gray-50">

                        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                            <div className="text-sm">
                                <div className="font-medium text-gray-700">Steven Jobs</div>
                            </div>
                        </th>

                        <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                    Active
                            </span>
                        </td>

                        <td className="px-6 py-4">Product Designer</td>

                        <td className="px-6 py-4">
                            <div className="flex gap-2">
                                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                                    Design
                                </span>
                            </div>
                        </td>

                        <td className="px-6 py-4">
                            <div className="flex items-center gap-4">
                                <a x-data="{ tooltip: 'Delete' }" href="#">
                                    <HiOutlineTrash className="w-5 h-5 text-gray-400 hover:text-gray-300" />
                                </a>
                                <a x-data="{ tooltip: 'Edit' }" href="#">
                                    <HiOutlinePencil className="w-5 h-5 text-gray-400 hover:text-gray-300" />
                                </a>
                            </div>
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>
    </section>
  )
}

export default CategoryList