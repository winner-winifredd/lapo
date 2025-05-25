export function LogoutIcon({ active, ...props }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5 13H2a1 1 0 01-1-1V2a1 1 0 011-1h3M10 10l3-3-3-3M13 7H5"
        stroke={active ? "#014DAF" : "#D0D5DD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
