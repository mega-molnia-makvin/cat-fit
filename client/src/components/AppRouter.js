import {authRoutes, publicRoutes} from "../utils/routes";
import {CARDS_ROUTE} from "../utils/consts";//maybe MAIN_ROUTE 
import { Switch } from "react-router-dom";
import {Context} from "../utils/index";

const AppRouter = () => {
    const {user} = useContext(Context)
    //console.log(user)
    return (
        <Switch>
            {
                user.isAuth && aythRoutes.map(({path, Component}) =>
                <Route key = {path} path={path} component={Component} exact/>
            )}
            {
                publicRoutes.map(({path, Component}) =>
                <Route key = {path} path={path} component={Component} exact/>
            )}
            <Redirect to={CARDS_ROUTE}/>
        </Switch>
    )
}

export default AppRouter;