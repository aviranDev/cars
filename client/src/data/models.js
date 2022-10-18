import generateId from "../tools/generateId";

const cars = [
  {
    brand: 'Audi',
    model: 'A7 2022',
    car: 'Audi A7 2022',
    info: `
    The Audi A7’s sleek elegance makes this sedan-like coupe-ish hatchback a looker. 
    Behind the big hexagonal grille sits a turbocharged 335-hp V-6 bolted to a dual-clutch automatic that sends power 
    to Audi’s Quattro all-wheel-drive system.
    `,
    img: "https://images.hgmsites.net/lrg/2022-audi-a7-premium-plus-55-tfsi-quattro-angular-front-exterior-view_100824600_l.jpg"
  },
  {
    brand: 'Bentley',
    model: 'Flying spur 2017',
    car: 'Bentley Flying spur 2017',
    info: `
    The Flying Spur goes into this year with a "base” V-8 model and a more powerful W-12 engine choice.
  `,
    img: "https://autos.hamariweb.com/images/carimages/AAaqWet.jpg"
  },
  {
    brand: 'Cadillac',
    model: 'ATS-V Sedan 2018',
    car: 'Cadillac ATS-V Sedan',
    img: "https://file.kelleybluebookimages.com/kbb/base/evox/CP/11021/2018-Cadillac-ATS-V-front_11021_032_2400x1800_G1W.png",
    info: `
    The Cadillac ATS-V will rip apart Audis and Mercedes Benzes all day, 
    but settle down to a nice comfortable highway cruise right after.
    It’s not large, but it works as a real life sedan.  `
  },
  {
    brand: 'Cadillac',
    model: 'CT5 Sport 2022',
    car: 'Cadillac CT5 Sport 2022',
    info: `
    As sports sedans go, the 2022 Cadillac CT5 doesn't have the crispest 
    handling and isn't the most luxurious, 
    but its stylish exterior and eager optional powertrains keep it in 
    the hunt with rivals such as the BMW 3-series, 
    Mercedes-Benz C-class, and Genesis G70.
  `,
    img: "https://file.kelleybluebookimages.com/kbb/base/evox/CP/14316/2022-Cadillac-CT5-front_14316_032_2400x1800_GAZ.png"
  },
  {
    brand: 'Cadillac',
    model: 'XTS Sedan 2022',
    car: 'Cadillac XTS Sedan 2022',
    info: `
    Cadillac XTS 2020 is a 5 Seater Sedans available between a price range of $47,890 - $73,990 in the United States. 
    It is available in 8 variants, 1 engine, and 1 transmissions option: Automatic in the United States. 
  `,
    img: "https://eagleluxurytransportation.com/wp-content/uploads/2017/03/cadillac-xts-sedan-angular-front.png"
  },
  {
    brand: 'Volvo',
    model: 'XC90 Hybrid 2019',
    car: 'Volvo XC90 Hybrid 2019',
    info: `
    The 2023 XC90 Recharge plug-in hybrid is the luxury family 
    SUV that combines safety and comfort, 
    designed for ultimate elegance and capacity. 
    `,
    img: "https://www.evspecifications.info/wp-content/uploads/2020/01/volvo-xc90-t8-evchargeplus-00-1-1024x680.png"
  },
  {
    brand: 'Volvo',
    model: 'XC60 Recharge 2022',
    car: 'Volvo XC60 Recharge 2022',
    info: `
    The Volvo XC60 Recharge offers quick acceleration, 
    decent space for passengers and cargo, and solid towing capacity 
    for a compact plug-in hybrid SUV, but the 2021 model’s all-electric 
    range of 18 miles left our editors wishing for more. 
    `,
    img: "https://file.kelleybluebookimages.com/kbb/base/evox/CP/14783/2021-Volvo-XC60-front_14783_032_2400x1800_614.png"
  },
  {
    brand: 'Volvo',
    model: 'S60 Recharge Plus Dark',
    car: 'Volvo S60 Recharge Plus Dark',
    img: 'https://img.sm360.ca/ir/w640h390c/images/newcar/ca/2023/volvo/s60-recharge/plus-dark/sedan/exteriorColors/14044_cc0640_032_717.png',
    info: `
    he Volvo S60 2.0 T8 [455] Recharge PHEV Plus Dark 4dr AWD Auto is a saloon car with 4 doors. 
    It has a 2 litre petrol/plugin electric hybrid engine with an automatic gearbox. 
    `,
  },
  {
    brand: 'Mercedes Benz',
    model: 'G-Class 2022',
    car: 'Mercedes Benz G-Class 2022',
    info: `
    The Mercedes-Benz G-Class has 1 Diesel Engine on offer. 
    The Diesel engine is 2925 cc . It is available with Automatic transmission.
    Depending upon the variant and fuel type the G-Class has a mileage of 8.13 kmpl & Ground clearance of G-Class is 241 mm.
    `,
    img: "https://www.motortrend.com/uploads/sites/10/2017/12/2018-mercedes-benz-g-class-550-suv-angular-front.png"
  },
  {
    brand: 'Mercedes Benz',
    model: 'E-Class 2022',
    car: 'Mercedes Benz E-Class 2022',
    info: `
    The 2022 Mercedes-Benz E-Class finishes near the top of our luxury midsize car rankings. 
    It’s everything a premium luxury car should be, with a first-rate interior, 
    a comfortable ride, and plenty of technology.
  `,
    img: "https://www.motortrend.com/uploads/2021/10/2022-Mercedes-Benz-CLS.png"
  },
  {
    brand: 'Mercedes Benz',
    model: 'AMG GT 63 2023',
    car: 'Mercedes Benz AMG GT 63 2023',
    img: "https://carfind-cdn-media.azureedge.net/cars/LF/mercedes_amg-gt_coupe_benzin_4-doors_lf.webp",
    info: `
    The 2023 Mercedes-AMG GT sedan synthesizes performance and presence in a way that few four-doors can. 
    Mechanically, it’s based on the E-class wagon not the GT sports car,
     but no matter—it behaves much the same as the two-seater.`,
  },
  {
    brand: 'BMW',
    model: '4-Series 2021',
    car: 'BMW 4-Series 2021',
    info: `
    TCompact executive car (D). 
    2-door coupé 2-door convertible 5-door.
    `,
    description: 'asf', img: "https://cars.usnews.com/static/images/Auto/izmo/i159614466/2021_bmw_4_series_coupe_angularfront.jpg"
  },
  {
    brand: 'BMW',
    model: '5-Series 2022',
    car: 'BMW 5-Series 2022',
    info: `
    TCompact executive car (D). 
    2-door coupé 2-door convertible 5-door.
    `,
    description: 'asf', img: "https://www.freestartravel.net/uploads/0000/22/2021/10/01/bmw-5-series-540i-2021.jpg"
  },
  {
    brand: 'BMW',
    model: '3 Series 330i Sedan 2023',
    car: 'BMW 3 Series 330i Sedan 2023',
    img: 'https://cars.chapmanchoice.com/stock/bmw/1714.jpg',
    info: `Few cars are capable of serving the gods of both comfort and sportiness as well as the 
    2023 BMW 3-series sedan. This perennial favorite can 
    be outfitted as a corner-carving sports sedan or a well-appointed entry-luxury car—or a combination of both.`
  },
  {
    brand: 'Mazerati',
    model: 'Levante 3.ol 2020',
    car: 'maserati levante 3.ol 2020',
    info: `
    Maserati Levante 3.0L 2020
    Check the Most updated Price of Maserati Levante 3.0L 2020 Price in Europe and detail Specifications, 
    features and compare Maserati Levante 3.0L 2020 Prices Features and Detail Specs with upto 3 Products
    `,
    img: "https://www.ccarprice.com/products/Maserati-Levante-3.0L-2020.jpg"
  },
  {
    brand: 'Rolls Royce',
    model: 'Wraith 2019',
    car: 'Rolls-royce Dwan 2022',
    info: `
    the Phantom Drophead Coupe is winding down and won’t be replaced until 2018. 
    The Dawn thus leads the charge for a younger, more dynamic clientele.
    `,
    img: "https://cdn.shopify.com/s/files/1/2101/8073/products/White-Rolls-Royce-Transparent-Image_580x.png?v=1545786985"
  },


];

const data = generateId(cars);

export default data