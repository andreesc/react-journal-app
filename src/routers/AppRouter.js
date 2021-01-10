import {BrowserRouter as Router, Redirect, Switch} from 'react-router-dom'
import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";
import {useEffect, useState} from 'react';
import {firebase} from "../firebase/firebase-config";
import {useDispatch} from "react-redux";
import {login} from "../actions/auth";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { startLoadingNotes} from "../actions/notes";

function AppRouter() {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                dispatch(startLoadingNotes(user.uid));

            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);


        });
    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return (
            <div>Please wait...</div>
        )
    }

    return (
        <div>
            <Router>
                <Switch>
                    <PublicRoute
                        isAuthenticated={isLoggedIn}
                        path="/auth"
                        component={AuthRouter}
                    />
                    <PrivateRoute
                        isAuthenticated={isLoggedIn}
                        exact path="/"
                        component={JournalScreen}
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter;