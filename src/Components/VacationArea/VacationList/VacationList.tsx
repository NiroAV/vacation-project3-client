import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import VacationModel from "../../../Models/VacationModel";
import store from "../../../Redux/Store";
import notify from "../../../Services/NotifyService";
import vacationsService from "../../../Services/VacationService"
import Loading from "../../LayoutArea/Loading/Loading";
import VacationCard from "../VacationCard/VacationCard";
import "./VacationList.css";


function VacationList(): JSX.Element {

    // Create products state: 
    const [vacations, setVacation] = useState<VacationModel[]>([]);
    const[flag, setFlag] = useState(0);
    // Do side-effect once: 
    useEffect(() => {
        const unsubscribeMe = store.subscribe(() => {
            const vacation = store.getState().vacationState.vacation; 
            setVacation([...vacation]);
            
        });
        
        vacationsService.getAllVacations()
                .then(vacations => {setVacation(vacations)
            })
            .catch(err => notify.error(err)
            );
            return () => {
                unsubscribeMe();} 

    }, [flag]);

    function handleFlagChange(){
        if(flag === 0){
            setFlag(1)
        }
        else{
            setFlag(0)
        }
    
        }


    return (
        <div className="VacationList">

            {vacations.length === 0 ? <Loading /> : <></>}
            {vacations.map(v => <VacationCard key={v.vacationId} vacationProp={v} flagFunc={handleFlagChange} />)}

        </div>
    );
}

export default VacationList;
