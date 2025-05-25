const CardStatusDistribution = () => {
  const statusData = [
    { label: "Active", color: "#01A4AF" },
    { label: "Expired", color: "#FFBA24" },
    { label: "Inactive", color: "#014DAF" },
    { label: "Blocked", color: "#8020E7" },
    { label: "Lost", color: "#FF4457" },
  ]

  return (
      <div className="bg-white rounded-lg border border-[#eaecf0] p-4">
        <h3 className="text-lg font-semibold text-[#101828] mb-2">Card Status Distribution</h3>

        <div className="flex flex-col items-center justify-center mb-2">
          <div className="relative w-58 h-58 mb-2">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#01A4AF"
                  strokeWidth="2"
                  strokeDasharray="125.6 251.2"
                  strokeDashoffset="0"
              />
              <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#FFBA24"
                  strokeWidth="2"
                  strokeDasharray="62.8 251.2"
                  strokeDashoffset="-125.6"
              />
              <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#014DAF"
                  strokeWidth="2"
                  strokeDasharray="31.4 251.2"
                  strokeDashoffset="-188.4"
              />
              <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#8020E7"
                  strokeWidth="2"
                  strokeDasharray="15.7 251.2"
                  strokeDashoffset="-219.8"
              />
              <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#FF4457"
                  strokeWidth="2"
                  strokeDasharray="15.7 251.2"
                  strokeDashoffset="-235.5"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-sm text-[#667085]">Total Cards</span>
              <span className="text-2xl font-bold text-[#101828]">2,450</span>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-6 flex-wrap">
            {statusData.map((item, index) => (
                <div key={index} className="flex flex-row items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-[#667085]">{item.label}</span>
                </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default CardStatusDistribution