import { ElementNode } from "@graphcms/rich-text-types";



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
  description: {
    raw: {
      children: ElementNode[];
    };
  };
  portrait: {
    height: number;
    url: string;
    width: number;
  };
};

type AboutsData = AboutData[];

type ProjectsSectionData= {
  description: string;
  title: string;
}
type ProjectsSectionsData = ProjectsSectionData[];

type CardProjectData = {
  title: string;
  subtitle: string;
  cardImage: {
    height: number;
    url: string;
    width: number;
  };
  githubLink: string;
  slug: string;
  techno:[string];
  websiteLink: string;
};

type CardsProjectData = CardProjectData[]
export type HomePageData = {
  heroes: HeroesData;
  abouts: AboutsData;
  projectsSections: ProjectsSectionsData;
  projects: CardsProjectData;
};
