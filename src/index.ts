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
  type: string;
  slug: string;
}

export interface Collection {
  $id?: string;
  name: string; //Collection Name eg: Shirts or Aristobrat
  category: string; // BrandName or Men or Women
  cardImage: string; //Image on the card on homepage or women's page etc
  headerImage: string; //Image at the top of the collection page
  slug: string; //slug of the name of collection
}

export const collections = [
  {
     "$id": "6628b3bce0c3534210ac",
     "name": "House of Stori",
     "category": "brands",
     "slug": "house-of-stori",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713943467/slik/misc/fryaoo9ihnuzuzazqu6a.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713943475/slik/misc/haqlxojujnjmba1kanhe.webp"
  },
  {
     "$id": "662dac99bf1606c1b6a5",
     "name": "Dresses",
     "category": "women",
     "slug": "dresses",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714269312/slik/misc/bu5tngdhmkb2qnwnnor6.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714269323/slik/misc/aq1x6im9tbcthsvgvwu9.webp"
  },
  {
     "$id": "6624a1721766dc83d0f4",
     "name": "The Souled Store",
     "category": "brands",
     "slug": "the-souled-store",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713679748/slik/misc/wkzbskgshamrzlahy2w6.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713676643/slik/misc/wilt0wvv7r1gmkmo0ysc.webp"
  },
  {
     "$id": "662da72bf29f6f8387bc",
     "name": "Shirts",
     "category": "men",
     "slug": "shirts",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714267916/slik/misc/tu1evdplaja2mrliscbq.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714267927/slik/misc/udabglgiwqgubdemhtuq.webp"
  },
  {
     "$id": "662d978d36ac53fd3db1",
     "name": "co-ords",
     "category": "women",
     "slug": "co-ords",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714733362/slik/misc/rqrqibilpgcv7yeyw8dg.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714264941/slik/misc/z9uggv7vy3fqi6m2gafp.webp"
  },
  {
     "$id": "6624d34d9c3da32a2b37",
     "name": "Freakins",
     "category": "brands",
     "slug": "freakins",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714036382/slik/misc/cq0yrhjujijszsrj85uv.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713689401/slik/misc/p7wjxdv4qqetd8ntsdbq.webp"
  },
  {
     "$id": "6634dae6bf6f412e8716",
     "name": "oversized t-shirts",
     "category": "men",
     "slug": "oversized-t-shirts",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714739923/slik/misc/tpzuqx2dem4qguir6c61.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714739935/slik/misc/ndkku8bldndcnfrmbzxr.webp"
  },
  {
     "$id": "663520b43247f8b06d73",
     "name": "shirts",
     "category": "women",
     "slug": "shirts",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714757788/slik/misc/b0fhktyqhbg2nzfmb8cc.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714757803/slik/misc/ubyydjdaiajm9mi717jy.webp"
  },
  {
     "$id": "66202fbb2d9919fb64c4",
     "name": "pants",
     "category": "men",
     "slug": "pants",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714271511/slik/misc/an39c9csnecxxj8zykzb.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714271528/slik/misc/f7smivo3o5lazlcdqiud.webp"
  },
  {
     "$id": "66278af00823a882531f",
     "name": "Siesta o'Clock",
     "category": "brands",
     "slug": "siesta-oclock",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713867400/slik/misc/xwshqpajy0gjpzxdovqh.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713867407/slik/misc/cmnfvciqm7r5y4cjy8ws.webp"
  },
  {
     "$id": "66201c3de127c5c61a22",
     "name": "oversized t-shirts",
     "category": "women",
     "slug": "oversized-t-shirts",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714730514/slik/misc/oversizedtshirtscard_gohrx4.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714276161/slik/misc/hbov1hpuxo8d6ukxc0rp.webp"
  },
  {
     "$id": "66288a96f0dcf046e7b3",
     "name": "Bombay Shirt Company",
     "category": "brands",
     "slug": "bombay-shirt-company",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713932923/slik/misc/irzznjqz49x8u24m2023.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713932934/slik/misc/o954pzfjnmxnopirrtow.webp"
  },
  {
     "$id": "6624cf9e8624562faf52",
     "name": "Aristobrat",
     "category": "brands",
     "slug": "aristobrat",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714036411/slik/misc/sxq7nyzrpnxakhdd6ggn.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713688473/slik/misc/cokheyh8h66d1xthh6k9.webp"
  },
  {
     "$id": "6635157fd541ef1bfacc",
     "name": "t-shirts",
     "category": "men",
     "slug": "t-shirts",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714754917/slik/misc/iehmrg2yses3v6gbmmcf.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714754928/slik/misc/bl6xd6j5ptdwz5nrg0iw.webp"
  },
  {
     "$id": "6624e05ab0d21a07b2a9",
     "name": "Bonkers Corner",
     "category": "brands",
     "slug": "bonkers-corner",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714036300/slik/misc/wjaqvdzwhjkt5t6jbmk4.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713692707/slik/misc/rdfgeuft5tbnjauxswak.webp"
  },
  {
     "$id": "6635213bbc5f0fef15ff",
     "name": "pants",
     "category": "women",
     "slug": "pants",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714757927/slik/misc/wzrrtwmxaqymwgsosbex.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714757940/slik/misc/aarva1ywdtjxuufda3hv.webp"
  },
  {
     "$id": "6628c27b64ba343cba20",
     "name": "Andamen",
     "category": "brands",
     "slug": "andamen",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713947243/slik/misc/ojdxdjzsmixifkxtkpjh.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713947251/slik/misc/wivbj7w5ru4ugex0xnso.webp"
  },
  {
     "$id": "663515e044c51432b5fe",
     "name": "co-ords",
     "category": "men",
     "slug": "co-ords",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714755018/slik/misc/xcuv9oyan5oiyg0jpzmt.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714755028/slik/misc/eykdzttlflmxs44c9ici.webp"
  },
  {
     "$id": "6624cf6f0438079ec789",
     "name": "Kaira by Nikita",
     "category": "brands",
     "slug": "kaira-by-nikita",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714036493/slik/misc/xs7e66vh4xjfn060ajw4.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713688407/slik/misc/b6qdfakofcipgfzwtnpc.webp"
  },
  {
     "$id": "6635218020f8f2c74a24",
     "name": "tops",
     "category": "women",
     "slug": "tops",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714757996/slik/misc/dusqwglnegwds324j8sx.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714758006/slik/misc/aj1hyluccnddqkjmihj9.webp"
  },
  {
     "$id": "662a8ec5a9ee75d2db41",
     "name": "Shasak",
     "category": "brands",
     "slug": "shasak",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714065064/slik/misc/k6gjnggbnv9x5j9t9nay.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714065076/slik/misc/bcqpyg9mptwnlxi2b4ed.webp"
  },
  {
     "$id": "66351632bde3c51b42a4",
     "name": "shorts",
     "category": "men",
     "slug": "shorts",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714755071/slik/misc/eam9jwnx3svv3us9szdf.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714755113/slik/misc/njwbkeuqxjgdtsfpggmd.webp"
  },
  {
     "$id": "6627b4944cbe0e5a68bc",
     "name": "Label Tasos",
     "category": "brands",
     "slug": "label-tasos",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713878145/slik/misc/i0oidhqryrcslldkgirb.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713878157/slik/misc/pga0vwwzekdbrpfpg9rb.webp"
  },
  {
     "$id": "663521b60c3772e33bd9",
     "name": "shorts",
     "category": "women",
     "slug": "shorts",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714758050/slik/misc/qthbqhth0rvvjwhniqdf.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714758055/slik/misc/ixgq5za0yfa1fatfy9ys.webp"
  },
  {
     "$id": "6624dbb54df94f06f6d7",
     "name": "Adah by Leesha",
     "category": "brands",
     "slug": "adah-by-leesha",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714036343/slik/misc/kzs27hwtjb1matmmrjcp.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713691559/slik/misc/jawcnfwwf4tcfdgsdodc.webp"
  },
  {
   "$id": "6634e045925e0a19c9f6",
   "name": "Bewakoof",
   "category": "brands",
   "slug": "bewakoof",
   "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714741298/slik/misc/qgzuocybct2girc0qgfp.webp",
   "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714741309/slik/misc/geasv43jcmmntecl0frk.webp"
},
  {
     "$id": "6624c43a6654968dd768",
     "name": "Snitch",
     "category": "brands",
     "slug": "snitch",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714036460/slik/misc/d7tdp9brqrruqqhespuq.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713685552/slik/misc/uhse6xifymoyr6da47vf.webp"
  },
  {
     "$id": "6624e08a3edd53655050",
     "name": "House of Chikankari",
     "category": "brands",
     "slug": "house-of-chikankari",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714036268/slik/misc/rvqil3c4gosfporurkgb.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713692794/slik/misc/ioy31u9lhyjjd8pl7qkl.webp"
  },
  {
     "$id": "6627e90d56e941ff0463",
     "name": "Botnia",
     "category": "brands",
     "slug": "botnia",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713891574/slik/misc/mdaywbmfzjomi9jzad92.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713891583/slik/misc/nntyo7qmztdr8to3d6uq.webp"
  },
  {
     "$id": "6634a74c42fa1257a1a9",
     "name": "Burger Bae",
     "category": "brands",
     "slug": "burger-bae",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714726698/slik/misc/qvml7iqem0zors5wxj2h.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714726722/slik/misc/efmhqpk1znbkhkaahvzm.webp"
  },
  {
     "$id": "6627db24bd02ce2a2a30",
     "name": "AakarTaro",
     "category": "brands",
     "slug": "aakartaro",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714035988/slik/misc/e0xbmue0y3dtz90zsu3o.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713888014/slik/misc/vjxht6g4vjlemayfkjlq.webp"
  },
  {
     "$id": "662882e286698539c7e1",
     "name": "5feet11",
     "category": "brands",
     "slug": "5feet11",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713930958/slik/misc/vfji6dik1q1gk5xsuz0z.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1713930966/slik/misc/b1ja2jmgfuatkhq63ird.webp"
  },
  {
     "$id": "662a4404b8920f05dff6",
     "name": "Cottonworld",
     "category": "brands",
     "slug": "cottonworld",
     "cardImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714045918/slik/misc/gbv3c0kdqwo7rfqnj92v.webp",
     "headerImage": "https://res.cloudinary.com/dnhz5reqf/image/upload/v1714045928/slik/misc/nipfbyhbjksswohq8iln.webp"
  }
]
