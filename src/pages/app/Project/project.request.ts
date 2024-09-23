import { api } from "@/lib/axios"
import { CreateProjectType, ProjectReturnApi, ResourcesProject } from "./projectTypes";

interface projects {
    projectId: number,
    title: string,
    responsible: string,
    category: string,
    createDate: string,
    description: string
}

interface paramsProject{
    pageNumber: number,
    pageSize: number,
    category: string,
    status: string,
    searchText:string
}


export const getProjects = (data:paramsProject):Promise<ProjectReturnApi[]> => {
    return api.get(`/Project/pagination?PageNumber=${data.pageNumber}
    &PageSize=${data.pageSize}&parameter=${data.searchText}&category=${data.category}&status=${data.status}`).then((res) => res.data);
}

export const getResourcesForProject = ():Promise<ResourcesProject> => {
    return api.get(`/Project/getResourcesForProject`).then((res) => res.data);
}

export const postCreateProject = (data:CreateProjectType):Promise<any> => {
    return api.post(`/Project/create`, data).then((res) => res.data);
}