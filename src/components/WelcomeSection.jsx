const WelcomeSection = () => {
  return (
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#101828] mb-1">Hi Nazeer, what would you like to do today?</h1>
            <p className="text-sm text-[#667085]">Last login: 26/11/2024 - 14:33:46</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-[#667085]">Today</span>
            <span className="text-sm font-medium text-[#101828]">1 Nov 2024</span>
          </div>
        </div>
      </div>
  )
}

export default WelcomeSection
