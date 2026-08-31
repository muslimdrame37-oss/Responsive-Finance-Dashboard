import { useState } from "react"
import LeftPanel from "./LeftPanel"
import MainContent from "./MainContent"
import RightPanel from "./RightPanel"

const DashboardLayout = ({ onLogout }) => {
    const [activeTab, setactiveTab] = useState("Dashboard")

    return (
        <div className="flex min-h-screen">
            <div className="w-64 bg-zinc-50 p-6 shadow-md hidden lg:block">
                <LeftPanel />
            </div>
            {/* MAIN CONTENT (DYNAMIC AREA) */}
            <div className="flex-1 p-2 container md:p-6 lg:p-10 max-w-5xl md:mx-auto">
                {activeTab === "Dashboard" && <MainContent />}
                {/* OTHERS TABS ADD HERE */}
            </div>

            <div className="w-80 bg-zinc-100 p-4 shadow-md hidden xl:block ">
                <RightPanel />
            </div>
        </div>
    )
}

export default DashboardLayout