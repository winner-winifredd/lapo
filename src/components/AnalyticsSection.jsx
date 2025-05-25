import { CreditCard, DollarSign, Clock, TrendingUp } from "lucide-react"

const AnalyticsCard = ({
                           title,
                           value,
                           change,
                           changeLabel,
                           icon,
                           iconBg,
                           changeColor = "#00984c",
                           showAttention = false,
                       }) => {
    return (
        <div className="bg-white rounded-lg border border-[#eaecf0] p-6 w-[250px] h-[145px]">

            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBg}`}>{icon}</div>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-[#667085]">{title}</h3>
                {/*<div className={`w-10 h-10 rounded-lg flex items-center justify-center ${iconBg}`}>{icon}</div>*/}
            </div>
            <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold text-[#101828] mb-2">{value}</div>
            {change && (
                <div className="flex items-center text-[12px]">
                    <TrendingUp className="h-3 w-3 mr-1" style={{ color: changeColor }} />
                    <span style={{ color: changeColor }}>{change}</span>
                    <span className="text-[#667085] ml-1">{changeLabel}</span>
                </div>
            )}
            {showAttention && (
                <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-[#e78020] rounded-full mr-2"></div>
                    <span className="text-[#e78020]">Requires attention</span>
                </div>
            )}
        </div>
        </div>
    )
}

const AnalyticsSection = () => {
    return (
        <div className="mb-8">
            <h2 className="text-lg font-semibold text-[#101828] mb-4">Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnalyticsCard
                    title="Total Active Cards"
                    value="26,478"
                    change="+9%"
                    changeLabel="this month"
                    icon={<CreditCard className="h-5 w-5 text-[#00984c]" />}
                    iconBg="bg-[#effaf6]"
                />
                <AnalyticsCard
                    title="Total Personalized Cards"
                    value="15,703"
                    change="+8.5%"
                    changeLabel="this month"
                    icon={<CreditCard className="h-5 w-5 text-[#8020e7]" />}
                    iconBg="bg-[#f4f3ff]"
                />
                <AnalyticsCard
                    title="Today's Revenue"
                    value="₦9.3M"
                    change="+6%"
                    changeLabel="vs yesterday"
                    icon={<DollarSign className="h-5 w-5 text-[#2087e7]" />}
                    iconBg="bg-[#eff8ff]"
                />
                <AnalyticsCard
                    title="Pending Requests"
                    value="38"
                    icon={<Clock className="h-5 w-5 text-[#e78020]" />}
                    iconBg="bg-[#fffaeb]"
                    showAttention={true}
                />
            </div>
        </div>
    )
}

export default AnalyticsSection
