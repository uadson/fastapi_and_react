import React, { useEffect } from 'react'
import 'datatables.net-dt'
import $ from 'jquery'
import './TasksList.css'

export default function TasksList () {
    useEffect(() => {
        $(document).ready(function(){
            $('.todo-table').DataTable()
        })
    }, [])
    return (
        <table className='dataTable-container todo-table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Created</th>
                    <th>Started</th>
                    <th>Status</th>
                    <th>Finalized</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>To create a app with FastAPI and React JS</td>
                    <td>2024-05-20</td>
                    <td>2024-05-20</td>
                    <td>In Progress</td>
                    <td>----</td>
                </tr>
            </tbody>
        </table>
    )
}

