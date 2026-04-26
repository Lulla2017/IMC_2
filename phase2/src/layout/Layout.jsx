function Layout({ children }) {
  return (
    <div className="imc-page">
      <div className="imc-container">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
