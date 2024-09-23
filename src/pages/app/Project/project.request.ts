import { api } from "@/lib/axios"
import { CreateProjectType, ProjectReturnApi, ResourcesProject } from "./projectTypes";
import { GenericResponsePagination, GenericReturnAPI } from "@/_types/GenericReturnAPI";
import { AxiosResponse } from "axios";

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


export const getProjects = async (data:paramsProject):Promise<GenericReturnAPI<ProjectReturnApi[], GenericResponsePagination>> => {
    let req = await api.get(`/Project/pagination?PageNumber=${data.pageNumber}
    &PageSize=${data.pageSize}&parameter=${data.searchText}&category=${data.category}&status=${data.status}`).then((res) => {
        console.log(res.headers['x-pagination']);
        let response: GenericReturnAPI<ProjectReturnApi[], GenericResponsePagination> = {
            data: res.data,
            headers: JSON.parse(res.headers['x-pagination']),
        }
        
        return response
    });

    return req
}

export const getResourcesForProject = ():Promise<ResourcesProject> => {
    return api.get(`/Project/getResourcesForProject`).then((res) => res.data);
}

export const postCreateProject = (data:CreateProjectType):Promise<any> => {
    return api.post(`/Project/create`, data).then((res) => res.data);
}