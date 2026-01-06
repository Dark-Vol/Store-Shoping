import React, { useState } from "react";
import styles from "./Settings.module.scss";
import { UserSettings } from "@types/user";

interface SettingsProps {
  settings: UserSettings | null;
  loading: boolean;
  error: string | null;
  onRefresh: () => void;
  onUpdate: (data: Partial<UserSettings>) => Promise<void>;
}

const Settings: React.FC<SettingsProps> = ({ 
  settings, 
  loading, 
  error, 
  onRefresh, 
  onUpdate 
}) => {
  const [formData, setFormData] = useState({
    name: settings?.name || '',
    email: settings?.email || '',
    phone: settings?.phone || '',
    notifications: {
      email: settings?.notifications.email || false,
      sms: settings?.notifications.sms || false,
      push: settings?.notifications.push || false,
    }
  });

  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  // Обновляем форму при изменении настроек
  React.useEffect(() => {
    if (settings) {
      setFormData({
        name: settings.name,
        email: settings.email,
        phone: settings.phone,
        notifications: {
          email: settings.notifications.email,
          sms: settings.notifications.sms,
          push: settings.notifications.push,
        }
      });
    }
  }, [settings]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNotificationChange = (type: keyof typeof formData.notifications, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: checked
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    setUpdateError(null);
    setUpdateSuccess(false);

    try {
      await onUpdate(formData);
      setUpdateSuccess(true);
      setTimeout(() => setUpdateSuccess(false), 3000);
    } catch (error) {
      setUpdateError(error instanceof Error ? error.message : 'Ошибка обновления');
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.settings_content}>
        <div className={styles.loading_state}>
          <div className={styles.spinner}></div>
          <p>Загрузка настроек...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.settings_content}>
        <div className={styles.error_state}>
          <p>Ошибка загрузки: {error}</p>
          <button onClick={onRefresh} className={styles.retry_button}>
            Попробовать снова
          </button>
        </div>
      </div>
    );
  }

  if (!settings) {
    return (
      <div className={styles.settings_content}>
        <div className={styles.no_data_state}>
          <p>Настройки не найдены</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.settings_content}>
      <h3>Настройки профиля</h3>
      
      {updateSuccess && (
        <div className={styles.success_message}>
          Настройки успешно обновлены!
        </div>
      )}

      {updateError && (
        <div className={styles.error_message}>
          {updateError}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className={styles.settings_section}>
          <h4>Личная информация</h4>
          <div className={styles.form_group}>
            <label>Имя</label>
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              disabled={isUpdating}
            />
          </div>
          <div className={styles.form_group}>
            <label>Email</label>
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              disabled={isUpdating}
            />
          </div>
          <div className={styles.form_group}>
            <label>Телефон</label>
            <input 
              type="tel" 
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              disabled={isUpdating}
            />
          </div>
        </div>

        <div className={styles.settings_section}>
          <h4>Уведомления</h4>
          <div className={styles.checkbox_group}>
            <label className={styles.checkbox_item}>
              <input 
                type="checkbox" 
                checked={formData.notifications.email}
                onChange={(e) => handleNotificationChange('email', e.target.checked)}
                disabled={isUpdating}
              />
              <span>Email уведомления</span>
            </label>
            <label className={styles.checkbox_item}>
              <input 
                type="checkbox" 
                checked={formData.notifications.sms}
                onChange={(e) => handleNotificationChange('sms', e.target.checked)}
                disabled={isUpdating}
              />
              <span>SMS уведомления</span>
            </label>
            <label className={styles.checkbox_item}>
              <input 
                type="checkbox" 
                checked={formData.notifications.push}
                onChange={(e) => handleNotificationChange('push', e.target.checked)}
                disabled={isUpdating}
              />
              <span>Push уведомления</span>
            </label>
          </div>
        </div>

        <div className={styles.settings_section}>
          <h4>Безопасность</h4>
          <button type="button" className={styles.btn_secondary} disabled={isUpdating}>
            Изменить пароль
          </button>
          <button type="button" className={styles.btn_secondary} disabled={isUpdating}>
            Двухфакторная аутентификация
          </button>
        </div>

        <div className={styles.settings_actions}>
          <button 
            type="submit" 
            className={styles.btn_primary}
            disabled={isUpdating}
          >
            {isUpdating ? 'Сохранение...' : 'Сохранить изменения'}
          </button>
          <button type="button" className={styles.btn_danger} disabled={isUpdating}>
            Удалить аккаунт
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
