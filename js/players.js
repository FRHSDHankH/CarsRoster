const players = [
  {
    make: 'Ferrari',
    model: 'LaFerrari',
    funFact: 'Only 499 units of this hybrid hypercar were made.',
    photo: 'imgs/laferrari.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Lamborghini',
    model: 'Aventador',
    funFact: 'Named after a famous Spanish fighting bull.',
    photo: 'imgs/aventador.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Bugatti',
    model: 'Chiron',
    funFact: 'Can reach 261 mph with a quad-turbo W16 engine.',
    photo: 'imgs/chiron.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Tesla',
    model: 'Model S Plaid',
    funFact: 'Goes from 0–60 mph in under 2 seconds.',
    photo: 'imgs/plaid.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Ford',
    model: 'GT',
    funFact: 'Won Le Mans in 2016, echoing its 1966 win.',
    photo: 'imgs/gt.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Chevrolet',
    model: 'Corvette Z06',
    funFact: 'The Z06 has a naturally aspirated 670-hp V8.',
    photo: 'imgs/z06.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Porsche',
    model: '911 Turbo S',
    funFact: 'An icon since the 1960s with timeless design.',
    photo: 'imgs/turbo.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'McLaren',
    model: '720S',
    funFact: 'Its design is inspired by a great white shark.',
    photo: 'imgs/720s.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Koenigsegg',
    model: 'Jesko',
    funFact: 'Built for over 300 mph, it redefines hypercars.',
    photo: 'imgs/jesko.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Pagani',
    model: 'Huayra',
    funFact: 'Named after a South American wind god.',
    photo: 'imgs/huayra.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Dodge',
    model: 'Challenger SRT Hellcat',
    funFact: 'Boasts over 700 horsepower of muscle.',
    photo: 'imgs/hellcat.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Nissan',
    model: 'GT-R R35',
    funFact: 'Nicknamed “Godzilla” for its performance.',
    photo: 'imgs/gtr.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Toyota',
    model: 'Supra Mk4',
    funFact: 'Famous for its role in *The Fast and the Furious*.',
    photo: 'imgs/supra.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Mazda',
    model: 'RX-7',
    funFact: 'Powered by a unique rotary engine.',
    photo: 'imgs/rx7.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Subaru',
    model: 'WRX STI',
    funFact: 'Known for rally heritage and all-wheel drive.',
    photo: 'imgs/wrx.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'BMW',
    model: 'M3 E30',
    funFact: 'A legendary compact sports car from the 80s.',
    photo: 'imgs/m3.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Audi',
    model: 'R8',
    funFact: 'Shares its V10 with the Lamborghini Huracán.',
    photo: 'imgs/r8.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Mercedes-Benz',
    model: 'AMG GT Black Series',
    funFact: 'One of the fastest cars around the Nürburgring.',
    photo: 'imgs/amg.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Acura',
    model: 'NSX',
    funFact: 'Co-developed with Ayrton Senna’s input.',
    photo: 'imgs/nsx.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Honda',
    model: 'Civic Type R',
    funFact: 'One of the best front-wheel-drive performance cars.',
    photo: 'imgs/civic.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Jeep',
    model: 'Wrangler Rubicon 392',
    funFact: 'Comes with a 6.4L V8—off-road with muscle.',
    photo: 'imgs/wrangler.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Aston Martin',
    model: 'Valkyrie',
    funFact: 'A hypercar co-developed with Red Bull Racing.',
    photo: 'imgs/valkyrie.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Lotus',
    model: 'Evija',
    funFact: 'An electric hypercar with nearly 2000 hp.',
    photo: 'imgs/evija.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Rimac',
    model: 'Nevera',
    funFact: 'A Croatian EV supercar with four electric motors.',
    photo: 'imgs/nevera.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Alfa Romeo',
    model: 'Giulia Quadrifoglio',
    funFact: 'Has a Ferrari-derived twin-turbo V6.',
    photo: 'imgs/giulia.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Cadillac',
    model: 'CT5-V Blackwing',
    funFact: 'Supercharged V8 with a manual option—rare today.',
    photo: 'imgs/blackwing.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Hyundai',
    model: 'Ioniq 5 N',
    funFact: 'An EV tuned for high-performance driving fun.',
    photo: 'imgs/ioniq.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Peugeot',
    model: '9X8 Hypercar',
    funFact: 'Has no rear wing, defying convention.',
    photo: 'imgs/9x8.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Volkswagen',
    model: 'Golf R',
    funFact: 'Blends hatchback practicality with AWD power.',
    photo: 'imgs/golf.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  },
  {
    make: 'Shelby',
    model: 'Cobra 427',
    funFact: 'An American-British icon of raw power.',
    photo: 'imgs/cobra.png',
    get idName() {
      return this.make.toLowerCase().substring(0,3) + this.model.toLowerCase().substring(0,2)
    }
  }
];
