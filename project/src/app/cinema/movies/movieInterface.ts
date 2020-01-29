export interface MovieInterface {
  adult: boolean;
  backdrop_path?: string;
  belongs_to_collection?: object;
  budget: number;
  genre_ids: number[];
  homepage?: string;
  id: number;
  imbd_id?: string;
  original_language: string;
  original_title: string;
  overview?: string;
  popularity: number;
  poster_path?: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}
