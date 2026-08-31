import { DollarSign } from "lucide-react"
import { tabs } from "../assets/data"
import NavItem from "./UI/NavItem"

const SideBar = ({ activeTab, setActiveTab, onLogout }) => {

    const handleClick = (tabName) => {
        setActiveTab(tabName)
    }

    return (
        <div className="flex flex-col h-full ">
            {/* Logo */}

            <div className="flex items-center space-x-2 mb-8">
                <div className="bg-zinc-200 rounded-lg p-2">
                    <DollarSign size={24} className="text-zinc-700" />
                    <span className="text-xl tracking-tight font-bold text-zinc-900">
                        FinanceDash
                    </span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2">
                {
                    tabs.map((tab) => (
                        <NavItem key={tab.key} activeTab={activeTab} onTabClick={handleClick} {...tab} />
                    ))
                }
            </nav>
            {/* Premium Upsell Card */}

            <div className="mt-auto pt-6 border-t border-zinc-100">
                {/* Log Out Button */}
                <button onClick={onLogout} className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg text-red-600 bg-red-50 hover:bg-red-100 transition-colors cursor-pointer">
                    Log Out
                </button>

                {/* Premium Upsell */}

                <div className="mt-4 bg-zinc-100 rounded-lg p-4 text-center">
                    <div className="bg-green-100 p-3 rounded-full inline-flex mb-3">
                        <DollarSign size={20} className="text-green-600" />
                    </div>

                    <p className="text-sm font-semibold text-zinc-900">
                        Unlock Premium
                    </p>

                    <p className="text-xs text-zinc-600 mb-3">
                        $9.99/month
                    </p>

                    <button className="w-full bg-zinc-900 text-white text-sm py-2 rounded-lg hover:bg-zinc-700 transition-colors duration-100 cursor-pointer">
                        Explore plans
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SideBar 