'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';

import { useDebounce } from 'use-debounce';

export const SearchTable = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [search, setSearch] = useState('');

  const [value] = useDebounce(search, 300);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      console.log(name, value)
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )

  const handleSetSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    console.log(value)

    const query = createQueryString('q', value)
    console.log(query)
    router.push(pathname + '?' + createQueryString('search', value))
  }, [value])

  return (
    <input
      type="search"
      placeholder="Buscar..."
      className="w-1/2 max-w-sm px-4 py-2 border border-skyLight rounded-lg focus:outline-sky lg:w-full"
      value={search}
      onChange={handleSetSearch}
    />
  )
}
