import React, { useContext } from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Home from '../Pages/Home'
import Movies from '../Pages/Movies'
import Games from '../Pages/Games'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Movie from '../Pages/SetMovie'
import AddMovie from '../Forms/AddMovie'
import EditMovie from '../Forms/EditMovie'
import Game from '../Pages/SetGame'
import EditGame from '../Forms/EditGame'
import AddGame from '../Forms/AddGame'
import ChangePassword from '../Forms/ChangePassword'
import { UserContext } from "../Context/UserContext"

const Section = () => {
    const [user] = useContext(UserContext);

    const PrivateRoute = ({ ...props }) => {
        if (user) {
            return <Route {...props} />;
        } else {
            alert("You have to login to get access into this page!")
            return <Redirect to="/login" />;
        }
    };

    const LoginRoute = ({ ...props }) =>
        user ? <Redirect to="/" /> : <Route {...props} />;

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/games" component={Games} />
            <LoginRoute exact path="/login" component={Login} />
            <LoginRoute exact path="/register" component={Register} />
            <PrivateRoute exact path="/settings/movies" component={Movie} />
            <PrivateRoute exact path="/settings/movies/add" component={AddMovie} />
            <PrivateRoute exact path="/settings/movies/edit" component={EditMovie} />
            <PrivateRoute exact path="/settings/games" component={Game} />
            <PrivateRoute exact path="/settings/games/add" component={AddGame} />
            <PrivateRoute exact path="/settings/games/edit" component={EditGame} />
            <PrivateRoute exact path="/settings/changePassword" component={ChangePassword} />
        </Switch>
    )
}

export default Section