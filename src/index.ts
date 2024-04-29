export interface Prods {
  $collectionId?: string;
  $createdAt?: string;
  $databaseId?: string;
  $id?: string;
  $permissions?: string[];
  $updatedAt?: string;
  brand: string;
  category: string;
  images: string[];
  price: number;
  target: string;
  title: string;
  userid: string;
  type: string;
  slug: string;
  likes: Likes[];
}

export interface Likes {
  userid: string;
  time: number;
}

export interface Collection {
  $collectionId?: string;
  $createdAt?: string;
  $databaseId?: string;
  $id?: string;
  $permissions?: string[];
  $updatedAt?: string;
  name: string; //Collection Name eg: Shirts or Aristobrat
  category: string; // BrandName or Men or Women
  cardImage: string; //Image on the card on homepage or women's page etc
  headerImage: string; //Image at the top of the collection page
  slug: string; //slug of the name of collection
}
