import EventList from "../components/events/EventList";
import { useEffect, useState } from "react";

function AllEventsPage(){

  const [isLoading, setIsLoading] = useState(true);
  const [loadedEvents, setLoadedEvents] = useState([]);
  
  
  useEffect(() => {
    setIsLoading(true);

    fetch('https://event-website-project-ee45b-default-rtdb.firebaseio.com/events.json'
    ).then(response => {
      return response.json();
    }).then(data =>{

      const events = [];
      for(const key in data){
        const event = { 
          id:key,
          ...data[key]
        };
        events.push(event);
      }
      setIsLoading(false);
      setLoadedEvents(events);
    });
  }, []);

  if(isLoading){
    return(
      <section>
        <p>Loading...</p>
      </section>
    )
  }
    return(
        <section>
        <h1>All Events</h1>
        <EventList events={loadedEvents}/> 
        </section>
    )
}

export default AllEventsPage;