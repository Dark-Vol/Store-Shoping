import {
  Music, Heart, Users, Award, MapPin, Phone, Mail,
  Guitar, Piano, Drum, Mic, Star, Clock, Shield, Truck,
} from "lucide-react";
import styles from "./About.module.scss";
import { useState, useEffect, useRef } from "react";
import { getTeamMembers } from "./teamMembers";

// Компонент счетчика
const Counter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ 
  end, 
  duration = 2000, 
  suffix = "+" 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Уменьшаем порог для более точного срабатывания
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function для плавной анимации
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(end * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // Небольшая задержка перед началом анимации
    setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 200);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef} className={styles.counterNumber}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.aboutUs}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroIcon}><Music /></div>
            <h1>About Us</h1>
            <p>We've been making music accessible to everyone for over 15 years.</p>
            <div className={styles.heroStats} ref={statsRef}>
              <div className={`${styles.stat} ${isVisible ? styles.animate : ''}`}>
                <Award /> 
                <span className={styles.statNumber}>
                  <Counter end={15} suffix="+" />
                </span> years of experience
              </div>
              <div className={`${styles.stat} ${isVisible ? styles.animate : ''}`}>
                <Users /> 
                <span className={styles.statNumber}>
                  <Counter end={50000} suffix="+" />
                </span> clients
              </div>
              <div className={`${styles.stat} ${isVisible ? styles.animate : ''}`}>
                <Guitar /> 
                <span className={styles.statNumber}>
                  <Counter end={10000} suffix="+" />
                </span> musical instruments
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <h2>Our history</h2>
            <div className={styles.storyGrid}>
              <div className={styles.storyImage}>
                <img
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Музыкальный магазин"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ctext x='300' y='200' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='16'%3EМузыкальный магазин%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className={styles.storyText}>
                <p>
                  It all started in 2009, when a group of musicians decided to create a place where everyone could find their dream instrument.
                  We started with a small shop in the city center and a deep love for music.
                </p>
                <p>
                  Today we are one of the largest online music instrument stores in the country, but our mission
                  remains unchanged: helping people create music and bring their creative dreams to life.
                </p>
                <div className={styles.passion}>
                  <Heart /> 
                    <span>
                      Music is our passion
                    </span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className={styles.values}>
        <div className={styles.container}>
          <div className={styles.valuesContent}>
            <h2>Our values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}><Heart style={{ color: '#ef4444' }} /></div>
                <h3>Passion for music</h3>
                <p>
                  We live and breathe music. Every instrument in our catalog is chosen with love and understanding
                  of the needs of musicians.
                </p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}><Shield style={{ color: '#3b82f6' }} /></div>
                <h3>Quality</h3>
                <p>
                  We work only with verified brands and guarantee the quality of each instrument. Your trust is our priority.
                </p>
              </div>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}><Users style={{ color: '#10b981' }} /></div>
                <h3>Support</h3>
                <p>
                  Our team of experts is always ready to help with instrument selection and answer any questions about music.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.team}>
        <div className={styles.container}>
          <div className={styles.teamContent}>
            <h2>Our team</h2>
            <div className={styles.teamGrid}>
              {getTeamMembers(Guitar, Piano, Drum, Mic).map((member, index) => (
                <div key={index} className={styles.teamMember}>
                  <div className={styles.memberInfo}>
                    <img
                      src={member.img}
                      alt={member.name}
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 128 128'%3E%3Crect width='128' height='128' fill='%23f3f4f6'/%3E%3Ctext x='64' y='64' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='12'%3E${member.name.split(' ')[0]}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                  </div>
                  <div className={styles.memberDetails}>
                    <div className={styles.memberIcons}>{member.icons}</div>
                    <p>{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsContent}>
            <h2>Наши достижения</h2>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>лет на рынке</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>50K+</div>
                <div className={styles.statLabel}>довольных клиентов</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>10K+</div>
                <div className={styles.statLabel}>инструментов в каталоге</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>4.9</div>
                <div className={styles.statLabel}><Star /> рейтинг</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyChoose}>
        <div className={styles.container}>
          <div className={styles.whyChooseContent}>
            <h2>Why choose us</h2>
            <div className={styles.whyChooseGrid}>
              <div className={styles.whyChooseCard}>
                <div className={styles.whyChooseIcon}><Truck style={{ color: '#10b981' }} /></div>
                <h3>Fast delivery</h3>
                <p>Delivered across the country within 1-3 days</p>
              </div>
              <div className={styles.whyChooseCard}>
                <div className={styles.whyChooseIcon}><Shield style={{ color: '#3b82f6' }} /></div>
                <h3>Quality guarantee</h3>
                <p>2 years warranty on all instruments</p>
              </div>
              <div className={styles.whyChooseCard}>
                <div className={styles.whyChooseIcon}><Clock style={{ color: '#fb923c' }} /></div>
                <h3>24/7 Support</h3>
                <p>Our experts are ready to help at any time</p>
              </div>
              <div className={styles.whyChooseCard}>
                <div className={styles.whyChooseIcon}><Star style={{ color: '#eab308' }} /></div>
                <h3>Best prices</h3>
                <p>Competitive prices and regular discounts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.contactContent}>
            <h2>Contact us</h2>
            <p>Have questions? We're always happy to help!</p>
            <div className={styles.contactGrid}>
              <div className={styles.contactCard}>
                <MapPin className={styles.contactIcon} />
                <h3>Address</h3>
                <p>Musical Street, 123<br />Odessa, 65000</p>
              </div>
              <div className={styles.contactCard}>
                <Phone className={styles.contactIcon} />
                <h3>Phone</h3>
                <p>+38 (050) 579-94-37</p>
              </div>
              <div className={styles.contactCard}>
                <Mail className={styles.contactIcon} />
                <h3>Email</h3>
                <p>info@musicstore.ru</p>
              </div>
            </div>
            <button className={styles.contactButton}>Write to us</button>
          </div>
        </div>
      </section>
    </div>
  );
}
