import React from "react";
import NotificationList from "./components/NotificationList/NotificationList";
import AddNotificationForm from "./components/AddNotificationForm/AddNotificationForm";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <AddNotificationForm />
      <NotificationList />
    </div>
  );
};

export default App;
