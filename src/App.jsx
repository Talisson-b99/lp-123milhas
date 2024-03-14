import "./App.css";
import Colorful from "./components/Colorful";
import Header from "./components/Header";

import halfBanner1 from "./assets/halfBanner1.jpg";
import halfBanner2 from "./assets/halfBanner2.jpg";
import halfBanner3 from "./assets/halfBanner3.jpg";
import iconPercent from "./assets/icon-percent.svg";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";

const dataAccordion = [
  {
    id: 1,
    title: "Como funciona a 123milhas?",
    description:
      "Somos uma plataforma exclusiva que transforma milhas que seriam perdidas por outras pessoas em viagens com preços incríveis pra você. É assim que a gente consegue voos até 50% mais baratos para quem quer economizar e viajar muito mais. Além disso, temos as melhores opções em hotéis e pacotes de viagens, seguro e aluguel de carros.",
  },
  {
    id: 2,
    title: "É seguro comprar na 123milhas?",
    description:
      "Somos uma plataforma exclusiva que transforma milhas que seriam perdidas por outras pessoas em viagens com preços incríveis pra você. É assim que a gente consegue voos até 50% mais baratos para quem quer economizar e viajar muito mais. Além disso, temos as melhores opções em hotéis e pacotes de viagens, seguro e aluguel de carros.",
  },
  {
    id: 3,
    title: "Preciso ter milhas para aproveitar?",
    description:
      "Somos uma plataforma exclusiva que transforma milhas que seriam perdidas por outras pessoas em viagens com preços incríveis pra você. É assim que a gente consegue voos até 50% mais baratos para quem quer economizar e viajar muito mais. Além disso, temos as melhores opções em hotéis e pacotes de viagens, seguro e aluguel de carros.",
  },
];

function App() {
  return (
    <>
      <Header />
      <main>
        <Colorful />

        <section className="section__dreams">
          <div className="container">
            <div className="content">
              <h2 className="subtitle">
                Seus sonhos não merecem ser adiados, eles merecem ser vividos!{" "}
              </h2>
              <p className="description">
                E, se o seu sonho é conhecer Orlando, Você não precisa fazer
                nenhum sacrifício.
              </p>
            </div>
            <ul className="list">
              <li className="list-item">
                <img src={halfBanner1} alt="foto do parque universal" />
              </li>
              <li className="list-item">
                <img src={halfBanner2} alt="foto do parque busch gardens" />
              </li>
              <li className="list-item">
                <img src={halfBanner3} alt="foto de parque aquatico" />
              </li>
            </ul>
          </div>
        </section>

        <section className="section__discont">
          <div className="container">
            <h2 className="subtitle">
              Com a 123milhas, <span>Orlando é Pra Todos!</span>
            </h2>
            <div className="card__discont">
              <div>
                <p>Sua chance de conhecer a terra da magia, com até...</p>
              </div>
              <div>
                <span>
                  50% <img src={iconPercent} alt="" />
                </span>
                <span>De desconto</span>
                <span>está aqui</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section__faq">
          <div className="container">
            <h2 className="subtitle">A 123milhas</h2>
            {dataAccordion.map((item) => (
              <Accordion
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
