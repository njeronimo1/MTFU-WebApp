

export interface GenericReturnAPI<T, TT> {
    data: T,
    headers: TT,
}

export interface GenericResponsePagination{
    Count:number,
    PageSize:number,
    PageCount:number,
    TotalItemCount:number,
    HasNextPage:boolean,
    HasPreviousPage:boolean
}