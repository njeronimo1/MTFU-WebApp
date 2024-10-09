export interface UsersList {
    userId: number,
    name: string,
    function: string,
}

export interface ProjectReturnApi{
    projectId: number,
    title: string,
    responsible: string,
    category: string,
    description: string,
    createDate: string,
    endDate: string,
    projects_Users: string[]
}

export interface CreateProjectType{
    project: {
        title: string,
        responsible: string,
        category: string,
        description: string,
        createDate: Date,
    },
    usersList: UserResourceCreateProjet[]
}

export interface ResourcesProject{
    users: UserResource[],
    responsibles: ResponsibleResource[],
    categories: CategoriesResource[],
    statusProjects: StatusResource[]
}

export interface UserResource{
    userId: string,
    nameCompleted: string,
    function: string
}

export interface UserResourceCreateProjet{
    completedName: string
}

export interface ResponsibleResource{
    responsibleId: number,
    name: string
}

export interface CategoriesResource{
    categoryId: number,
    name: string
}

export interface StatusResource{
    statusProjectId: number,
    name: string
}

export interface Sprint {
    sprintId: number,
    title: string,
    description: string,
    sprintScorte: number,
    startDate: string,
    endDate: string,
    status: string,
    sprint_Users: string[]
}