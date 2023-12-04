import React, { useState, useEffect } from 'react'
import Spinner from '../Spinner'
import toast, { Toaster } from 'react-hot-toast';


const DashboardCategoryForm = () => {

    const [isCreating, setIsCreating] = useState(false)
    const [category, setCategory] = useState('')


    // const fetchCategories = ()  => {
    //     setIsFetched(true)
    //     fetch('/api/categories').then(res => {
    //         res.json().then(categories => {
    //             setAllCategories(categories)
    //             setIsFetched(false)
    //         })
    //     })
    // }
  


    const handleFormSubmit = async (e) => {
        e.preventDefault()

        setIsCreating(true)

        if(!category){
            toast.error('All fields are required!')
            setIsCreating(false)
            return
        }

        const response =  await fetch('/api/categories', {
            method: 'POST',
            body: JSON.stringify({name:category}),
            headers: {'Content-Type': 'application/json'}
        })

        // fetchCategories()
        setIsCreating(false)
        setCategory('')
    }


    return (
        <section className=' '>
            <h1 className='mb-5 text-xl text-gray-400 w-full max-w-xs underline'>Add category</h1>

            <form 
                className='w-full flex flex-col md:flex-row justify-start items-end gap-5' 
                onSubmit={handleFormSubmit}  
            >
                <div className="form-control w-full max-w-xs ">
                    <label className="label">
                        <span className="label-text text-gray-400">Add category</span>
                    </label>

                    <input 
                        type="text" 
                        placeholder="Category name" 
                        className="input input-bordered w-full max-w-xs input-md rounded-xl" 
                        disabled = {isCreating} 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>

                <button  
                    type='submit'
                    className={`${isCreating ? 'bg-gray-300' : 'bg-pizza_green-500 border-0 hover:bg-pizza_green-400'} btn btn-primary  text-white max-w-xs relative rounded-xl`}
                    disabled = {isCreating}  
                >
                    Create category
                    {isCreating &&  <Spinner />} 
                </button>
            </form>
        </section>
    )
}

export default DashboardCategoryForm
