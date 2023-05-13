export type Show = {
  id: number;
  name: string;
  genres: string[];
  rating: { average?: number };
  image: {
    medium?: string;
  };
  summary?: string;
};

export type Cast = {
  name: string;
  id: number;
  image: {
    medium?: string;
  };
};

export type showCast = {
  show: Show;
  cast: Cast[];
};
