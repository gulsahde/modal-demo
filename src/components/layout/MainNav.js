import { Link } from 'react-router-dom'
import classes from './MainNav.module.css'
import {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';

function MainNav(){

    const favoriteCtx = useContext(FavoritesContext);
    return(
        <header className={classes.header}>
            <div className={classes.logo}>Discover Events</div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">All Evenets</Link>
                        </li>
                        <li>
                            <Link to="/new-event">Add New Event</Link>
                        </li>
                        <li>
                            <Link to="/favorites">
                                My Favorites
                                <span className={classes.badge}>{favoriteCtx.totalFavorites}</span> 
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default MainNav;