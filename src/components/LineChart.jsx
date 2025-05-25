const LineChart = () => {
  const weeklyData = [
    { day: "Mon", value: 50 },
    { day: "Tue", value: 35 },
    { day: "Wed", value: 40 },
    { day: "Thu", value: 55 },
    { day: "Fri", value: 50 },
    { day: "Sat", value: 25 },
    { day: "Sun", value: 75 },
  ]

  return (
    <div>
      <div className="h-48 relative mb-4">
        <svg className="w-full h-full" viewBox="0 0 400 150">
          <polyline
            fill="none"
            stroke="#00984c"
            strokeWidth="2"
            points="20,100 80,120 140,110 200,90 260,100 320,130 380,75"
          />
        </svg>
      </div>
      <div className="flex justify-between">
        {weeklyData.map((data, index) => (
          <span key={index} className="text-xs text-[#667085]">
            {data.day}
          </span>
        ))}
      </div>
    </div>
  )
}

export default LineChart
