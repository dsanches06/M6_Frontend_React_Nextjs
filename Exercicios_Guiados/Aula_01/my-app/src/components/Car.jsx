const Car = ({ brand, model, year }) => {
  return (
    <div>
      <h1>Carro</h1>
      <p>Marca: {brand}</p>
      <p>Modelo: {model}</p>
      <p>Ano: {year}</p>
    </div>
  );
};

export default Car;
