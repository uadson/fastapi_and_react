import './App.css'
import TasksList from './components/TasksList'
import AddElement from './components/AddElement'

export default function App() {
    return (
        <div className='container-fluid'>
            <AddElement/>
            <TasksList/>
        </div>
    )
}