const WeeklyIncomeChart = () => {
    const weeklyData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const yAxisLabels = [0, 20, 40, 60, 80, 100]

    return (
        <div className="bg-white rounded-lg border border-[#eaecf0] p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[#101828]">This Week's Income</h3>
                <div className="w-4 h-4 text-gray-400">
                    <svg viewBox="0 0 16 16" fill="currentColor">
                        <path d="M3 3h10v10H3z" stroke="currentColor" strokeWidth="1" fill="none"/>
                        <path d="M6 6h4v4H6z" stroke="currentColor" strokeWidth="1" fill="none"/>
                    </svg>
                </div>
            </div>

            <div className="flex">
                {/* Y-axis labels */}
                <div className="flex flex-col justify-between h-48 mr-4 py-1">
                    {yAxisLabels.reverse().map((label, index) => (
                        <span key={index} className="text-xs text-[#667085] text-right" style={{ lineHeight: '1' }}>
              {label}
            </span>
                    ))}
                </div>

                {/* Chart area */}
                <div className="h-48 relative mb-4 flex-1">
                    {/* Grid lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 192">
                        {/* Horizontal grid lines */}
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                            <line
                                key={i}
                                x1="0"
                                y1={32 * i + 16}
                                x2="400"
                                y2={32 * i + 16}
                                stroke="#f1f5f9"
                                strokeWidth="1"
                            />
                        ))}
                        {/* Vertical grid lines */}
                        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                            <line
                                key={i}
                                x1={57 * i + 28.5}
                                y1="16"
                                x2={57 * i + 28.5}
                                y2="176"
                                stroke="#f1f5f9"
                                strokeWidth="1"
                            />
                        ))}
                    </svg>

                    {/* Line chart */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 192">
                        <polyline
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="2.5"
                            points="28.5,144 85.5,120 142.5,128 199.5,136 256.5,152 313.5,128 370.5,88"
                        />
                        {/* Data points */}
                        {[
                            [28.5, 144], [85.5, 120], [142.5, 128], [199.5, 136],
                            [256.5, 152], [313.5, 128], [370.5, 88]
                        ].map(([x, y], index) => (
                            <circle
                                key={index}
                                cx={x}
                                cy={y}
                                r="3"
                                fill="#22c55e"
                                stroke="white"
                                strokeWidth="1.5"
                            />
                        ))}
                    </svg>
                </div>
            </div>

            <div className="flex justify-between ml-12">
                {weeklyData.map((day, index) => (
                    <span key={index} className="text-xs text-[#667085]">
            {day}
          </span>
                ))}
            </div>
        </div>
    )
}

export default WeeklyIncomeChart;