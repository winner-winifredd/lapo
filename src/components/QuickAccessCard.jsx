import { ChevronRight } from "lucide-react"

const QuickAccessCard = ({ title, icon }) => {
    return (
        <div className="bg-[#f1f7ff] rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-[#e2e2e2] transition-colors">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#014daf] rounded-full flex items-center justify-center">{icon}</div>
                <span className="text-[#121212] font-medium text-sm">{title}</span>
            </div>
            <ChevronRight className="w-5 h-5 text-[#808080]" />
        </div>
    )
}

export default QuickAccessCard
