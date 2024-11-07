export interface IPet {
  id: number;
  category: Category;
  name: string;
  photoUrls: string[];
  tags: Tags[];
  status: string;
}
interface Category {
  id: number;
  name: string;
}
interface Tags {
  id: number;
  name: string;
}


export interface IPetReponse {
  id: number;
  category: Category;
  name: string;
  photoUrls: string[];
  tags: Tags[];
  status: string;
}
