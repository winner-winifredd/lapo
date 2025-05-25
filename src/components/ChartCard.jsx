const ChartCard = ({ title, children, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg border border-[#eaecf0] p-6 ${className}`}>
      <h3 className="text-lg font-semibold text-[#101828] mb-6">{title}</h3>
      {children}
    </div>
  )
}

export default ChartCard
