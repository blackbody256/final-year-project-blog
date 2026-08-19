export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GalleryCollection = {
  slug: string;
  title: string;
  /** Short label shown above the title. */
  eyebrow: string;
  /** Explains what the collection shows and why it matters to the project. */
  caption: string;
  images: GalleryImage[];
};

export const galleryCollections: GalleryCollection[] = [
  {
    slug: "c6-180kw-charger",
    title: "Testing a C6 180 kW charger",
    eyebrow: "Kiira Motors Corporation",
    caption:
      "A KMC C6 180 kW DC fast charger, from delivery to initial testing. It arrives shrink-wrapped on a pallet, is unwrapped and positioned, then connected to the grid through the distribution board beside it and tested by charging a bus. Every unit that later reports a fault starts here, and knowing how one is put together is what makes its logs readable afterwards.",
    images: [
      {
        src: "/gallery/c6-180kw-charger/01.jpeg",
        alt: "A KMC-branded C6 charger cabinet standing on a pallet, its charging cable still wrapped in protective plastic, with a bus visible on the factory floor behind it.",
        width: 443,
        height: 879,
      },
      {
        src: "/gallery/c6-180kw-charger/02.jpeg",
        alt: "Side view of the same charger still in its delivery wrapping, showing the full-height ventilation louvres and both cables coiled and bagged at the base.",
        width: 473,
        height: 931,
      },
      {
        src: "/gallery/c6-180kw-charger/03.jpeg",
        alt: "The unwrapped charger positioned on a plywood base with both connectors hanging from overhead support arms and commissioning cables laid across the floor.",
        width: 768,
        height: 1020,
      },
      {
        src: "/gallery/c6-180kw-charger/04.jpeg",
        alt: "The charger seen from the front during positioning, both charging cables suspended and the temporary supply cabling still routed across the floor.",
        width: 768,
        height: 1020,
      },
      {
        src: "/gallery/c6-180kw-charger/05.jpeg",
        alt: "The charger connected for testing beside an EBUS unit, with a CHiNT distribution box and its indicator lamps wired in to the right.",
        width: 768,
        height: 1020,
      },
      {
        src: "/gallery/c6-180kw-charger/06.jpeg",
        alt: "The finished charger head-on, showing the display, emergency stop button and KMC branding, with both connectors holstered.",
        width: 768,
        height: 1020,
      },
    ],
  },
  {
    slug: "a8-board-swap",
    title: "Swapping the A8 board on a faulty charger",
    eyebrow: "Field maintenance",
    caption:
      "Diagnosing a charger that had stopped working. The cabinet is opened to reach the control board above the stacked power modules, the A8 board is swapped, and the unit is retested. This is the test-and-replace loop the project exists to shorten: without a way to trace a fault to its cause, the only method is to substitute parts until the symptom disappears, and the charger stays out of service the whole time.",
    images: [
      {
        src: "/gallery/a8-board-swap/01.jpeg",
        alt: "Andrew switching of the feeder pillar  so that he can diagnose the charger",
        width: 768,
        height: 1020,
      },
      {
        src: "/gallery/a8-board-swap/02.jpeg",
        alt: "The old faulty A8 board is removed",
        width: 432,
        height: 984,
      },
      {
        src: "/gallery/a8-board-swap/03.jpeg",
        alt: "A new A8 board is being wired and connected.",
        width: 432,
        height: 984,
      },
      {
        src: "/gallery/a8-board-swap/04.jpeg",
        alt: "The new A8 board is screwed back for testing.",
        width: 432,
        height: 984,
      },
    ],
  },
];
