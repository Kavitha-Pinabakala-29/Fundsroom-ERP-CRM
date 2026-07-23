import type { Activity } from "../../types/activity";

type Props = {
  activities: Activity[];
};

export default function ActivityTable({
  activities,
}: Props) {
  return (
    <table className="w-full border">
      <thead>
        <tr className="border">
          <th className="p-3">User</th>
          <th className="p-3">Action</th>
          <th className="p-3">Date</th>
        </tr>
      </thead>

      <tbody>
        {activities.map((activity) => (
          <tr
            key={activity.id}
            className="border"
          >
            <td className="p-3">
              {activity.user?.name ?? "System"}
            </td>

            <td className="p-3">
              {activity.action}
            </td>

            <td className="p-3">
              {new Date(
                activity.createdAt
              ).toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}