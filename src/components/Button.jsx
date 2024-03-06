import React from 'react'

function Button({
    title,
    className = '',
    type = "button",
    ...props
}) {
  return (
    <button
    {...props}
    type={type}
    className={`${className} rounded-md py-2  font-semibold shadow-sm border-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black text-lg`}
  >
    {title}
  </button>
  )
}

export default Button
