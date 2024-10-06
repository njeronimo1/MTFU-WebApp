

export interface SaveAltersPlanningType{
    documentationLink: string,
    planningDescription: string,
    projectId: number
}

export interface UpdateAltersPlanningType{
    documentationLink: string,
    planningDescription: string,
    planningId: number
}


export interface PlanningDataType{
    planningId: number,
    documentationLink: string,
    planningDescription: string
}

export interface Sprint{
    sprintId: number,
    title: string,
    description: string,
    sprintScorte: number,
    startDate: string,
    endDate: string,
    status: string,
    sprint_Users: string[],
}