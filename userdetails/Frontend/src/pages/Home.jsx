import React from 'react'
import { TiUserDelete } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='m-5 flex flex-col'>
        <h2 className='text-center font-bold text-lg m-5 underline decoration-5 hover:underline-offset-4 cursor-pointer'>USERS INFORMATION</h2>
        <table className='table-fixed border-separate border-spacing-px border border-slate-500'>
            <caption className='caption-top mb-1 font-semibold'>
                Table:- Users And There General Information.
            </caption>
            <thead>
                <tr>
                    <th className='border bg-gray-300 border-slate-600'>Name</th>
                    <th className='border bg-gray-300 border-slate-600'>Age</th>
                    <th className='border bg-gray-300 border-slate-600'>Phone</th>
                    <th className='border bg-gray-300 border-slate-600'>Email</th>
                    <th className='border bg-gray-300 border-slate-600'>Country</th>
                    <th className='border bg-gray-300 border-slate-600'>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border border-slate-600'>John</td>
                    <td className='border border-slate-600'>25</td>
                    <td className='border border-slate-600'>9833343333333333333</td>
                    <td className='border border-slate-600'>john@gmail.com</td>
                    <td className='border border-slate-600'>USA</td>
                    <td className='border border-slate-600'>
                        <div className='flex space-x-5'>
                            <Link to='/users/delete/:id'>
                                <TiUserDelete className='cursor-pointer bg-red-400 hover:bg-red-500 rounded-md' />
                            </Link>
                            <Link to='/users/update/:id'>
                                <FaUserEdit className='cursor-pointer bg-blue-400 hover:bg-blue-500 rounded-md' />
                            </Link>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}

export default Home