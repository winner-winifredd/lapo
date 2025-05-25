const BarChart = () => {
  const monthlyData = [
    { month: "May", personalized: 50, instant: 10 },
    { month: "Jun", personalized: 70, instant: 20 },
    { month: "Jul", personalized: 30, instant: 8 },
    { month: "Aug", personalized: 60, instant: 12 },
    { month: "Sep", personalized: 45, instant: 10 },
    { month: "Oct", personalized: 80, instant: 18 },
    { month: "Nov", personalized: 70, instant: 15 },
  ]

  const maxValue = Math.max(...monthlyData.map((d) => d.personalized + d.instant))

  return (
    <div>
      <div className="h-64 flex items-end justify-between space-x-2 mb-4">
        {monthlyData.map((data, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 flex-1">
            <div className="flex flex-col items-center w-full max-w-[40px]">
              <div
                className="w-full bg-[#cce2ff] rounded-t"
                style={{ height: `${(data.personalized / maxValue) * 200}px` }}
              ></div>
              <div
                className="w-full bg-[#014daf] rounded-b"
                style={{ height: `${(data.instant / maxValue) * 200}px` }}
              ></div>
            </div>
            <span className="text-xs text-[#667085]">{data.month}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[#014daf] rounded-full"></div>
          <span className="text-sm text-[#667085]">Personalized</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[#cce2ff] rounded-full"></div>
          <span className="text-sm text-[#667085]">Instant</span>
        </div>
      </div>
    </div>
  )
}

export default BarChart
