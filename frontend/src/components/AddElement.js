import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

export default function AddElement () {
    const squarePlus = <FontAwesomeIcon icon={faSquarePlus} />
    return (
        <section>
            <div className="card w-25">
                <div className="card-header">Create Task</div>
                <div className="card-body">
                    <button className="btn btn-primary">{squarePlus}&nbsp;&nbsp;Add</button>
                </div>
            </div>
        </section>
    )
}