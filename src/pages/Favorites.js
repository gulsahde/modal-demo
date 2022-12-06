import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import EventList from '../components/events/EventList';

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;
    if (favoritesCtx.totalFavorites === 0){
        content = <p><i><b>There is no favorite event yet. </b></i><br/>
            There is definitely an event that you will like, check it out..</p>
    }
    else{
        content = <EventList events={favoritesCtx.favorites} />
    }
    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
    
}

export default FavoritesPage;