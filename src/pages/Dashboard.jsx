import WelcomeSection from "../components/WelcomeSection"
import QuickAccessSection from "../components/QuickAccessSection"
import AnalyticsSection from "../components/AnalyticsSection"
import MonthlyIssuanceChart from "../components/MonthlyIssuanceChart"
import WeeklyIncomeChart from "../components/WeeklyIncomeChart"
import RecentCardRequests from "../components/RecentCardRequests"
import CardStatusDistribution from "../components/CardStatusDistribution"
import Header from "../components/Header.jsx";

export default function Dashboard() {
    return (
        <div className="lg:ml-[240px]">
            <Header />
            <div className="lg:ml-[20px] p-6 bg-[#F1F7FF] min-h-screen">
            {/* Welcome Section */}
            <WelcomeSection />

            {/* Quick Access Section */}
            <QuickAccessSection />

            {/* Analytics Section */}
            <AnalyticsSection />

            {/* Charts and Tables Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Left Column - Charts */}
                <div className="lg:col-span-2 space-y-6">
                    <MonthlyIssuanceChart />
                    <WeeklyIncomeChart />
                </div>

                {/* Right Column - Tables and Status */}
                <div className="space-y-6 lg:col-span-2">
                    <RecentCardRequests />
                    <CardStatusDistribution />
                </div>
            </div>
        </div>
        </div>
    )
}
