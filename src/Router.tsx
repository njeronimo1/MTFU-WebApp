import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignIn } from "./pages/auth/sign-in";
import { NotFound } from "./pages/404";
import { AppLayout } from "./pages/_layouts/app";
import { Home } from "./pages/app/home";
import { SignUp } from "./pages/auth/sign-up";


export const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <AppLayout />,
            children: [
                { path: '/', element: <Home /> },
                // { path: '/sign-up', element: <SignUp /> }
            ]
        },
        {
            path: '/',
            element: <AuthLayout />,
            children: [
                { path: '/sign-in', element: <SignIn /> },
                { path: '/sign-up', element: <SignUp /> }
            ]
        },{
            path: '*',
            element: <NotFound />
        }
    ]
)