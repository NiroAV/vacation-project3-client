import "./Modal.css";

interface deleteVacation {
    deleteFunction: any;
    vacationId: number
    handleDelete:any
    vacationName: string
}

function Modal(props: deleteVacation): JSX.Element {

 
    return (
        <div className="Modal">
            <p>Are you sure you want to delete {props.vacationName}? </p>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={props.handleDelete}>Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={() => props.deleteFunction(props.vacationId)}>Delete</button>
                    </div>
    );
}

export default Modal;
