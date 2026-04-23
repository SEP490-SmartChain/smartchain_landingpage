import React from "react";
import CustomersTable from "@/features/customers/components/CustomersTable";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Topbar");
  return { title: t("title_customers") };
}

// Server Component
export default async function CustomersPage() {
  // Simulate fetching data from API/Database
  const fetchCustomers = async () => {
    return [
      { id: "1", name: "Alyvia Kelley", status: "Approved", email: "a.kelley@gmail.com", dob: "06/18/1978" },
      { id: "2", name: "Jaiden Nixon", status: "Approved", email: "jaiden.n@gmail.com", dob: "09/30/1963" },
      { id: "3", name: "Ace Foley", status: "Blocked", email: "ace.fo@yahoo.com", dob: "12/09/1985" },
      { id: "4", name: "Nikolai Schmidt", status: "Rejected", email: "nikolai.schmidt1964@outlook.com", dob: "03/22/1956" },
      { id: "5", name: "Clayton Charles", status: "Approved", email: "me@clayton.com", dob: "10/14/1971" },
      { id: "6", name: "Prince Chen", status: "Approved", email: "prince.chen1997@gmail.com", dob: "07/05/1992" },
      { id: "7", name: "Reece Duran", status: "Approved", email: "reece@yahoo.com", dob: "05/26/1980" },
      { id: "8", name: "Anastasia Mcdaniel", status: "Rejected", email: "anastasia.spring@mcdaniel12.com", dob: "02/11/1968" },
      { id: "9", name: "Melvin Boyle", status: "Blocked", email: "Me.boyle@gmail.com", dob: "08/03/1974" },
      { id: "10", name: "Kailee Thomas", status: "Blocked", email: "Kailee.thomas@gmail.com", dob: "11/28/1954" },
    ];
  };

  const customers = await fetchCustomers();

  return (
    <div className="py-8 px-10 bg-[#f5f6f8] min-h-[calc(100vh-4.5rem)]">
      <div className="mb-8">
        <h1 className="text-[2rem] font-semibold text-[#1a1d21] m-0 mb-2 tracking-tight">Customers&apos; List</h1>
        <div className="text-[13px] text-[#6a6e76] flex items-center gap-2">
          <span>Dashboard</span> <span className="text-gray-300">/</span> <span className="text-[#1a1d21] font-medium">Customers&apos; List</span>
        </div>
      </div>

      {/* Client Component injected with Server-fetched Data */}
      <CustomersTable initialData={customers} />
    </div>
  );
}
