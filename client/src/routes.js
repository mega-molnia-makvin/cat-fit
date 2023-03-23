import LK from "./pages/LK"
import { CARDS_ROUTE, LK_ROUTE, MAIN_ROUTE, SCHEDULER_ROUTE, TEAM_ROUTE } from "./utils/consts"

export const authRoutes = [
{
    path: LK_ROUTE,
    Component: LK
}
]

export const publicRoutes =[
    {
        path: MAIN_ROUTE,
        Component: MAIN
    },
    {
        path: TEAM_ROUTE,
        Component: TEAM
    },
    {
        path: CARDS_ROUTE,
        Component: CARDS
    },
    {
        path: SCHEDULER_ROUTE,
        Component: SCHEDULER
    }
]