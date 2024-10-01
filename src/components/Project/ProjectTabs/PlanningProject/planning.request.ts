import { api } from "@/lib/axios"
import { PlanningDataType, SaveAltersPlanningType, UpdateAltersPlanningType } from "./planning.types"

const route = '/Planning'

export const SaveAltersPlanning = async (data: SaveAltersPlanningType): Promise<SaveAltersPlanningType> => {
    const responsePlanning: SaveAltersPlanningType = await api.post<SaveAltersPlanningType>(`${route}/create`, data).then((res) => { return res.data });
    return responsePlanning
}

export const UpdateAltersPlanning = async (data: UpdateAltersPlanningType): Promise<UpdateAltersPlanningType> => {
    const responsePlanning: UpdateAltersPlanningType = await api.patch<UpdateAltersPlanningType>(`${route}/upate`, data).then((res) => { return res.data });
    return responsePlanning
}

export const GetPlanningData = async (projectId: number): Promise<PlanningDataType> => {
    const planningData = await api.get<PlanningDataType>(`${route}/getPlanning?ProjectId=${projectId}`).then((res) => { return res.data});

    return planningData
}