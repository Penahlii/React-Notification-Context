import styled, { css } from "styled-components";
import { NotificationType } from "../../types/notificationTypes";

interface NotificationItemProps {
  type: NotificationType;
}

const notificationTypeStyles = (type: NotificationType) => {
  switch (type) {
    case "success":
      return css`
        background-color: #d4edda;
        color: #155724;
      `;
    case "error":
      return css`
        background-color: #f8d7da;
        color: #721c24;
      `;
    case "info":
      return css`
        background-color: #d1ecf1;
        color: #0c5460;
      `;
    default:
      return css``;
  }
};

export const NotificationItemContainer = styled.div<NotificationItemProps>`
  padding: 10px 20px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) => notificationTypeStyles(props.type)}
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 10px;
`;
