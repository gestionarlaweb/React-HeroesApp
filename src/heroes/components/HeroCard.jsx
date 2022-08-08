import { Link } from "react-router-dom";

const CharactersByHero = ({alter_ego, characters}) => { 
 return (alter_ego === characters)
    ? (<></>)
    : <p>{characters}</p>;
}

export const HeroCard = ({
        id, superhero, publisher, alter_ego, first_appearance,characters,
}) => {

    const heroImageUrl =`/assets/heroes/${id}.jpg`;

   // const charactesByHero = (<p>{characters}</p>);

  return (
    <div className="col animate_animated fadeIn">
        <div className="card">
            <div className="row no-guetters">
                <div className="col-4">
                    <img src="heroImageUrl" className="card-img" alt="{superhero}"></img>
                </div>
                <div className="col-8">

                <div className="card-body">

                    <h5 className="card-title">{ superhero }</h5>
                    <p className="card-text">{ alter_ego }</p>

                    {/* {
                        ( alter_ego !== characters ) && charactesByHero
                        ( alter_ego !== characters ) && <p>{ characters }</p>
                    } */}
                    <CharactersByHero characters={ characters } alter_ego={ alter_ego } />

                    <p className="card-text">
                        <small className="text-muted">{ first_appearance }</small>
                    </p>

                    <Link to={`/hero/${ id }`}>
                        Más..
                    </Link> 
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
