import { ElementNode } from "@graphcms/rich-text-types";



export type DataContextType ={
    isMenuOpen : boolean
    toggleMenu : ()=>void;
}


export type HeroData = {
  portraitLight: any;
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
  portraitLight: any;
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

type ProjectsSectionData = {
  description: string;
  title: string;
  technos:[string];
};
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

type ImagesProject = [
     { height: number;
      url: string;
      width: number;}
  ];


type ProjectDetails = CardProjectData &{
  images: ImagesProject
  description: {
    raw: {
      children: ElementNode[];
    };
  };
};


type ContactData = {
  email: string;
  paragraph: {
    raw: {children: ElementNode[]};
  }
  subtitle: string;
  title: string
}
type ContactsData = ContactData[]

type ResumeData = {
  title: string;
  subtitle?: string;
  urlInline: string;
  urlMobile?: string;
  pdf:{
    url:string;
  }
};

type ResumesData = ResumeData[]

export type HomePageData = {
  heroes: HeroesData;
  abouts: AboutsData;
  projectsSections: ProjectsSectionsData;
  projects: CardsProjectData;
  contacts: ContactsData
  resumes: ResumesData
};
