import React from "react";
import { useNotificationContext } from "../../contexts/NotificationContext";
import NotificationItem from "../NotificationItem/NotificationItem";
import { NotificationListContainer } from "./NotificationList.styles";

const NotificationList: React.FC = () => {
  const { notifications } = useNotificationContext();

  return (
    <NotificationListContainer>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </NotificationListContainer>
  );
};

export default NotificationList;
