import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main"
import ProjectDetails from "../Pages/Home/Works/ProjectDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
            path: "/project/:id",
            element: <ProjectDetails/>,
            loader: ({ params }) => fetch(`https://shohan-portfolio-server.vercel.app/project/${params.id}`)
    }
])

export default router;
