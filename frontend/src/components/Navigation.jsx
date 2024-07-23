import {NavLink} from "react-router-dom";
import classes from "./Navigation.module.css";

export default function Navigation() {
    return (
        <header>
            <nav>
                <ul className={classes.wrapper}>
                    <li><NavLink className={({isActive}) => isActive ? classes.active : undefined} end to='/'>Home</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? classes.active : undefined} to='/about'>About</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? classes.active : undefined} to='/contacts'>Contacts</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}