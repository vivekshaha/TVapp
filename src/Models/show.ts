export type Show = {
  id: number;
  name: string;
  generes: string[];
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
