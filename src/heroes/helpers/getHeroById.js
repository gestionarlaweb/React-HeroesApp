import { heroes } from "../data/heroes"

export const getHeroById = (id) => {
  return heroes.find(hero => hero.id === id); 
  //NOTA: si find no encuentra nada entonces devuelve undefine
}
