import MainLayout from "../../layouts/MainLayout";

export default function Unauthorized() {

  return (

    <MainLayout>

      <div className="py-20 text-center">

        <h1 className="text-6xl font-bold text-red-600">

          403

        </h1>

        <p className="mt-4 text-xl">

          You are not authorized to access this page.

        </p>

      </div>

    </MainLayout>

  );

}