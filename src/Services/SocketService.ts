import { io, Socket } from "socket.io-client";
import store from "../Redux/Store";
import { addVacationAction, deleteVacationAction, fetchVacationsAction, updateVacationAction } from "../Redux/VacationState";


class SocketService {

    private socket: Socket;

    public connect(): void {
        this.socket = io("http://localhost:3002");

        this.socket.on("msg-from-server-add", (addedVacation: any) => {
         
            
            store.dispatch(addVacationAction(addedVacation));
          
            console.log(addedVacation); 
        });

        this.socket.on("msg-from-server-update", (updatedVacation: any) => {
            
           
            
            store.dispatch(updateVacationAction(updatedVacation));
            
          
        });

        this.socket.on("msg-from-server-delete", (deleteVacation: any) => {
            
           
            
            store.dispatch(deleteVacationAction(deleteVacation.vacationId));
            
           
        });
    };


    public disconnect(): void {
        this.socket.disconnect();
    }

    public send(addedVacation: any): void {
        this.socket.emit("msg-from-client-add", addedVacation);
    }

    public sendUpdate(updatedVacation: any): void {
        this.socket.emit("msg-from-client-update", updatedVacation);
    }

    public sendDelete(deletedVacation: any): void {
        this.socket.emit("msg-from-client-delete", deletedVacation);
    }

}

const socketService = new SocketService();

export default socketService;