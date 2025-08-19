import React from "react";
import styles from "./Orders.module.scss";
import { UserOrder } from "../../../types/user";

interface OrdersProps {
  orders: UserOrder[];
  loading: boolean;
  error: string | null;
  onRefresh: () => void;
}

const Orders: React.FC<OrdersProps> = ({ orders, loading, error, onRefresh }) => {
  if (loading) {
    return (
      <div className={styles.orders_content}>
        <div className={styles.loading_state}>
          <div className={styles.spinner}></div>
          <p>Загрузка заказов...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.orders_content}>
        <div className={styles.error_state}>
          <p>Ошибка загрузки: {error}</p>
          <button onClick={onRefresh} className={styles.retry_button}>
            Попробовать снова
          </button>
        </div>
      </div>
    );
  }

  // Функция для форматирования даты
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  // Функция для получения статуса заказа
  const getOrderStatus = (status: string) => {
    switch (status) {
      case 'delivered':
        return { text: 'Доставлен', class: styles.success };
      case 'shipped':
        return { text: 'Отправлен', class: styles.shipped };
      case 'processing':
        return { text: 'В обработке', class: styles.processing };
      case 'pending':
        return { text: 'Ожидает подтверждения', class: styles.pending };
      case 'cancelled':
        return { text: 'Отменен', class: styles.cancelled };
      default:
        return { text: 'Неизвестно', class: styles.unknown };
    }
  };

  return (
    <div className={styles.orders_content}>
      <h3>История заказов</h3>
      
      {orders.length > 0 ? (
        <div className={styles.orders_list}>
          {orders.map((order) => {
            const statusInfo = getOrderStatus(order.status);
            
            return (
              <div key={order.id} className={styles.order_item}>
                <div className={styles.order_header}>
                  <span className={styles.order_number}>{order.orderNumber}</span>
                  <span className={`${styles.order_status} ${statusInfo.class}`}>
                    {statusInfo.text}
                  </span>
                  <span className={styles.order_date}>
                    {formatDate(order.orderDate)}
                  </span>
                </div>
                <div className={styles.order_content}>
                  <p>{order.items.join(', ')}</p>
                  <div className={styles.order_details}>
                    <span>Сумма: {order.totalAmount.toLocaleString()} ₽</span>
                    <span>Способ оплаты: {order.paymentMethod}</span>
                    {order.deliveryDate && (
                      <span>Дата доставки: {formatDate(order.deliveryDate)}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.no_orders}>
          <p>У вас пока нет заказов</p>
          <p>Сделайте первый заказ, чтобы увидеть его здесь</p>
        </div>
      )}
    </div>
  );
};

export default Orders;
