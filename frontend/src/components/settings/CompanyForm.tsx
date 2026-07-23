export default function CompanyForm() {

  return (

    <div className="rounded-lg border bg-white p-6 shadow">

      <h2 className="mb-4 text-xl font-bold">

        Company Details

      </h2>

      <div className="space-y-3">

        <input
          className="w-full rounded border p-2"
          placeholder="Company Name"
        />

        <input
          className="w-full rounded border p-2"
          placeholder="Address"
        />

        <input
          className="w-full rounded border p-2"
          placeholder="Phone"
        />

        <button
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Save Company
        </button>

      </div>

    </div>

  );

}