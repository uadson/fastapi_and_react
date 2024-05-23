import React, { useEffect } from 'react'
import 'datatables.net-bs5'
import $ from 'jquery'

export default function TasksList () {
    useEffect(() => {
        $(document).ready(function(){
            $('.todo-table').DataTable()
        })
    }, [])
    return (
        <table className='table table-sm table-striped table-hover table-bordered text-center todo-table'>
            <thead>
                <tr>
                    <th className=''>ID</th>
                    <th className=''>Description</th>
                    <th className=''>Created</th>
                    <th className=''>Started</th>
                    <th className=''>Status</th>
                    <th className=''>Finalized</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className=''>1</td>
                    <td className=''>To create a app with FastAPI and React JS</td>
                    <td className=''>2024-05-20</td>
                    <td className=''>2024-05-20</td>
                    <td className=''>In Progress</td>
                    <td className=''>----</td>
                </tr>
            </tbody>
        </table>
    )
}

