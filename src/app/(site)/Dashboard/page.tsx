import { getUserServerSession } from "@/libs/serverSession";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import MyDashboard from "@/components/dashboard/MyDashboard";

const Dashboard = async () => {

  const { email } = await getUserServerSession()

  if (!email) redirect('/')

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MyDashboard />
      </Suspense>
    </>
  );
}

export default Dashboard;