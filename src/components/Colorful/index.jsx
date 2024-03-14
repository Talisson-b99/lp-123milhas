import FormNews from "../FormNews";
import bannerMain from "../../assets/banner.jpg";
import bannerDesktop from "../../assets/banner-desktop.jpg";
import { useEffect, useState } from "react";

const Colorful = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getImageBasedOnSize = () => {
    if (windowSize.width > 960) {
      return (
        <img
          src={bannerDesktop}
          alt="casal tirando foto na disney"
          loading="lazy"
          className="banner"
        />
      );
    } else {
      return (
        <img
          src={bannerMain}
          alt="casal tirando foto na disney"
          loading="lazy"
          className="banner"
        />
      );
    }
  };

  return (
    <section className="section__colorful">
      {getImageBasedOnSize()}
      <div className="section__colorful--orange">
        <div className="container">
          <h1 className="title">Orlando Pra Todos</h1>
          <p className="description">
            Quem acha que viajar para Orlando é exclusividade de um grupo
            privilegiado de pessoas está, no mínimo, desatualizado
          </p>
        </div>
      </div>
      <div className="section__colorful--green">
        <div className="container">
          <h2 className="subtitle">
            Com a 123 milhas viajar para{" "}
            <strong>Orlando é mais simples e barato!</strong>
          </h2>
        </div>
      </div>
      <div className="section__colorful--yellow news">
        <div className="container">
          <FormNews />
        </div>
      </div>
      <div className="section__colorful--orange">
        <div className="container">
          <h3 className="offer__title">
            <span>Até</span>
            50% <br />
            <span>off</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Colorful;
