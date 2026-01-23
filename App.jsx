import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  Filter, 
  Search, 
  MoreVertical, 
  CheckCircle, 
  XCircle, 
  BarChart, 
  Users, 
  Settings, 
  PieChart,
  MessageSquare,
  Calendar,
  ChevronRight,
  TrendingUp,
  AlertCircle,
  Zap,
  Activity
} from 'lucide-react';

// --- Components ---

const Navigation = ({ activeTab, setActiveTab }) => (
  <div className="w-64 bg-slate-900 text-white h-screen flex flex-col fixed left-0 top-0 shadow-xl z-50">
    <div className="p-6 border-b border-slate-800">
      <h1 className="text-3xl font-black italic tracking-tighter flex items-center gap-2 text-white">
        <Zap className="text-yellow-400 fill-yellow-400" size={28} />
        REVV
      </h1>
      <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold ml-9">Sales Engine</p>
    </div>
    <nav className="flex-1 p-4 space-y-2 mt-4">
      <NavButton active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} icon={<BarChart size={20} />} label="Dashboard" />
      <NavButton active={activeTab === 'listing'} onClick={() => setActiveTab('listing')} icon={<Users size={20} />} label="Lead Listing" />
      <NavButton active={activeTab === 'details'} onClick={() => setActiveTab('details')} icon={<MessageSquare size={20} />} label="Lead Details" />
      <NavButton active={activeTab === 'management'} onClick={() => setActiveTab('management')} icon={<Settings size={20} />} label="Management" />
    </nav>
    <div className="p-4 bg-slate-800 m-4 rounded-lg border border-slate-700">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-slate-900">JD</div>
        <div>
          <p className="text-sm font-medium">John Doe</p>
          <div className="flex items-center gap-1">
             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
             <p className="text-xs text-slate-400">Online</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const NavButton = ({ active, onClick, icon, label }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
      active ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

const DashboardScreen = () => (
  <div className="p-8 space-y-6 bg-slate-50 min-h-screen pl-72">
    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Command Center</h2>
        <p className="text-slate-500 text-sm">Real-time overview of dealership performance</p>
      </div>
      <div className="flex gap-2">
         <select className="bg-white border rounded-md px-3 py-2 text-sm text-slate-600 shadow-sm">
           <option>This Week</option>
           <option>This Month</option>
         </select>
         <button className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800">Generate Report</button>
      </div>
    </div>

    {/* KPI Cards */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <KpiCard title="Total Leads" value="142" change="+12%" icon={<Users className="text-blue-500" />} />
      <KpiCard title="Avg Response" value="12m" change="-5m" isGood icon={<Zap className="text-yellow-500" />} />
      <KpiCard title="Test Drives" value="34" change="+22%" icon={<Calendar className="text-purple-500" />} />
      <KpiCard title="Cars Sold" value="12" change="+2%" icon={<CheckCircle className="text-green-500" />} />
    </div>

    {/* Charts Area */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold mb-1 text-slate-800">Lead Sources</h3>
        <p className="text-xs text-slate-500 mb-6">Which channels are performing best?</p>
        <div className="flex items-center justify-center h-56">
           {/* Mock Chart Visual */}
           <div className="flex gap-6 items-end h-40 w-full px-8 justify-between">
              <Bar height="h-full" label="FB Ads" color="bg-blue-500" value="45%" />
              <Bar height="h-3/4" label="Google" color="bg-red-500" value="30%" />
              <Bar height="h-1/2" label="Walk-in" color="bg-green-500" value="15%" />
              <Bar height="h-1/4" label="Web" color="bg-slate-400" value="10%" />
           </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold mb-1 text-slate-800">Conversion Funnel</h3>
        <p className="text-xs text-slate-500 mb-6">Pipeline drop-off rates</p>
        <div className="space-y-4">
          <FunnelStage label="New Leads" count={142} percent={100} color="bg-blue-100" barColor="bg-blue-500" />
          <FunnelStage label="Contacted" count={98} percent={69} color="bg-indigo-100" barColor="bg-indigo-500" />
          <FunnelStage label="Test Drive" count={45} percent={31} color="bg-purple-100" barColor="bg-purple-500" />
          <FunnelStage label="Negotiation" count={22} percent={15} color="bg-orange-100" barColor="bg-orange-500" />
          <FunnelStage label="Sold" count={12} percent={8} color="bg-green-100" barColor="bg-green-500" />
        </div>
      </div>
    </div>
  </div>
);

const LeadListingScreen = () => (
  <div className="p-8 space-y-6 bg-slate-50 min-h-screen pl-72">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Lead Queue</h2>
        <p className="text-slate-500 text-sm mt-1">4 High Priority Actions</p>
      </div>
      <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 shadow-sm shadow-blue-200 flex items-center gap-2 transition-all">
        <Users size={18} /> Add Manual Lead
      </button>
    </div>

    {/* Filters Toolbar */}
    <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-200 flex flex-wrap gap-4 items-center justify-between">
      <div className="flex gap-1">
        <TabPill label="All Leads" />
        <TabPill label="Urgent" count={4} color="bg-red-100 text-red-700" active />
        <TabPill label="Follow Up" count={8} color="bg-blue-100 text-blue-700" />
        <TabPill label="Closed" />
      </div>
      <div className="flex gap-3 pr-2">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
          <input type="text" placeholder="Search name or phone..." className="pl-9 pr-4 py-2 border border-slate-200 bg-slate-50 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
    </div>

    {/* Table */}
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="p-4 text-xs uppercase tracking-wider font-semibold text-slate-500">Customer</th>
            <th className="p-4 text-xs uppercase tracking-wider font-semibold text-slate-500">Interest</th>
            <th className="p-4 text-xs uppercase tracking-wider font-semibold text-slate-500">Source</th>
            <th className="p-4 text-xs uppercase tracking-wider font-semibold text-slate-500">Status</th>
            <th className="p-4 text-xs uppercase tracking-wider font-semibold text-slate-500">Wait Time</th>
            <th className="p-4 text-xs uppercase tracking-wider font-semibold text-slate-500">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <LeadRow name="Rahul Sharma" model="Swift Dzire" source="Facebook" status="New" color="red" time="15m" />
          <LeadRow name="Priya Patel" model="Tata Nexon" source="Google" status="Contacted" color="blue" time="2h" />
          <LeadRow name="Amit Kumar" model="Hyundai Creta" source="Website" status="Test Drive" color="purple" time="1d" />
          <LeadRow name="Sneha Gupta" model="Honda City" source="Walk-in" status="Negotiation" color="yellow" time="2d" />
          <LeadRow name="Vikram Singh" model="Mahindra Thar" source="Instagram" status="New" color="red" time="5m" />
        </tbody>
      </table>
    </div>
  </div>
);

const LeadDetailsScreen = () => (
  <div className="p-8 bg-slate-50 min-h-screen pl-72">
    <div className="mb-6 flex items-center justify-between">
       <div className="flex items-center gap-2 text-slate-500 text-sm">
        <span className="hover:text-blue-600 cursor-pointer">Leads</span> <ChevronRight size={14} /> <span className="text-slate-800 font-bold">Rahul Sharma</span>
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">Transfer Lead</button>
        <button className="px-4 py-2 bg-red-50 border border-red-100 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100">Mark Lost</button>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* Left Column: Customer Info */}
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-blue-200">RS</div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Rahul Sharma</h1>
              <p className="text-slate-500 text-sm flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Active Prospect</p>
            </div>
          </div>
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <InfoItem label="Email" value="rahul.s@example.com" icon={<Mail size={16} />} />
            <InfoItem label="Phone" value="+91 98765 43210" icon={<Phone size={16} />} />
            <InfoItem label="Interest" value="Swift Dzire VXI" icon={<TrendingUp size={16} />} />
            <InfoItem label="Budget" value="₹ 8-9 Lakhs" icon={<AlertCircle size={16} />} />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2">
            <button className="bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-bold shadow-lg shadow-green-100 transition-all">
              <Phone size={16} /> Call
            </button>
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-bold transition-all">
              <MessageSquare size={16} /> WhatsApp
            </button>
          </div>
        </div>

        {/* Lead Qualification Pipeline */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">Move to Stage</h3>
          <div className="space-y-2">
             <StageButton current label="1. New Lead" />
             <StageButton label="2. Contacted" />
             <StageButton label="3. Test Drive" highlight />
             <StageButton label="4. Negotiation" />
             <StageButton label="5. Deal Closed" />
          </div>
        </div>
      </div>

      {/* Right Column: Activity & Notes */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white p-0 rounded-xl shadow-sm border border-slate-200 h-full overflow-hidden flex flex-col">
           <div className="flex items-center justify-between border-b px-6 pt-4">
             <div className="flex gap-6">
               <button className="text-blue-600 font-bold border-b-2 border-blue-600 pb-4 text-sm">Activity Log</button>
               <button className="text-slate-500 font-medium pb-4 hover:text-slate-700 text-sm">Sales Script</button>
               <button className="text-slate-500 font-medium pb-4 hover:text-slate-700 text-sm">Files</button>
             </div>
           </div>

           <div className="p-6 bg-slate-50 flex-1">
             <div className="space-y-6 relative pl-4 border-l-2 border-slate-200 ml-2">
                <TimelineItem 
                  title="Lead Created" 
                  time="Today, 10:30 AM" 
                  text="Lead imported from Facebook Ads Campaign 'Summer Sale'."
                  icon={<Zap size={14} />}
                  color="bg-slate-800 text-white"
                />
                <TimelineItem 
                  title="Automated Welcome Email" 
                  time="Today, 10:31 AM" 
                  text="System sent 'Welcome to HSR Motors' template."
                  icon={<Mail size={14} />}
                  color="bg-blue-500 text-white"
                />
                <TimelineItem 
                  title="Auto-Assigned" 
                  time="Today, 10:35 AM" 
                  text="Assigned to John Doe (Round Robin)."
                  icon={<Users size={14} />}
                  color="bg-purple-500 text-white"
                />
             </div>
           </div>
            
            {/* Note Input */}
            <div className="p-4 bg-white border-t border-slate-200">
              <div className="relative">
                <textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" rows={2} placeholder="Type a note or log call outcome..."></textarea>
                <button className="absolute bottom-2 right-2 bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold hover:bg-blue-700">Submit</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
);

const ManagementScreen = () => (
  <div className="p-8 space-y-6 bg-slate-50 min-h-screen pl-72">
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">System Configuration</h2>
        <p className="text-slate-500 text-sm mt-1">Manage rules, integrations, and users</p>
      </div>
      <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800">Audit Logs</button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Distribution Rules */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
               <Activity size={20} className="text-blue-500"/> Lead Distribution
            </h3>
            <p className="text-xs text-slate-500 mt-1">Logic for assigning new leads</p>
          </div>
          <div className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Active</div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 border-2 border-blue-500 bg-blue-50 rounded-lg cursor-pointer">
            <div>
              <p className="font-bold text-slate-900 text-sm">Round Robin</p>
              <p className="text-xs text-blue-700 mt-0.5">Sequential assignment (Equal load)</p>
            </div>
            <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-white shadow-sm flex items-center justify-center"><CheckCircle size={12} className="text-white"/></div>
          </div>
          <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer">
            <div>
              <p className="font-bold text-slate-700 text-sm">Performance Based</p>
              <p className="text-xs text-slate-500 mt-0.5">Higher conversion = More leads</p>
            </div>
            <div className="w-5 h-5 rounded-full border border-slate-300"></div>
          </div>
        </div>
      </div>

      {/* Source Integrations */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-start mb-6">
           <div>
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
               <Settings size={20} className="text-slate-500"/> API Connections
            </h3>
            <p className="text-xs text-slate-500 mt-1">Lead source health check</p>
          </div>
        </div>
        <div className="space-y-3">
          <IntegrationRow name="Facebook Ads" status="Healthy" lastSync="1m ago" icon="FB" color="bg-blue-600" />
          <IntegrationRow name="Google Ads" status="Healthy" lastSync="4m ago" icon="G" color="bg-red-500" />
          <IntegrationRow name="Website Form" status="Healthy" lastSync="Just now" icon="W" color="bg-green-600" />
          <IntegrationRow name="Twitter" status="Error" lastSync="Auth Failed" icon="X" color="bg-black" isError />
        </div>
      </div>

      {/* Automation Rules */}
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2"><Zap size={20} className="text-yellow-500"/>Active Automations</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AutoRuleCard title="Stale Lead Recycler" desc="Re-assign lead if status is 'New' for > 4 hours." active />
          <AutoRuleCard title="Auto-WhatsApp" desc="Send catalog PDF when status changes to 'Interested'." active />
          <AutoRuleCard title="Missed Call Alert" desc="Email manager if 3 calls are missed in a row." />
        </div>
      </div>
    </div>
  </div>
);

// --- Helper Components ---

const Bar = ({ height, label, color, value }) => (
  <div className="flex flex-col items-center gap-2 w-12 group">
    <div className="text-xs font-bold text-slate-700 opacity-0 group-hover:opacity-100 transition-all mb-1">{value}</div>
    <div className={`w-full rounded-t-lg ${color} ${height} opacity-90 group-hover:opacity-100 transition-all relative`}></div>
    <span className="text-xs font-medium text-slate-500">{label}</span>
  </div>
);

const StageButton = ({ label, current, highlight }) => (
   <div className={`w-full p-3 rounded-lg flex items-center justify-between text-sm font-medium transition-all cursor-pointer ${
     current ? 'bg-blue-50 text-blue-700 border border-blue-200' : 
     highlight ? 'bg-white border-2 border-dashed border-blue-300 text-slate-500 hover:border-blue-500 hover:text-blue-600' :
     'bg-white border border-slate-100 text-slate-400 hover:bg-slate-50'
   }`}>
      {label}
      {current && <CheckCircle size={16} />}
      {highlight && <ChevronRight size={16} />}
   </div>
);

const KpiCard = ({ title, value, change, icon, isGood }) => (
  <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-start justify-between relative overflow-hidden group">
    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-slate-50 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:scale-110"></div>
    <div className="relative z-10">
      <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{title}</p>
      <h4 className="text-3xl font-black text-slate-800 mt-2 tracking-tight">{value}</h4>
      <p className={`text-xs font-bold mt-2 inline-flex items-center gap-1 ${isGood || change.includes('+') ? 'text-green-600 bg-green-50 px-2 py-0.5 rounded' : 'text-slate-400'}`}>
        {change.includes('+') ? <TrendingUp size={12}/> : null} {change}
      </p>
    </div>
    <div className="p-3 bg-slate-50 rounded-xl relative z-10 border border-slate-100">{icon}</div>
  </div>
);

const FunnelStage = ({ label, count, percent, color, barColor }) => (
  <div>
    <div className="flex justify-between text-xs mb-1.5">
      <span className="font-bold text-slate-700 uppercase tracking-wide">{label}</span>
      <span className="text-slate-500 font-medium">{count} ({percent}%)</span>
    </div>
    <div className="w-full bg-slate-100 rounded-full h-2">
      <div className={`${barColor} h-2 rounded-full`} style={{ width: `${percent}%` }}></div>
    </div>
  </div>
);

const TabPill = ({ label, count, color = "text-slate-600", active }) => (
  <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${active ? 'bg-slate-800 text-white shadow-md' : 'hover:bg-slate-100 text-slate-500'}`}>
    {label} {count && <span className={`ml-1 px-1.5 py-0.5 rounded-full text-xs font-bold ${active ? 'bg-white text-slate-900' : 'bg-white border border-slate-200'}`}>{count}</span>}
  </button>
);

const LeadRow = ({ name, model, source, status, color, time }) => {
  const statusColors = {
    red: "bg-red-100 text-red-700 border-red-200",
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-200"
  };
  
  return (
    <tr className="hover:bg-blue-50/50 transition border-b border-slate-50 last:border-0 group cursor-pointer">
      <td className="p-4 font-bold text-slate-800 text-sm">{name}</td>
      <td className="p-4 text-slate-600 text-sm">{model}</td>
      <td className="p-4 text-slate-500 text-sm flex items-center gap-2">
         {source === 'Facebook' && <span className="w-2 h-2 rounded-full bg-blue-600"></span>}
         {source === 'Google' && <span className="w-2 h-2 rounded-full bg-red-500"></span>}
         {source === 'Website' && <span className="w-2 h-2 rounded-full bg-green-500"></span>}
         {source === 'Instagram' && <span className="w-2 h-2 rounded-full bg-pink-500"></span>}
         {source}
      </td>
      <td className="p-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusColors[color]}`}>{status}</span>
      </td>
      <td className="p-4 text-slate-500 text-xs font-mono bg-slate-50 rounded w-max">{time}</td>
      <td className="p-4">
        <button className="text-blue-600 hover:bg-blue-100 p-2 rounded-full transition opacity-0 group-hover:opacity-100"><Phone size={16}/></button>
      </td>
    </tr>
  );
};

const InfoItem = ({ label, value, icon }) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">{label}</p>
      <p className="text-sm font-bold text-slate-800">{value}</p>
    </div>
  </div>
);

const TimelineItem = ({ title, time, text, icon, color }) => (
  <div className="relative mb-8 last:mb-0 ml-4">
    <div className={`absolute -left-10 w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10 ${color}`}>
      {icon}
    </div>
    <div className="bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
      <div className="flex justify-between items-center mb-1">
        <h4 className="text-sm font-bold text-slate-800">{title}</h4>
        <span className="text-xs text-slate-400 font-medium">{time}</span>
      </div>
      <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
    </div>
  </div>
);

const IntegrationRow = ({ name, status, lastSync, icon, color, isError }) => (
  <div className="flex items-center justify-between p-3 border rounded-lg bg-slate-50">
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-slate-800">{name}</p>
        <p className={`text-xs ${isError ? 'text-red-500 font-bold' : 'text-slate-500'}`}>{lastSync}</p>
      </div>
    </div>
    <div className={`px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wide ${isError ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
      {status}
    </div>
  </div>
);

const AutoRuleCard = ({ title, desc, active }) => (
  <div className={`p-4 border rounded-xl hover:shadow-md transition bg-white relative overflow-hidden group cursor-pointer ${active ? 'border-green-200 bg-green-50/30' : 'border-slate-200'}`}>
    <div className="flex justify-between items-start mb-2">
      <h4 className="font-bold text-slate-800 text-sm">{title}</h4>
      <div className={`w-10 h-5 rounded-full relative transition-colors ${active ? 'bg-green-500' : 'bg-slate-300'}`}>
        <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all shadow-sm ${active ? 'right-0.5' : 'left-0.5'}`}></div>
      </div>
    </div>
    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('listing');

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === 'dashboard' && <DashboardScreen />}
      {activeTab === 'listing' && <LeadListingScreen />}
      {activeTab === 'details' && <LeadDetailsScreen />}
      {activeTab === 'management' && <ManagementScreen />}
      
    </div>
  );
};

export default App;
