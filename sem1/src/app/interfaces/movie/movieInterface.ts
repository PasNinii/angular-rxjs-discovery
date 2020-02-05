import { CastExpr } from '@angular/compiler';

/* Movie */
export interface MoviesResponse {
  page: number;
  results: MoviesInterface[];
  total_pages: number;
  total_results: number;
}

export interface MoviesInterface {
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

export interface MovieInterface {
  adult: boolean;
  budget: number;
  genre: Genre;
  backdrop_path?: string;
  id: number;
  imbd_id?: string;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  release_date: string;
  revenue: number;
  runtime?: number;
  spoken_languages: Languages[];
  status: string;
  tagline?: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface ProductionCompanies {
  name: string;
  id: number;
  logo_path?: string;
  origin_country: string;
}

export interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}

export interface Languages {
  iso_639_1: string;
  name: string;
}

export interface Credits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

export interface Cast {
  cast_id: number;
  character: string;
  credit_id: string;
  gender?: number;
  id: number;
  name: string;
  order: number;
  profile_path?: string;
}

export interface Crew {
  credit_id: string;
  department: string;
  gender?: number;
  id: number;
  job: string;
  name: string;
  profile_path?: string;
}

export interface Keyword {
  id: number;
  keywords: Keywords[];
}

export interface Keywords {
  id: number;
  name: string;
}

export interface Videos {
  id: number;
  results: Video[];
}

export interface Video {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}


/* Genre */
export interface GenreResponse {
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}
