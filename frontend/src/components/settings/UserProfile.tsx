export default function UserProfile() {

  return (

    <div className="rounded-lg border bg-white p-6 shadow">

      <h2 className="mb-4 text-xl font-bold">

        User Profile

      </h2>

      <div className="space-y-3">

        <input
          className="w-full rounded border p-2"
          placeholder="Name"
        />

        <input
          className="w-full rounded border p-2"
          placeholder="Email"
        />

        <button
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Save Profile
        </button>

      </div>

    </div>

  );

}