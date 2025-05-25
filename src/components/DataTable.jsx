const DataTable = () => {
  const cardRequests = [
    { branch: "Corporate", cardType: "Instant", quantity: 10, status: "Ready", statusColor: "#00984c" },
    { branch: "Corporate", cardType: "Personalized", quantity: 10, status: "In Progress", statusColor: "#ffba24" },
    { branch: "Corporate", cardType: "Personalized", quantity: 10, status: "Acknowledged", statusColor: "#2087e7" },
    { branch: "Corporate", cardType: "Instant", quantity: 10, status: "Pending", statusColor: "#667085" },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#eaecf0]">
            <th className="text-left text-xs font-medium text-[#667085] pb-3">Branch</th>
            <th className="text-left text-xs font-medium text-[#667085] pb-3">Card Type</th>
            <th className="text-left text-xs font-medium text-[#667085] pb-3">Quantity</th>
            <th className="text-left text-xs font-medium text-[#667085] pb-3">Status</th>
            <th className="text-left text-xs font-medium text-[#667085] pb-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {cardRequests.map((request, index) => (
            <tr key={index} className="border-b border-[#f2f4f7]">
              <td className="py-3 text-sm text-[#101828]">{request.branch}</td>
              <td className="py-3 text-sm text-[#667085]">{request.cardType}</td>
              <td className="py-3 text-sm text-[#101828]">{request.quantity}</td>
              <td className="py-3">
                <span
                  className="px-2 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: `${request.statusColor}20`,
                    color: request.statusColor,
                    border: `1px solid ${request.statusColor}30`,
                  }}
                >
                  {request.status}
                </span>
              </td>
              <td className="py-3">
                <button className="text-[#2087e7] text-sm font-medium hover:underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
