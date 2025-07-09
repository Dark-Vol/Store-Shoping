import {
  Music, Heart, Users, Award, MapPin, Phone, Mail,
  Guitar, Piano, Drum, Mic, Star, Clock, Shield, Truck,
} from "lucide-react";


export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section>
        <div>
          <div>
            <div><Music /></div>
            <h1>О нас</h1>
            <p>Мы делаем музыку доступной для каждого уже более 15 лет</p>
            <div>
              <div><Award /> 15+ лет опыта</div>
              <div><Users /> 50,000+ клиентов</div>
              <div><Guitar /> 10,000+ инструментов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section>
        <div>
          <div>
            <h2>Наша история</h2>
            <div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Музыкальный магазин"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ctext x='300' y='200' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='16'%3EМузыкальный магазин%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div>
                <p>
                  Всё началось в 2009 году, когда группа музыкантов решила создать место, где каждый сможет найти
                  инструмент своей мечты. Мы начинали с небольшого магазина в центре города и большой любви к музыке.
                </p>
                <p>
                  Сегодня мы — один из крупнейших интернет-магазинов музыкальных инструментов в стране, но наша миссия
                  остается неизменной: помогать людям создавать музыку и воплощать свои творческие мечты.
                </p>
                <div><Heart /> <span>Музыка — это наша страсть</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section>
        <div>
          <div>
            <h2>Наши ценности</h2>
            <div>
              <div>
                <div><Heart style={{ color: '#ef4444' }} /></div>
                <h3>Страсть к музыке</h3>
                <p>
                  Мы живем и дышим музыкой. Каждый инструмент в нашем каталоге выбран с любовью и пониманием
                  потребностей музыкантов.
                </p>
              </div>
              <div>
                <div><Shield style={{ color: '#3b82f6' }} /></div>
                <h3>Качество</h3>
                <p>
                  Мы работаем только с проверенными брендами и гарантируем качество каждого инструмента. Ваше доверие — наш приоритет.
                </p>
              </div>
              <div>
                <div><Users style={{ color: '#10b981' }} /></div>
                <h3>Поддержка</h3>
                <p>
                  Наша команда экспертов всегда готова помочь с выбором инструмента и ответить на любые вопросы о музыке.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <div>
          <div>
            <h2>Наша команда</h2>
            <div>
              {[{
                img: Avatar1,
                name: "Алексей Петров",
                position: "Основатель и CEO",
                icons: [<Guitar style={{ color: '#fb923c' }} />, <Piano style={{ color: '#fb923c' }} />],
                description: "Профессиональный гитарист с 20-летним стажем. Основал компанию с мечтой сделать музыку доступной для всех."
              }, {
                img: Avatar2,
                name: "Мария Иванова",
                position: "Менеджер по продукту",
                icons: [<Piano style={{ color: '#3b82f6' }} />, <Mic style={{ color: '#3b82f6' }} />],
                description: "Классическая пианистка и вокалистка. Отвечает за качество и ассортимент клавишных инструментов."
              }, {
                img: Avatar3,
                name: "Дмитрий Козлов",
                position: "Технический директор",
                icons: [<Drum style={{ color: '#ef4444' }} />, <Guitar style={{ color: '#ef4444' }} />],
                description: "Барабанщик и звукоинженер. Специализируется на ударных инструментах и звуковом оборудовании."
              }].map((member, index) => (
                <div key={index}>
                  <div>
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
                  <div>
                    <div>{member.icons}</div>
                    <p>{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section>
        <div>
          <div>
            <h2>Наши достижения</h2>
            <div>
              <div><div>15+</div><div>лет на рынке</div></div>
              <div><div>50K+</div><div>довольных клиентов</div></div>
              <div><div>10K+</div><div>инструментов в каталоге</div></div>
              <div><div>4.9</div><div><Star /> рейтинг</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <div>
          <div>
            <h2>Почему выбирают нас</h2>
            <div>
              <div>
                <div><Truck style={{ color: '#10b981' }} /></div>
                <h3>Быстрая доставка</h3>
                <p>Доставляем по всей стране в течение 1-3 дней</p>
              </div>
              <div>
                <div><Shield style={{ color: '#3b82f6' }} /></div>
                <h3>Гарантия качества</h3>
                <p>2 года гарантии на все инструменты</p>
              </div>
              <div>
                <div><Clock style={{ color: '#fb923c' }} /></div>
                <h3>Поддержка 24/7</h3>
                <p>Наши эксперты готовы помочь в любое время</p>
              </div>
              <div>
                <div><Star style={{ color: '#eab308' }} /></div>
                <h3>Лучшие цены</h3>
                <p>Конкурентные цены и регулярные скидки</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div>
          <div>
            <h2>Свяжитесь с нами</h2>
            <p>Есть вопросы? Мы всегда рады помочь!</p>
            <div>
              <div>
                <MapPin />
                <h3>Адрес</h3>
                <p>ул. Музыкальная, 123<br />Москва, 101000</p>
              </div>
              <div>
                <Phone />
                <h3>Телефон</h3>
                <p>+7 (495) 123-45-67</p>
              </div>
              <div>
                <Mail />
                <h3>Email</h3>
                <p>info@musicstore.ru</p>
              </div>
            </div>
            <button>Написать нам</button>
          </div>
        </div>
      </section>
    </div>
  );
}
