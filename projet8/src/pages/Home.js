import Card from "../components/Card";
import data from "../data.json";
import Banner from "../components/Banner";
import imgPaysage from "./img_Paysage.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Banner image={imgPaysage}>
        <h1 className="title_banner">Chez vous, partout et ailleurs</h1>
      </Banner>
      <div className="home-cards">
        {data.map((card) => (
          <Link
            to={`/logements/${card.id}`}
            key={card.id}
            className="card-link1"
          >
            <Card image={card.cover} title={card.title} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
