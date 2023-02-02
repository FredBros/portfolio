export type DataContextType ={
    isMenuOpen : boolean
    toggleMenu : ()=>void;
}


export type HeroData = {
  title: string;
  subtitle: string;
  paragraph: string
  picture: {
    height: number;
    url: string;
    width: number;
  };
};

type HeroesData = HeroData[];

export type AboutData = {
  title: string;
  paragraph: string;
  portrait: {
    height: number;
    url: string;
    width: number;
  };
};

type AboutsData = AboutData[];

export type HomePageData = {
  heroes: HeroesData;
  abouts: AboutsData;
};
