const DonutChart = () => {
  const statusData = [
    { label: "Active", color: "#00984c", percentage: 50 },
    { label: "Expired", color: "#ffba24", percentage: 25 },
    { label: "Inactive", color: "#2087e7", percentage: 12.5 },
    { label: "Blocked", color: "#8020e7", percentage: 7.5 },
    { label: "Lost", color: "#ff4457", percentage: 5 },
  ]

  let cumulativePercentage = 0

  return (
    <div>
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {statusData.map((item, index) => {
              const strokeDasharray = `${item.percentage * 2.51} 251.2`
              const strokeDashoffset = -cumulativePercentage * 2.51
              cumulativePercentage += item.percentage

              return (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                />
              )
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs text-[#667085]">Total Cards</span>
            <span className="text-xl font-bold text-[#101828]">2,450</span>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        {statusData.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
            <span className="text-sm text-[#667085]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DonutChart
