import { api } from "@/lib/axios"

import { PlanningDataType, SaveAltersPlanningType, UpdateAltersPlanningType } from "./planning.types"
import { Sprint } from "@/pages/app/Project/projectTypes";

const route = '/Planning'

export const SaveAltersPlanning = async (data: SaveAltersPlanningType): Promise<SaveAltersPlanningType> => {
    const responsePlanning: SaveAltersPlanningType = await api.post<SaveAltersPlanningType>(`${route}/create`, data).then((res) => { return res.data });
    return responsePlanning
}

export const UpdateAltersPlanning = async (data: UpdateAltersPlanningType): Promise<UpdateAltersPlanningType> => {
    const responsePlanning: UpdateAltersPlanningType = await api.patch<UpdateAltersPlanningType>(`${route}/update`, data).then((res) => { return res.data });
    return responsePlanning
}

export const GetPlanningData = async (projectId: number): Promise<PlanningDataType> => {
    const planningData = await api.get<PlanningDataType>(`${route}/getPlanning?ProjectId=${projectId}`).then((res) => { return res.data});

    return planningData
}

export const GetSprintsPlanningData = async (planningId: number): Promise<Sprint[]> => {

    const sprintPlanningData = await api.get<Sprint[]>(`/Sprint/getSprint?planningId=${planningId}`).then((res) => { return res.data});

    return sprintPlanningData
}