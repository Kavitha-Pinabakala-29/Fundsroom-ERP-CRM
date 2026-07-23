import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import ActivityTable from "../../components/activity/ActivityTable";

import { getActivities } from "../../services/activityService";

import type { Activity } from "../../types/activity";

export default function ActivityPage() {
  const [activities, setActivities] =
    useState<Activity[]>([]);

  async function loadActivities() {
    try {
      const data = await getActivities();

      setActivities(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadActivities();
  }, []);

  return (
    <MainLayout>
      <h1 className="mb-6 text-3xl font-bold">
        Activity Logs
      </h1>

      <ActivityTable
        activities={activities}
      />
    </MainLayout>
  );
}