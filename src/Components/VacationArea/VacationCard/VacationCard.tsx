import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import VacationModel from "../../../Models/VacationModel";
import store from "../../../Redux/Store";
import notify from "../../../Services/NotifyService";
import socketService from "../../../Services/SocketService";
import vacationsService from "../../../Services/VacationService";
import config from "../../../Utils/Config";
import "./VacationCard.css";
import Modal from "../../VacationArea/Modal/Modal"

interface VacationCardProps {
    vacationProp: VacationModel;
    flagFunc: Function;
}

function VacationCard(props: VacationCardProps): JSX.Element {
   
    const [deleteFlag, setDeleteFlag] = useState('');
    const role = store.getState().authState.user.role
    const navigate = useNavigate();
    
    async function addFollower(vacationId: number, id:number) {

        try {
            await vacationsService.addToFollowingList(vacationId, id);
            notify.success(`You are following ${props.vacationProp.location}`);
            props.flagFunc();
            
        }
        catch(err: any) {
            notify.error(err);
        }
        
    }

    async function removeFollower(vacationId: number){
        try {
            await vacationsService.removeFollowingList(vacationId);
            notify.success(`You are not following ${props.vacationProp.location}`);
            props.flagFunc();
        }
        catch(err: any) {
            notify.error(err);
        }
    }

    async function deleteVacation(vacationId: number){
        try {
            await vacationsService.deleteOneVacation(vacationId);
            socketService.sendDelete(props.vacationProp);
            notify.success("The vacation was deleted");
            setDeleteFlag('');

        }
        catch(err: any) {
            notify.error(err);
        }
       

    }

    function handleDelete(){
        if (!deleteFlag){
            setDeleteFlag('Y');
        }
        else{
            setDeleteFlag('');
        }
        

    }

    return (
            <div className="card   text-center" >
                <div className="img-product">
                    <img src={config.vacationImageUrl + props.vacationProp.imageName} alt="Location picture" className="card-img-top"/>
                </div>
                <div className="card-body">
                <div className="card-title">
                    <h3>{props.vacationProp.location}</h3>
                </div>
                <div className="price">
                    ${props.vacationProp.price}
                </div>
                <div className="dates">
                    {vacationsService.formatDateTime(props.vacationProp.startDate)} - {vacationsService.formatDateTime(props.vacationProp.endDate)}
                </div>
                <div className="card-text">
                    {props.vacationProp.description}
                </div>
                <div className="rates">
                
                    <div>
                        <p className="followers">Followers: {props.vacationProp.followers}</p>
                        {(role === 'User') ?
                    <div className="rates-rates">
                        {(props.vacationProp.followedVacation) ? <button type="button"className= "watch-list blueBg" onClick={() => {removeFollower(props.vacationProp.vacationId)}}>❤</button> : 
                        <button type="button"className= "watch-list" onClick={() => {addFollower(props.vacationProp.vacationId, props.vacationProp.userId)}}>❤</button>}
                    </div> : <></>}
                    </div>
                    <div className="delete-edit-btn">
                    {(role === 'Admin') ? <NavLink to={`/vacations/edit/${props.vacationProp.vacationId}`} className="edit-btn btn btn-outline-warning">✏️</NavLink> : <></>}
                    {(role === 'Admin') ? <button className="edit-btn btn btn-outline-primary" onClick={handleDelete}>❌</button> : <></>}
                    {deleteFlag && <Modal deleteFunction={deleteVacation} vacationId={props.vacationProp.vacationId} vacationName={props.vacationProp.location} handleDelete={handleDelete} />}
                </div>
                    </div>
                </div>
            </div>

              
    );
    }

export default VacationCard;



