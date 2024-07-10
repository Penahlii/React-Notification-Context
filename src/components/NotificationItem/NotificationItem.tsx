import React from "react";
import { Notification } from "../../types/notificationTypes";
import { useNotificationContext } from "../../contexts/NotificationContext";
import {
  NotificationItemContainer,
  CloseButton,
} from "./NotificationItem.styles";

interface Props {
  notification: Notification;
}

const NotificationItem: React.FC<Props> = ({ notification }) => {
  const { removeNotification } = useNotificationContext();

  return (
    <NotificationItemContainer type={notification.type}>
      {notification.message}
      <CloseButton onClick={() => removeNotification(notification.id)}>
        X
      </CloseButton>
    </NotificationItemContainer>
  );
};

export default NotificationItem;
