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
    (searchValue: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (searchValue) {
        params.set('search', searchValue);
        params.delete('page');
      } else {
        params.delete('search');
      }

      return params.toString();
    },
    [searchParams]
  );

  const handleSetSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const queryString = createQueryString(value);
    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
