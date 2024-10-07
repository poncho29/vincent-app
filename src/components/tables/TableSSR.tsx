import { PaginationTableSSR } from './PaginationTableSSR';
// import { SearchTable } from './SearchTable';
import { ButtonLink } from '../common';
import { Switch } from '../form';

import { Column } from '@/interfaces';


interface Props <T>{
  data: T[];
  columns: Column<T>[];
  searchableFields?: (keyof T)[];
  btnCreate?: {
    href: string;
    text: string;
    textMobile?: string;
  },
  pagination: {
    totalPages: number;
  }
  isLoading?: boolean;
  // searcher: React.ReactNode,
  controls?: (item: T) => React.ReactNode;
}

export const TableSSR = <T,>({
  data,
  columns,
  searchableFields = [],
  btnCreate,
  pagination,
  isLoading = false,
  // searcher,
  controls = () => null,
}: Props<T>) => {
  const renderRow = (value: unknown): React.ReactNode => {
    if (value === null || value === undefined) {
      return '';
    } else if (typeof value === 'boolean') {
      return <Switch disabled checked={value} />
    } else if (typeof value === 'string' || typeof value === 'number') {
      return value;
    } else {
      return '';
    }
  };  
  
  return (
    <div className="w-full shadow-md bg-sky sm:rounded-lg">
      <div
        className="w-full flex items-center justify-between gap-2 px-6 py-4"
      >
        {btnCreate && (
          <ButtonLink
            href={btnCreate?.href || '#'}
            showIcon={false}
            className="w-1/2 h-10 max-w-40 md:w-full"
            variant='outlineSecondary'
          >
            <span className="block md:hidden">
              { btnCreate?.textMobile || 'Crear' }
            </span>
            <span className="hidden md:block">
              { btnCreate?.text || 'Crear' }
            </span>
          </ButtonLink>
        )}
        
        {/* {searcher} */}
      </div>

      
      <div className='overflow-x-auto'>
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="h-10">
            <tr
              className="text-xs text-blackLight uppercase bg-sky-800"
            >
              {columns.map((col) => (
                <th
                  key={col.header}
                  scope="col"
                  className={`text-nowrap px-4 py-2 ${col.sorteable ? 'cursor-pointer' : 'cursor-default'}`}
                  // onClick={() => col.sorteable && handleSetColumn(col)}
                >
                  { col.header }
                  
                  {/* {col.sorteable && col.sortOrder && (
                    <span
                      className="ml-2"
                    >
                      {
                        col.sortOrder === 'asc' ? '▲' : 
                        col.sortOrder === 'desc' ? '▼' : null
                      }
                    </span>
                  )} */}
                </th>
              ))}
              {controls.length > 0 && (
                <th
                  key="controls-head"
                  scope="col"
                  className="text-center text-nowrap px-4 py-2 cursor-default"
                >
                  Acciones
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {
              data.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length + (controls.length > 0 ? 1 : 0)}
                    className="h-72 text-2xl text-center text-gray-900 font-medium bg-white"
                  >
                    No hay resultados
                  </td>
                </tr>
              ) : (
                data.map((item, index) => (
                  <tr
                    key={index}
                    className="text-gray-900 border-b bg-white"
                  >
                    {columns.map(({ accessor }) => (
                      <td
                        key={String(accessor)}
                        className="text-nowrap capitalize px-4 py-2"
                      >
                        {renderRow(item[accessor])}
                      </td>
                    ))}
                    
                    {controls && (
                      <td
                        key="controls-body"
                        className="flex justify-center gap-2 px-4 py-2"
                      >
                        {controls(item)}
                      </td>
                    )}
                  </tr>
                ))
              )
            }
          </tbody>
        </table>
      </div>

      <PaginationTableSSR
        totalPages={pagination.totalPages}
      />
    </div>
  )
}
