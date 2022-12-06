import NewEventForm from "../components/events/NewEventForm";
import {useNavigate} from 'react-router-dom'

function NewEventPage(){
    const navigate=useNavigate();

    function addEventHandler(eventData){
        fetch(
            'https://event-website-project-ee45b-default-rtdb.firebaseio.com/events.json',
            {
                method:'POST',
                body: JSON.stringify(eventData),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate("/");
        });
    }
    return(
        <section>
            <h1>Add New Event</h1>
            <NewEventForm onAddEvent={addEventHandler}/>
        </section>
    )
}

export default NewEventPage;



