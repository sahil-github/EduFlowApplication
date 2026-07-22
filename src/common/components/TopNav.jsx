import { Search, NotificationsOutlined, SettingsOutlined } from '@mui/icons-material';

const TopNav = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4 border-b border-white/10">
            <div className="flex items-center gap-8">
                <div className="text-2xl font-bold text-white tracking-wide">
                    EduFlow
                </div>
                <div className="flex gap-6 text-sm text-gray-400 font-medium">
                    <a href="#" className="text-white border-b-2 border-blue-500 pb-1">Dashboard</a>
                    <a href="#" className="hover:text-white transition-colors pb-1">Catalog</a>
                    <a href="#" className="hover:text-white transition-colors pb-1">My Learning</a>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fontSize="small" />
                    <input 
                        type="text" 
                        placeholder="Search courses..." 
                        className="bg-transparent border border-white/20 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-blue-500 w-64 placeholder-gray-500"
                    />
                </div>
                <button className="text-gray-400 hover:text-white">
                    <NotificationsOutlined />
                </button>
                <button className="text-gray-400 hover:text-white">
                    <SettingsOutlined />
                </button>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border border-white/20 overflow-hidden">
                    {/* Placeholder for avatar */}
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
