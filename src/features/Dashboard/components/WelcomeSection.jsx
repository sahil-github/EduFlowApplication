import Card from "../../../common/components/Card";
import { LocalFireDepartment, AccessTime, WorkspacePremium } from '@mui/icons-material';

const WelcomeSection = () => {
    return (
        <Card className="p-8 bg-gradient-to-br from-[#1c1f28]/80 to-[#1c1f28]/40 border-t-blue-500/20">
            <h1 className="text-white text-4xl font-bold mb-4">
                Welcome back, Alex!
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">
                You're doing great! You completed 4 lessons this week. Keep the momentum going to finish <span className="text-white font-semibold">Project Management</span> by Friday.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-[#13151a]/60 border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-32">
                    <div className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-2">Current Streak</div>
                    <div className="flex items-center gap-3">
                        <LocalFireDepartment sx={{ color: '#f97316' }} />
                        <span className="text-white font-bold text-2xl">12 Days</span>
                    </div>
                </div>
                
                <div className="bg-[#13151a]/60 border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-32">
                    <div className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-2">Time Learned</div>
                    <div className="flex items-center gap-3">
                        <AccessTime sx={{ color: '#60a5fa' }} />
                        <span className="text-white font-bold text-2xl">24.5 hrs</span>
                    </div>
                </div>
                
                <div className="bg-[#13151a]/60 border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-32">
                    <div className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-2">Courses Completed</div>
                    <div className="flex items-center gap-3">
                        <WorkspacePremium sx={{ color: '#facc15' }} />
                        <span className="text-white font-bold text-2xl">8</span>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default WelcomeSection;
