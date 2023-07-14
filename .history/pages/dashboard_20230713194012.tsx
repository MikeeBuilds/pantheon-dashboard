import 
import Card from '../components/Card';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow p-4 overflow-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card title="MyJAY">
            {/* Fetch and display your MyJAY data here */}
          </Card>
          <Card title="Total Backing">
            {/* Fetch and display your Total Backing data here */}
          </Card>
          <Card title="LP Staking">
            {/* Fetch and display your LP Staking data here */}
          </Card>
          {/* Add more cards as needed */}
        </div>
      </main>
    </div>
  );
}
