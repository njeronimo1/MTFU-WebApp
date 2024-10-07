

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