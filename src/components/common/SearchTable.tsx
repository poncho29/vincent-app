'use client';

import React, { useState } from 'react'

export const SearchTable = () => {
  const [search, setSearch] = useState('');

  const handleSetSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

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
