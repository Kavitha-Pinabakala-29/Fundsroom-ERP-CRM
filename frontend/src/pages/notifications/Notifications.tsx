import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import NotificationTable from "../../components/notifications/NotificationTable";

import { getNotifications } from "../../services/notificationService";

import type { Notification } from "../../types/notification";

export default function Notifications() {

  const [notifications, setNotifications] =

    useState<Notification[]>([]);

  async function loadNotifications() {

    try {

      setNotifications(

        await getNotifications()

      );

    }

    catch (err) {

      console.log(err);

    }

  }

  useEffect(() => {

    loadNotifications();

  }, []);

  return (

    <MainLayout>

      <h1 className="mb-6 text-3xl font-bold">

        Notifications

      </h1>

      <NotificationTable

        notifications={notifications}

      />

    </MainLayout>

  );

}