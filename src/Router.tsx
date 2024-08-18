import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignIn } from "./pages/auth/sign-in";
import { NotFound } from "./pages/404";
import { AppLayout } from "./pages/_layouts/app";
import { Home } from "./pages/app/home";
import { SignUp } from "./pages/auth/sign-up";
import { Project } from "./pages/app/Project/project";
import { CreateProject } from "./pages/app/Project/createProject";
import { ProjectDetail } from "./pages/app/Project/projectDetail";


export const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <AppLayout />,
            children: [
                { path: '/', element: <Home /> },
                { path: '/project', element: <Project /> },
                { path: '/project/create-project', element: <CreateProject /> },
                { path: '/project/:id', element: <ProjectDetail /> }
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