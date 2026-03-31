import "./App.css";
import Car from "./components/Car";

const App = () => {
  const myElement = (
    <ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  );

  const myList = (
    <>
      <p>Coisas que vou comprar no supermercado</p>
      {myElement}
    </>
  );

  const fruits = ["Ananas", "Peras", "Cherries"];

  const pessoas = [
    {
      id: 0,
      nome: "Creola Katherine Johnson",
      profissao: "matemática",
    },
    {
      id: 1,
      nome: "Mario José Molina-Pasquel Henríquez",
      profissao: "químico",
    },
    {
      id: 2,
      nome: "Mohammad Abdus Salam",
      profissao: "físico",
    },
    {
      id: 3,
      nome: "Percy Lavon Julian",
      profissao: "químico",
    },
    {
      id: 4,
      nome: "Subrahmanyan Chandrasekhar",
      profissao: "astrofísico",
    },
  ];

  return (
    <>
      <h1>Welcome to Danilson</h1>
      {myList}
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      <ul>
        {pessoas.map((pessoa) => (
          <p key={pessoa.id}>
            <b>{pessoa.nome}</b> conhecido por {pessoa.profissao}
          </p>
        ))}
      </ul>

      <Car brand="Mercedes-Benz" model="C300" year={2020} />
      <Car brand="BMW" model="X5" year={2021} />
    </>
  );
};

export default App;
