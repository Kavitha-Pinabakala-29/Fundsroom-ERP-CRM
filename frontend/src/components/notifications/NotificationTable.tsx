import type { Notification } from "../../types/notification";

type Props = {
  notifications: Notification[];
};

export default function NotificationTable({
  notifications,
}: Props) {

  return (

    <div className="rounded-xl bg-white p-6 shadow">

      <h2 className="mb-5 text-2xl font-bold">

        Notifications

      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="p-2 text-left">
              Title
            </th>

            <th className="p-2 text-left">
              Message
            </th>

          </tr>

        </thead>

        <tbody>

          {

            notifications.map((item) => (

              <tr
                key={item.id}
                className="border-b"
              >

                <td className="p-2">

                  {item.title}

                </td>

                <td className="p-2">

                  {item.message}

                </td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </div>

  );

}