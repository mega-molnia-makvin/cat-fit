import Admin from "./pages/Admin"
import LK from "./pages/LK"
import Main from "./pages/Main"
import Team from "./pages/Team"
import Cards from "./pages/Cards"
import Scheduler from "./pages/Scheduler"
import { ADMIN_ROUTE, CARDS_ROUTE, LK_ROUTE, MAIN_ROUTE, SCHEDULER_ROUTE, TEAM_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: LK_ROUTE,
        Component: LK
    }
]

export const publicRoutes =[
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: TEAM_ROUTE,
        Component: Team
    },
    {
        path: CARDS_ROUTE,
        Component: Cards
    },
    {
        path: SCHEDULER_ROUTE,
        Component: Scheduler
    }
]