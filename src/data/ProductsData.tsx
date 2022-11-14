export interface ProductsDataInt {
  name: string;
  img: string;
  price: number | undefined;
  brand: string;
  shop: string;
}

export class ProductsData {
  public static puma: ProductsDataInt[] = [
    {
      name: "Vegas TX",
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/387769/03/sv01/fnd/IND/fmt/png",
      price: 4000,
      brand: "Puma",
      shop: "Puma RD",
    },
    {
      name: "T-shirt",
      img: "https://falabella.scene7.com/is/image/FalabellaPE/16821206_1?wid=800&hei=800&qlt=70",
      price: 2500,
      brand: "Puma",
      shop: "Puma RD",
    },
    {
      name: "Mochila",
      img: "https://www.viu.mx/img/310/300/resize/P/U/PUMA01087_x1.jpg",
      price: 2900,
      brand: "Puma",
      shop: "Puma RD",
    },
    {
      name: "Abrigo",
      img: "https://mister-mango.omni.la/ProductCatalog/Workspace.CWDQQL6GUIJMS/ProductCatalog.C4CS6OOOVFGJY/1500x1500/C4CXCECTMUMEG.jpg",
      price: 6000,
      brand: "Puma",
      shop: "Puma RD",
    },
    {
      name: "Gorra",
      img: "https://http2.mlstatic.com/D_NQ_NP_609289-MLM42133016973_062020-O.jpg",
      price: 1100,
      brand: "Puma",
      shop: "Puma RD",
    },
  ];

  public static mango: ProductsDataInt[] = [
    {
      name: "Vestido satinado",
      img: "https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37009089_49_B.jpg?ts=1662380105044&imwidth=219&imdensity=2&impolicy=featured",
      price: 4295,
      brand: "MANGO",
      shop: "MANGO RD",
    },
    {
      name: "Vestido terciopelo",
      img: "https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37049080_99_B.jpg?ts=1659683164481&imwidth=294&imdensity=2",
      price: 1995,
      brand: "MANGO",
      shop: "MANGO RD",
    },
    {
      name: "Bolso piel",
      img: "https://st.mngbcn.com/rcs/pics/static/T4/fotos/S20/47041248_31_D5.jpg?ts=1666602177057&imwidth=294&imdensity=2",
      price: 4295,
      brand: "MANGO",
      shop: "MANGO RD",
    },
    {
      name: "Abrigo biker lana",
      img: "https://st.mngbcn.com/rcs/pics/static/T3/fotos/S20/37018631_99_B.jpg?ts=1663577629472&imwidth=219&imdensity=2",
      price: 18995,
      brand: "MANGO",
      shop: "MANGO RD",
    },
  ];

  public static bravo: ProductsDataInt[] = [
    {
      name: "Salami",
      img: "https://www.bravo.com.do/wp-content/uploads/2021/05/banners-para-web-05.jpg",
      price: 800,
      brand: "Bravo",
      shop: "Bravo",
    },
    {
      name: "Cloro",
      img: "https://almacen.do/wp-content/uploads/2020/12/Cloro-LiCC81quido-Acel_-1gal-Front.jpg",
      price: 250,
      brand: "Acel",
      shop: "Bravo",
    },
    {
      name: "Leche",
      img: "https://almacen.do/wp-content/uploads/2020/05/Leche-Entera-Rica-Listamilk-1-L-Front.jpg",
      price: 75,
      brand: "ListaMilk",
      shop: "Bravo",
    },
    {
      name: "Cheese Dip",
      img: "https://margaritacargo.com/tienda/image/cache/catalog/145125267-750x855.jpeg",
      price: 260,
      brand: "Great Value",
      shop: "Bravo",
    },
  ];

  public static nacional: ProductsDataInt[] = [
    {
      name: "Manzana",
      img: "https://almacen.do/wp-content/uploads/2020/12/Manzanas-Rojas_-1-lb-Front.jpg",
      price: 55,

      brand: "Delicious",
      shop: "Nacional",
    },
    {
      name: "Pantalón",
      img: "https://f.fcdn.app/imgs/49d0de/www.globalsports.com.uy/gls/d81c/original/catalogo/ADGN1498-000-1/1500-1500/pantalon-adidas-designed-2-move-3-stripes-black-white.jpg",
      price: 1200,
      brand: "Adidas",
      shop: "Nacional",
    },
    {
      name: "Tenis",
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/376676/01/sv01/fnd/MEX/fmt/png/",
      price: 2800,
      brand: "Puma",
      shop: "Nacional",
    },
  ];

  public static jumbo: ProductsDataInt[] = [
    {
      name: "Tenis",
      img: "https://ss237.liverpool.com.mx/xl/1066298982.jpg",
      price: 2900,
      brand: "Vans",
      shop: "Jumbo",
    },
    {
      name: "Pelota B",
      img: "https://http2.mlstatic.com/D_NQ_NP_786479-MLA48643304793_122021-O.webp",
      price: 4000,
      brand: "Wislon",
      shop: "Jumbo",
    },
    {
      name: "Headphones",
      img: "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studio3-wireless/pdp/refresh2022/studio3-pdp-p02.png.large.2x.png",
      price: 5200,
      brand: "Beats",
      shop: "Jumbo",
    },
  ];
}
