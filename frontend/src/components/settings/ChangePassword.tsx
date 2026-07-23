export default function ChangePassword() {

  return (

    <div className="rounded-lg border bg-white p-6 shadow">

      <h2 className="mb-4 text-xl font-bold">

        Change Password

      </h2>

      <div className="space-y-3">

        <input
          type="password"
          className="w-full rounded border p-2"
          placeholder="Current Password"
        />

        <input
          type="password"
          className="w-full rounded border p-2"
          placeholder="New Password"
        />

        <input
          type="password"
          className="w-full rounded border p-2"
          placeholder="Confirm Password"
        />

        <button
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          Change Password
        </button>

      </div>

    </div>

  );

}