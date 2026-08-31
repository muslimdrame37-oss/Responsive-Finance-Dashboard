const NavItem = ({
    icon: Icon, label, tabName, activeTab, onTabClick, notifications
}) => {

    const isActive = activeTab === tabName
    const baseClasses = "flex items-center space-x-3 p-3 rounded-lg transition-colors group cursor-pointer "
    const activeClasses = "bg-zinc-900 text-white"
    const inactiveClasses = "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
    const finaleTabName = tabName === "Help & Support" ? "Help & Support" : label

    return (
        <a onClick={() => onTabClick(finaleTabName)} className={`{baseClasses}${isActive ? activeClasses : inactiveClasses}`}></a>

        <Icon />
    )
}

export default NavItem