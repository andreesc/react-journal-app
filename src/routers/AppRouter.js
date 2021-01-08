import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import AuthRouter from "./AuthRouter";
import JournalScreen from "../components/journal/JournalScreen";

function AppRouter() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route
                        path="/auth"
                        component={AuthRouter}
                    />

                    <Route
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