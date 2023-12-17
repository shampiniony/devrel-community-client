import React from 'react'

interface ISearch {
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: () => void;
}

export const Search: React.FC<ISearch> = (props) => {
  return (
    <input
      value={props.value}
      onChange={props.onChange}
      placeholder={ props.placeholder ?? 'Как найти себя' }
      className={`py-2 bg-left-with-space text-sm px-8 bg-second-primary w-48 rounded-lg
      bg-search-field bg-no-repeat ${props.className}`}
      type='text'
    />
  )
}
