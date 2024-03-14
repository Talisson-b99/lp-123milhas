const FormNews = () => {
  return (
    <>
      <h4 className="news__title">
        Ainda não acredita? Deixe aqui seu e-mail e{" "}
        <b>surpreenda-se com uma oferta</b> exsuvia pra você!
      </h4>
      <form className="news__form">
        <input
          className="news__form-input"
          required
          type="email"
          id="new-email"
          placeholder="Seu melhor e-mail"
        />
        <button type="submit" className="news__form-btn">
          Quero viajar com até 50% off
        </button>
      </form>
    </>
  );
};

export default FormNews;
