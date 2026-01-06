import React from "react";
import styles from "./Profile.module.scss";
import { UserProfile, UserActivity } from "@types/user";

export interface ProfileProps {
  profile: UserProfile | null;
  activity: UserActivity[];
  loading: boolean;
  error: string | null;
  onRefresh: () => Promise<void>;
  onUpdate: (data: Partial<UserProfile>) => Promise<void>;
}

const Profile: React.FC<ProfileProps> = ({ profile, activity, loading, error, onRefresh }) => {
  if (loading) {
    return (
      <div className={styles.profile_content}>
        <div className={styles.loading_state}>
          <div className={styles.spinner}></div>
          <p>Загрузка профиля...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.profile_content}>
        <div className={styles.error_state}>
          <p>Ошибка загрузки: {error}</p>
          <button onClick={onRefresh} className={styles.retry_button}>
            Попробовать снова
          </button>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className={styles.profile_content}>
        <div className={styles.no_data_state}>
          <p>Данные профиля не найдены</p>
        </div>
      </div>
    );
  }

  // Функция для форматирования даты
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Функция для получения иконки по типу активности
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'order': return '🛒';
      case 'payment': return '💳';
      case 'bonus': return '🎁';
      case 'login': return '🔐';
      case 'profile_update': return '✏️';
      default: return '📝';
    }
  };

  return (
    <div className={styles.profile_content}>
      <div className={styles.profile_header}>
        <div className={styles.avatar_section}>
          <div className={styles.avatar}>
            <img src={profile.avatar} alt="Avatar" />
            <div className={styles.status_badge}>{profile.status}</div>
          </div>
          <div className={styles.user_info}>
            <h2>{profile.name}</h2>
            <p className={styles.user_email}>{profile.email}</p>
            <p className={styles.user_phone}>{profile.phone}</p>
            <p className={styles.join_date}>Участник с {formatDate(profile.joinDate)}</p>
          </div>
        </div>
      </div>

      <div className={styles.stats_grid}>
        <div className={styles.stat_card}>
          <div className={styles.stat_icon}>📦</div>
          <div className={styles.stat_content}>
            <h3>{profile.orders}</h3>
            <p>Заказов</p>
          </div>
        </div>
        <div className={styles.stat_card}>
          <div className={styles.stat_icon}>💰</div>
          <div className={styles.stat_content}>
            <h3>{profile.totalSpent.toLocaleString()} ₽</h3>
            <p>Потрачено</p>
          </div>
        </div>
        <div className={styles.stat_card}>
          <div className={styles.stat_icon}>⭐</div>
          <div className={styles.stat_content}>
            <h3>{profile.loyaltyPoints}</h3>
            <p>Бонусов</p>
          </div>
        </div>
      </div>

      <div className={styles.recent_activity}>
        <h3>Последняя активность</h3>
        <div className={styles.activity_list}>
          {activity.length > 0 ? (
            activity.slice(0, 5).map((item) => (
              <div key={item.id} className={styles.activity_item}>
                <div className={styles.activity_icon}>
                  {getActivityIcon(item.type)}
                </div>
                <div className={styles.activity_content}>
                  <p>{item.title}</p>
                  <span>{formatDate(item.timestamp)}</span>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.no_activity}>
              <p>Активность не найдена</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
