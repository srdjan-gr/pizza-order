'use client'

import Image from 'next/image';
import React from 'react'
import { useEffect, useState } from 'react'
import { HiOutlinePencil, HiOutlineTrash  } from "react-icons/hi2";
import PopupOptions from '../../components/utility/ConfirmBox'

const DashboardUserList = () => {

    const [ allUsers, setAllUsers ] = useState([])
    const [ isFetched, setIsFetched ] = useState(false)
    const [ isEditing, setIsEditing ] = useState(false)

    const [ handleEdit, setHandleEdit ] = useState(false)
    const [ editingItemValue, setEditingItemValue ] = useState('')
    const [ clickedItem, setClickedItem ] = useState('')


    const [ editCity, setEditCity ] = useState('')
    const [ editAddress, seteditAddress ] = useState('')


  
    
    useEffect(() => {
      fetchUsers()
    }, [])
    

    const fetchUsers = async () => {
        setIsFetched(true)
        await fetch('/api/users').then(res => {
            res.json().then(data => {
                setAllUsers(data)
                setIsFetched(false)
            })
        })
    }


    // Edit form open function
    const openEditForm = (item) => {
        setHandleEdit(!handleEdit)
        setEditingItemValue(item.name)
        setEditCity(item.city)
        seteditAddress(item.address)
    }


    // Update user fuction
    const handleCaregoryUpdate = async (item) => {

        const response =  await fetch('/api/categories', {
            method: 'PUT',
            body: JSON.stringify({_id: item._id, name: editingItemValue}),
            headers: {'Content-Type': 'application/json'}
        })

        if(response){
            toast.success('User info edited successfuly.')
            setHandleEdit(!handleEdit)
            fetchCategories()
        }else{
            toast.error('Something went wrong!')
        }
    }


    // Delete user function
    const handleUserDelete = async (item) => {

        const resoult = confirm(`Are you sure you wan to delete category '${item.name}'?`, PopupOptions);

        if(resoult){

            const response =  await fetch('/api/user', {
                method: 'DELETE',
                body: JSON.stringify({_id: item._id}),
                headers: {'Content-Type': 'application/json'}
            })

            if(response){
                toast.success(`User '${item.name}' deleted successfuly.`)
                setHandleEdit(!handleEdit)
                fetchCategories()
            }else{
                toast.error('Something went wrong!')
            }
        }
    }



    return (
        <section className="w-4/5 px-10">
            <h1 className='mb-5 text-xl text-gray-400 w-full max-w-xs underline'>Users list</h1>

            <div className="overflow-hidden rounded-lg border border-gray-200  my-6 overflow-x-scroll xl:overflow-hidden">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-400">Name</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-400">State</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-400">City</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-400">Delivering Address</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-400">Phone</th>
                            <th scope="col" className="px-6 py-4 font-medium text-gray-400">Options</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">

                        {allUsers.length === 0 ? 
                            <tr>
                                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                    <div className="text-sm"> 
                                        <p className=" text-gray-400">No users to show...</p> 
                                    </div>
                                </th>
                            </tr>  : 

                        allUsers?.map(item => {
                                return (
                                    <React.Fragment key={item._id}>
                                        <tr className="hover:bg-gray-50">
                    
                                            <th className="flex gap-3 px-6 py-3 font-normal text-gray-900">
                                                <div className="relative h-10 w-10">
                                                    <Image width={50} height={50} src={item.image} alt={item.name} className='rounded-full'/>
                                                    <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                                                </div>
                                                <div className="text-sm">
                                                    <div className="font-medium text-gray-700">{item.name}</div>
                                                    <div className="text-gray-400">{item.email}</div>
                                                </div>
                                            </th>
                    
                                            <td className="px-6 py-3">
                                                <span className={`${item.admin ? 'text-green-600 bg-green-100' : 'bg-orange-100 text-orange-500'} inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold`}>
                                                    <span className={`${item.admin ? 'bg-green-600' : 'bg-orange-500'} h-1.5 w-1.5 rounded-full `}></span>
                                                        {item.admin ? "Admin" : "User"}
                                                </span>
                                            </td>
                    
                                            <td className="px-6 py-3">{item.city}</td>
                    
                                            <td className="px-6 py-3">
                                                <div className="flex gap-2">
                                                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600 min-w-32">
                                                        {item.address}
                                                    </span>
                                                </div>
                                            </td>

                                            <td className="px-6 py-3">{item.phone}</td>
                    
                                            <td className="px-6 py-3">
                                                <div className="flex items-center gap-4">
                                                    {/* Delete btn */}
                                                    <div 
                                                        x-data="{ tooltip: 'Delete' }" 
                                                        href="#"
                                                        onClick={() => handleUserDelete(item)}
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

                                        
                                        {/* Input raw for edit category */}
                                        <tr className={`${handleEdit && clickedItem === item._id ? 'visible border-red-300 w-full border-2 ' : 'hidden'} bg-red-50  `}>
                                            
                                            <th className="flex gap-3 ps-10 py-4 font-normal text-gray-900">
                                                <div className="text-sm">
                                                    <div className=" text-gray-700 capitalize">
                                                       {/* <input 
                                                            type="text"
                                                            className="border-2 border-red-200 rounded-xl input input-bordered w-[180px] max-w-xs input-sm p-3 text-xl" 
                                                            value={editingItemValue}
                                                            onChange={(e) => setEditingItemValue(e.target.value)}
                                                       />*/}
                                                    </div>
                                                </div>
                                            </th>


                                            {/* User edit State */}
                                            <td className="px-6 py-4">
                                                <span className="h-1.5 w-1.5 rounded-full bg-green-600">
                                                    <select className="select select-bordered w-[80px] max-w-xs select-sm border-2 border-red-200 rounded-xl">
                                                        <option disabled selected>State</option>
                                                        <option>Admin</option>
                                                        <option>User</option>
                                                    </select>
                                                </span>
                                            </td> 
                                            

                                            {/* User edit City */}
                                            <td className="px-6 py-4">
                                                <div className="text-sm">
                                                    <div className=" text-gray-700 capitalize">
                                                        {/*<input 
                                                            type="text"
                                                            className="border-2 border-red-200 rounded-xl input input-bordered w-[100px] max-w-xs input-sm py-3 px-5 text-xl" 
                                                            value={editCity}
                                                            onChange={(e) => editCity(e.target.value)}
                                                        />*/}
                                                    </div>
                                                </div>
                                            </td>


                                            {/* User edit Address */}
                                            <td className="px-6 py-4">
                                                <div className="text-sm">
                                                    <div className=" text-gray-700 capitalize">
                                                        <input 
                                                            type="text"
                                                            className="border-2 border-red-200 rounded-xl input input-bordered w-[140px] max-w-xs input-sm py-3 px-5 text-xl" 
                                                            value={editAddress}
                                                            onChange={(e) => editAddress(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </td>


                                            {/* User edit Phone */}
                                            <td className="px-6 py-4">
                                            
                                            </td>


                                            {/* User edit Buttons */}
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
                            }) 
                        }

                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default DashboardUserList
