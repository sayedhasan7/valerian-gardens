export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">Reviews Overview</div>
        <div className="p-6 bg-white rounded-xl shadow">Portfolio Stats</div>
        <div className="p-6 bg-white rounded-xl shadow">Recent Activity</div>
      </div>
    </div>
  );
}
