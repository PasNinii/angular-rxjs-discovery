export interface Pokemon {
  abilities: Abilities[];
}

interface Abilities {
  ability: string;
}

interface Ability {
  name: string;
  url: string;
}
