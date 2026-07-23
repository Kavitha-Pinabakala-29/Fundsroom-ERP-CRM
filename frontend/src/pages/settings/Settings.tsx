import MainLayout from "../../layouts/MainLayout";

import UserProfile from "../../components/settings/UserProfile";
import CompanyForm from "../../components/settings/CompanyForm";
import ChangePassword from "../../components/settings/ChangePassword";
export default function Settings() {

  return (

    <MainLayout>

      <h1 className="mb-6 text-3xl font-bold">
        Settings
      </h1>

      <div className="space-y-8">

        <UserProfile />

        <CompanyForm />

        <ChangePassword />

      </div>

    </MainLayout>

  );

}