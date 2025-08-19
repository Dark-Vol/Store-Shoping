import { HeaderSection } from "@components/Сontacts/HeaderSection"
import { ContactHero } from "@components/Сontacts/ContactHero"
import { ContactInfoCard } from "@components/Сontacts/ContactInfoCard"
import { BusinessHoursCard } from "@components/Сontacts/BusinessHoursCard"
import { DepartmentContactsCard } from "@components/Сontacts/DepartmentContactsCard"
import { SocialMediaCard } from "@components/Сontacts/SocialMediaCard"
import { ContactForm } from "@components/Сontacts/ContactForm"
import { MapSection } from "@components/Сontacts/MapSection"
import { ServicesSection } from "@components/Сontacts/ServicesSection"
import styles from "./Contact.module.scss"

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <HeaderSection />
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <ContactHero />
        </div>
        <div className={styles.contactCardsSection}>
          <div className={styles.grid}>
            <div className={styles.cardsColumn}>
              <ContactInfoCard />
              <BusinessHoursCard />
              <DepartmentContactsCard />
              <SocialMediaCard />
            </div>
            <div className={styles.formSection}>
              <ContactForm />
              <div className={styles.mapSection}>
                <MapSection />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.servicesSection}>
          <ServicesSection />
        </div>
      </div>
    </div>
  )
}
