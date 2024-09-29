import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
  } from 'lucide-react'
  
  import { useSearchParams } from 'react-router-dom'
  import { Button } from './ui/button'
  import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select'
  
  interface PaginationProps {
    pages: number
    items: number
    page: number
  }
  
  export function Pagination({ items, page, pages }: PaginationProps) {
    const [, setSearchParams] = useSearchParams()
  
    function firstPage() {
      setSearchParams(params => {
        params.set('page', '1')
  
        return params
      })
    }
  
    function previousPage() {
      if (page - 1 <= 0) {
        return
      }
  
      setSearchParams(params => {
        params.set('page', String(page - 1))
  
        return params
      })
    }
  
    function nextPage() {
      if (page + 1 > pages) {
        return
      }
  
      setSearchParams(params => {
        params.set('page', String(page + 1))
  
        return params
      })
    }
  
    function lastPage() {
      setSearchParams(params => {
        params.set('page', String(pages))
  
        return params
      })
    }

    const pageInfo = items - (10 * page) 
  
    return (
      <div className="flex text-sm items-center justify-between text-zinc-500">
        <span>{(10 * page) > items ? (10 * page) + pageInfo : (10 * page)} de {items} itens </span>
        <div className="flex items-center gap-2 pl-2">
  
          <span>Pagina {page} de {pages}</span>
  
          <div className="space-x-1.5">
            <Button onClick={firstPage} size="icon" disabled={page - 1 <= 0}>
              <ChevronsLeft className="size-4" />
              <span className="sr-only">Primeira pagina</span>
            </Button>
            <Button onClick={previousPage} size="icon" disabled={page - 1 <= 0}>
              <ChevronLeft className="size-4" />
              <span className="sr-only">Pagina anterior</span>
            </Button>
            <Button onClick={nextPage} size="icon" disabled={page + 1 > pages}>
              <ChevronRight className="size-4" />
              <span className="sr-only">Proxima pagina</span>
            </Button>
            <Button onClick={lastPage} size="icon" disabled={page + 1 > pages}>
              <ChevronsRight className="size-4" />
              <span className="sr-only">Ultima pagina</span>
            </Button>
          </div>
        </div>
      </div>
    )
  }