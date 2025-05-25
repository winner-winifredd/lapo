const MonthlyIssuanceChart = () => {
  const monthlyData = [
    { month: "May", personalized: 10, instant: 40 },
    { month: "Jun", personalized: 22, instant: 50 },
    { month: "Jul", personalized: 7, instant: 26 },
    { month: "Aug", personalized: 10, instant: 50 },
    { month: "Sep", personalized: 12, instant: 37 },
    { month: "Oct", personalized: 20, instant: 60 },
    { month: "Nov", personalized: 12, instant: 63 },
  ]

  const maxValue = 100
  const yAxisLabels = [0, 20, 40, 60, 80, 100]

  return (
      <div className="bg-white rounded-lg border border-[#eaecf0] p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-[#101828]">Monthly Issuance</h3>
          <div className="w-4 h-4 text-gray-400">
            {/*<svg viewBox="0 0 16 16" fill="currentColor">*/}
            {/*  <path d="M3 3h10v10H3z" stroke="currentColor" strokeWidth="1" fill="none"/>*/}
            {/*  <path d="M6 6h4v4H6z" stroke="currentColor" strokeWidth="1" fill="none"/>*/}
            {/*</svg>*/}
          </div>
        </div>

        <div className="flex">
          {/* Y-axis labels */}
          <div className="flex flex-col justify-between h-64 mr-4 py-2">
            {yAxisLabels.reverse().map((label, index) => (
                <span key={index} className="text-xs text-[#667085] text-right" style={{ lineHeight: '1' }}>
              {label}
            </span>
            ))}
          </div>

          {/* Chart bars */}
          <div className="h-64 flex items-end justify-between space-x-6 flex-1 mb-4">
            {monthlyData.map((data, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                  <div className="flex flex-col items-center w-full max-w-[32px]">
                    {/* Instant (light blue) - top portion */}
                    <div
                        className="w-full bg-[#b3d1ff] rounded-t"
                        style={{ height: `${(data.instant / maxValue) * 240}px` }}
                    ></div>
                    {/* Personalized (dark blue) - bottom portion */}
                    <div
                        className="w-full bg-[#1e5ba8]"
                        style={{ height: `${(data.personalized / maxValue) * 240}px` }}
                    ></div>
                  </div>
                  <span className="text-xs text-[#667085]">{data.month}</span>
                </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-[#1e5ba8] rounded-full"></div>
            <span className="text-sm text-[#667085]">Personalized</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-[#b3d1ff] rounded-full"></div>
            <span className="text-sm text-[#667085]">Instant</span>
          </div>
        </div>
      </div>
  )
}

export default MonthlyIssuanceChart