const players = [
  {
    make: 'Ferrari',
    model: 'LaFerrari',
    funFact: 'Only 499 units of this hybrid hypercar were made.',
    photo: 'imgs/laferrari.png',
    idName: 'ferla'
  },
  {
    make: 'Lamborghini',
    model: 'Aventador',
    funFact: 'Named after a famous Spanish fighting bull.',
    photo: 'imgs/aventador.png',
    idName: 'lamav'
  },
  {
    make: 'Bugatti',
    model: 'Chiron',
    funFact: 'Can reach 261 mph with a quad-turbo W16 engine.',
    photo: 'imgs/chiron.png',
    idName: 'bugch'
  },
  {
    make: 'Tesla',
    model: 'Model S Plaid',
    funFact: 'Goes from 0–60 mph in under 2 seconds.',
    photo: 'imgs/plaid.png',
    idName: 'tesmo'
  },
  {
    make: 'Ford',
    model: 'GT',
    funFact: 'Won Le Mans in 2016, echoing its 1966 win.',
    photo: 'imgs/gt.png',
    idName: 'forgt'
  },
  {
    make: 'Chevrolet',
    model: 'Corvette Z06',
    funFact: 'The Z06 has a naturally aspirated 670-hp V8.',
    photo: 'imgs/z06.png',
    idName: 'checo'
  },
  {
    make: 'Porsche',
    model: '911 Turbo S',
    funFact: 'An icon since the 1960s with timeless design.',
    photo: 'imgs/turbo.png',
    idName: 'portu'
  },
  {
    make: 'McLaren',
    model: '720S',
    funFact: 'Its design is inspired by a great white shark.',
    photo: 'imgs/720s.png',
    idName: 'mcls'
  },
  {
    make: 'Koenigsegg',
    model: 'Jesko',
    funFact: 'Built for over 300 mph, it redefines hypercars.',
    photo: 'imgs/jesko.png',
    idName: 'koeje'
  },
  {
    make: 'Pagani',
    model: 'Huayra',
    funFact: 'Named after a South American wind god.',
    photo: 'imgs/huayra.png',
    idName: 'paghu'
  },
  {
    make: 'Dodge',
    model: 'Challenger SRT Hellcat',
    funFact: 'Boasts over 700 horsepower of muscle.',
    photo: 'imgs/hellcat.png',
    idName: 'dodch'
  },
  {
    make: 'Nissan',
    model: 'GT-R R35',
    funFact: 'Nicknamed “Godzilla” for its performance.',
    photo: 'imgs/gtr.png',
    idName: 'nisgt'
  },
  {
    make: 'Toyota',
    model: 'Supra Mk4',
    funFact: 'Famous for its role in *The Fast and the Furious*.',
    photo: 'imgs/supra.png',
    idName: 'toysu'
  },
  {
    make: 'Mazda',
    model: 'RX-7',
    funFact: 'Powered by a unique rotary engine.',
    photo: 'imgs/rx7.png',
    idName: 'mazrx'
  },
  {
    make: 'Subaru',
    model: 'WRX STI',
    funFact: 'Known for rally heritage and all-wheel drive.',
    photo: 'imgs/wrx.png',
    idName: 'subwr'
  },
  {
    make: 'BMW',
    model: 'M3 E30',
    funFact: 'A legendary compact sports car from the 80s.',
    photo: 'imgs/m3.png',
    idName: 'bmwme'
  },
  {
    make: 'Audi',
    model: 'R8',
    funFact: 'Shares its V10 with the Lamborghini Huracán.',
    photo: 'imgs/r8.png',
    idName: 'audr'
  },
  {
    make: 'Mercedes-Benz',
    model: 'AMG GT Black Series',
    funFact: 'One of the fastest cars around the Nürburgring.',
    photo: 'imgs/amg.png',
    idName: 'meram'
  },
  {
    make: 'Acura',
    model: 'NSX',
    funFact: 'Co-developed with Ayrton Senna’s input.',
    photo: 'imgs/nsx.png',
    idName: 'acuns'
  },
  {
    make: 'Honda',
    model: 'Civic Type R',
    funFact: 'One of the best front-wheel-drive performance cars.',
    photo: 'imgs/civic.png',
    idName: 'honci'
  },
  {
    make: 'Jeep',
    model: 'Wrangler Rubicon 392',
    funFact: 'Comes with a 6.4L V8—off-road with muscle.',
    photo: 'imgs/wrangler.png',
    idName: 'jeewr'
  },
  {
    make: 'Aston Martin',
    model: 'Valkyrie',
    funFact: 'A hypercar co-developed with Red Bull Racing.',
    photo: 'imgs/valkyrie.png',
    idName: 'astva'
  },
  {
    make: 'Lotus',
    model: 'Evija',
    funFact: 'An electric hypercar with nearly 2000 hp.',
    photo: 'imgs/evija.png',
    idName: 'lotev'
  },
  {
    make: 'Rimac',
    model: 'Nevera',
    funFact: 'A Croatian EV supercar with four electric motors.',
    photo: 'imgs/nevera.png',
    idName: 'rimne'
  },
  {
    make: 'Alfa Romeo',
    model: 'Giulia Quadrifoglio',
    funFact: 'Has a Ferrari-derived twin-turbo V6.',
    photo: 'imgs/giulia.png',
    idName: 'alfgi'
  },
  {
    make: 'Cadillac',
    model: 'CT5-V Blackwing',
    funFact: 'Supercharged V8 with a manual option—rare today.',
    photo: 'imgs/blackwing.png',
    idName: 'cadct'
  },
  {
    make: 'Hyundai',
    model: 'Ioniq 5 N',
    funFact: 'An EV tuned for high-performance driving fun.',
    photo: 'imgs/ioniq.png',
    idName: 'hyuio'
  },
  {
    make: 'Peugeot',
    model: '9X8 Hypercar',
    funFact: 'Has no rear wing, defying convention.',
    photo: 'imgs/9x8.png',
    idName: 'peuhy'
  },
  {
    make: 'Volkswagen',
    model: 'Golf R',
    funFact: 'Blends hatchback practicality with AWD power.',
    photo: 'imgs/golf.png',
    idName: 'volgo'
  },
  {
    make: 'Shelby',
    model: 'Cobra 427',
    funFact: 'An American-British icon of raw power.',
    photo: 'imgs/cobra.png',
    idName: 'sheco'
  }
];
