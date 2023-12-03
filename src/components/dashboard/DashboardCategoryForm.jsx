import React, { useState } from 'react'
import Spinner from '../Spinner'

const DashboardCategoryForm = () => {

    const [isCreating, setIsCreating] = useState()
    const [category, setCategory] = useState()

    const handleFormSubmit = (e) => {
        e.preventDefault()

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
