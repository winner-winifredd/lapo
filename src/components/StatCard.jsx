import { TrendingUp } from "lucide-react"

const StatCard = ({ title, value, change, changeLabel, icon, iconBg, changeColor = "#00984c" }) => {
  return (
    <div className="bg-white rounded-lg border border-[#eaecf0] p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-[#667085]">{title}</h3>
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBg}`}>{icon}</div>
      </div>
      <div className="text-2xl font-bold text-[#101828] mb-2">{value}</div>
      {change && (
        <div className="flex items-center text-sm">
          <TrendingUp className="h-3 w-3 mr-1" style={{ color: changeColor }} />
          <span style={{ color: changeColor }}>{change}</span>
          <span className="text-[#667085] ml-1">{changeLabel}</span>
        </div>
      )}
    </div>
  )
}

export default StatCard
