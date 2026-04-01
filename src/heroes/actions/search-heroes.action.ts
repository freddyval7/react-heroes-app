import { heroApi } from "../api/hero.api";
import type { Hero } from "../interfaces/hero.interface";

interface Option {
  name?: string;
  team?: string;
  category?: string;
  universe?: string;
  status?: string;
  strength?: number;
}

const BASE_URL = import.meta.env.VITE_API_URL;

export const searchHeroesAction = async ({
  name,
  strength,
  team,
  category,
  universe,
  status,
}: Option) => {
  if (!name && !strength && !team && !category && !universe && !status) {
    return [];
  }

  const { data } = await heroApi.get<Hero[]>("/search", {
    params: {
      name,
      strength,
      team,
      category,
      universe,
      status,
    },
  });

  const heroes = data.map((hero) => ({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
  }));

  return heroes;
};
