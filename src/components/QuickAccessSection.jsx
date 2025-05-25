import { CreditCard, Users, Eye } from "lucide-react"

const QuickAccessButton = ({ title, icon }) => {
  return (
    <div className="flex items-center space-x-3 p-4 rounded-lg border border-[#eaecf0] hover:shadow-md transition-shadow cursor-pointer">
      <div className="w-10 h-10 bg-[#2087e7] rounded-full flex items-center justify-center">{icon}</div>
      <span className="text-sm font-medium text-[#101828]">{title}</span>
    </div>
  )
}

const QuickAccessSection = () => {
  return (
    <div className="mb-8 items-center space-x-3 p-4 bg-white rounded-lg border border-[#eaecf0] hover:shadow-md transition-shadow">
      <h2 className="text-lg font-semibold text-[#101828] mb-4">Your Quick Access</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <QuickAccessButton title="Manage a Card" icon={<CreditCard className="h-5 w-5 text-white" />} />
        <QuickAccessButton title="Issue Instant Card" icon={<CreditCard className="h-5 w-5 text-white" />} />
        <QuickAccessButton title="Issue Personalized Card" icon={<Users className="h-5 w-5 text-white" />} />
        <QuickAccessButton title="Review Card Requests" icon={<Eye className="h-5 w-5 text-white" />} />
      </div>
    </div>
  )
}

export default QuickAccessSection
