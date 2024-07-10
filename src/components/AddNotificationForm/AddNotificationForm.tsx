import React, { useState } from "react";
import { useNotificationContext } from "../../contexts/NotificationContext";
import { NotificationType } from "../../types/notificationTypes";
import {
  AddNotificationFormContainer,
  Input,
  Button,
} from "./AddNotificationForm.styles";

const AddNotificationForm: React.FC = () => {
  const { addNotification } = useNotificationContext();
  const [message, setMessage] = useState("");
  const [type, setType] = useState<NotificationType>("info");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNotification(message, type);
    setMessage("");
  };

  return (
    <AddNotificationFormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Notification message"
        required
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value as NotificationType)}
      >
        <option value="info">Info</option>
        <option value="success">Success</option>
        <option value="error">Error</option>
      </select>
      <Button type="submit">Add Notification</Button>
    </AddNotificationFormContainer>
  );
};

export default AddNotificationForm;
