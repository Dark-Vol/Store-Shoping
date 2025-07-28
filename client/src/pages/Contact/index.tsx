// import { useState } from 'react';
// import InputFirstName from '@components/Inputs/InputFirstName';
// import InputPhoneNumber from '@components/Inputs/InputPhoneNumber';


// import styles from './Contact.module.scss';


// export default function ContactPage() {
//   const [firstName, setFirstName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");


//   return (
//     <div className={styles.container}>
//       <div className={styles.text_center}>
//         <h2 className={styles.text_title}>Свяжитесь с нами</h2>
//         <p className={styles.text_description}>
//           Есть вопросы о музыкальных инструментах?
//           Нужна консультация?
//           Мы всегда готовы помочь вам найти идеальный инструмент!
//         </p>
//       </div>
//       <div className="">
//         <div className="">
//           <h1>Напишите нам</h1>
//           <p>
//             Заполните форму, и мы свяжемся с вами в ближайшее время
//           </p>
//           <form action="">
//             <div className="">
//               <div className="">
//                 <label htmlFor="name">Имя *</label>
//                 <InputFirstName
//                   firstName={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                 />

//               </div>
//             </div>
//             <div className="">
//               <label htmlFor="phone">Телефон</label>
//               <InputPhoneNumber
//                 number={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import { HeaderSection } from "@components/Сontacts/HeaderSection"
import { ContactHero } from "@components/Сontacts/ContactHero"
import { ContactInfoCard } from "@components/Сontacts/ContactInfoCard"
import { BusinessHoursCard } from "@components/Сontacts/BusinessHoursCard"
import { DepartmentContactsCard } from "@components/Сontacts/DepartmentContactsCard"
import { SocialMediaCard } from "@components/Сontacts/SocialMediaCard"
import { ContactForm } from "@components/Сontacts/ContactForm"
import { MapSection } from "@components/Сontacts/MapSection"
import { ServicesSection } from "@components/Сontacts/ServicesSection"

export default function ContactPage() {
  return (
    <div className="">
      <HeaderSection />
      <ContactHero />
      <ContactInfoCard />
      <BusinessHoursCard />
      <DepartmentContactsCard />
      <SocialMediaCard />
      <ContactForm />
      <MapSection />
      <ServicesSection />
    </div>
  )
}
