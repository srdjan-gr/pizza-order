import React from 'react'
import { useEffect, useState } from "react";
import { HiOutlinePencil, HiOutlineTrash  } from "react-icons/hi2";
import toast, { Toaster } from 'react-hot-toast';
import { confirm } from "react-confirm-box";

import PopupOptions from '../../components/utility/ConfirmBox'

const CategoryList = () => {

    const [allCategories, setAllCategories] = useState([])
    const [ isFetched, setIsFetched ] = useState(false)
    const [ isEditing, setIsEditing ] = useState(false)

    const [ handleEdit, setHandleEdit ] = useState(false)
    const [ editingItemValue, setEditingItemValue ] = useState('')
    const [ clickedItem, setClickedItem ] = useState('')


    useEffect(() => {
        fetchCategories()
    }, [])
    
    
    const fetchCategories = ()  => {
        setIsFetched(true)
        fetch('/api/categories').then(res => {
            res.json().then(categories => {
                setAllCategories(categories)
                setIsFetched(false)
            })
        })
    }

    // Confirm opttions
    const options = {
        labels: {
            cancellable: "Cancel",
            confirmable: "OK",
        }
    }


    // Split time from db
    const splitTime = (t) => {
        const dbt = t.split('T')
        const date = dbt[1].split('.')
        return dbt[0] + ' ' + date[0]
    }

    // Edit form open function
    const openEditForm = (item) => {
        setHandleEdit(!handleEdit)
        setEditingItemValue(item.name)
    }


    // Update category update
    const handleCaregoryUpdate = async (item) => {

        const response =  await fetch('/api/categories', {
            method: 'PUT',
            body: JSON.stringify({_id: item._id, name: editingItemValue}),
            headers: {'Content-Type': 'application/json'}
        })

        if(response){
            toast.success('Category edited successfuly.')
            setHandleEdit(!handleEdit)
            fetchCategories()
        }else{
            toast.error('Something went wrong!')
        }
    }


    // Delete category
    const handleCaregoryDelete = async (item) => {

        const resoult = await confirm(`Are you sure you wan to delete category '${item.name}'?`, PopupOptions);


        if(resoult){

            const response =  await fetch('/api/categories', {
                method: 'DELETE',
                body: JSON.stringify({_id: item._id}),
                headers: {'Content-Type': 'application/json'}
            })
    
            if(response){
                toast.success(`Category '${item.name}' deleted successfuly.`)
                setHandleEdit(!handleEdit)
                fetchCategories()
            }else{
                toast.error('Something went wrong!')
            }
        }
    }



    return (
        <section className=''>
            <h1 className='mb-5 text-xl text-gray-400 w-full max-w-xs underline'>Category list</h1>

            <div className="overflow-hidden rounded-lg border border-gray-200  my-6  overflow-x-scroll md:overflow-hidden">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-400">Name</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-400">State</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-400">Created At</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-400">Options</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">

                        {allCategories.length === 0 ? 
                            <tr>
                                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                    <div className="text-sm"> 
                                        <p className=" text-gray-400">No categories to show...</p> 
                                    </div>
                                </th>
                            </tr>  : 
                        allCategories?.map(item => {
                                return(        
                                    <React.Fragment key={item.name}>
                                        <tr className="hover:bg-gray-50">

                                            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                                <div className="text-sm w-[200px]">
                                                    <div className=" text-[18px] text-gray-700 capitalize">{item.name}</div>
                                                </div>
                                            </th>

                                            {item.published ? (
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span> Publised </span>
                                                    </td> 
                                                ) : (
                                                    <td className="px-6 py-4">
                                                        <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-400">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-red-400"></span> Not Published </span>
                                                    </td>
                                                )}
                                            
                                            <td className="px-6 py-4">{splitTime(item.createdAt)}</td>


                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">

                                                    {/* Delete btn */}
                                                    <div 
                                                        x-data="{ tooltip: 'Delete' }" 
                                                        href="#"
                                                        onClick={() => handleCaregoryDelete(item)}
                                                    >
                                                        <HiOutlineTrash className="w-5 h-5 text-gray-400 hover:text-gray-500 cursor-pointer" />
                                                    </div>

                                                    {/* Update btn */}
                                                    <div 
                                                        x-data="{ tooltip: 'Edit' }" 
                                                        href="#"
                                                        onClick={() => {
                                                            setClickedItem(item._id)
                                                            openEditForm(item)
                                                        }}
                                                    >
                                                        <HiOutlinePencil className="w-5 h-5 text-gray-400 hover:text-gray-500 cursor-pointer" />
                                                    </div>
                                                </div>
                                            </td>

                                        </tr>


                                        {/* Input raw for edit user */}
                                        <tr className={`${handleEdit && clickedItem === item._id ? 'visible border-red-300 w-full border-2 ' : 'hidden'} bg-red-50  `}>
                                        
                                            <th className="flex gap-3 ps-10 py-4 font-normal text-gray-900">
                                                <div className="text-sm">
                                                    <div className=" text-gray-700 capitalize">
                                                        <input 
                                                            type="text"
                                                            className="border-2 border-red-200 rounded-xl input input-bordered w-[200px] max-w-xs input-sm p-5 text-xl" 
                                                            value={editingItemValue}
                                                            onChange={(e) => setEditingItemValue(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </th>

                                            <td className="px-6 py-4">
                                                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                            </td> 
                                            
                                            <td className="px-6 py-4"></td>

                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                <button  
                                                    onClick={() => handleCaregoryUpdate(item)}
                                                    className={`${isEditing ? 'bg-gray-300' : 'bg-pizza_wood-400 border-0 hover:bg-pizza_wood-300'} btn btn-primary btn-sm text-white max-w-xs relative rounded-md`}
                                                    disabled = {isEditing}  
                                                >
                                                    Edit
                                                    {isEditing &&  <Spinner />} 
                                                </button>
                                                </div>
                                            </td>
                                            
                                        </tr> 
                                    </React.Fragment>    
                                )
                            })}
                    </tbody>
                </table>
            </div>

        </section>
    )
}

export default CategoryList