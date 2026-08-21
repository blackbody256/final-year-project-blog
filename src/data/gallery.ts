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
    slug: "problem-identification",
    title: "Diagnosing a faulty charger",
    eyebrow: "Problem identification",
    caption:
      "The slow test-and-replace process that inspired our diagnostic system.",
    images: [
      {
        src: "/gallery/a8-board-swap/01.jpeg",
        alt: "Switching off the feeder pillar before inspecting the charger.",
        width: 768,
        height: 1020,
      },
      {
        src: "/gallery/a8-board-swap/02.jpeg",
        alt: "Removing the faulty A8 control board.",
        width: 432,
        height: 984,
      },
      {
        src: "/gallery/a8-board-swap/03.jpeg",
        alt: "Wiring the replacement A8 board.",
        width: 432,
        height: 984,
      },
      {
        src: "/gallery/a8-board-swap/04.jpeg",
        alt: "Securing the replacement board before testing.",
        width: 432,
        height: 984,
      },
    ],
  },
  {
    slug: "c6-180kw-charger",
    title: "Commissioning the C6 fast charger",
    eyebrow: "Charger familiarisation",
    caption:
      "The charger was positioned, connected and tested with an electric bus.",
    images: [
      {
        src: "/gallery/c6-180kw-charger/01.jpeg",
        alt: "Wrapped KMC C6 charger on its delivery pallet.",
        width: 443,
        height: 879,
      },
      {
        src: "/gallery/c6-180kw-charger/02.jpeg",
        alt: "Side view of the wrapped charger and coiled cables.",
        width: 473,
        height: 931,
      },
      {
        src: "/gallery/c6-180kw-charger/03.jpeg",
        alt: "Unwrapped charger with cables suspended from its support arms.",
        width: 768,
        height: 1020,
      },
      {
        src: "/gallery/c6-180kw-charger/04.jpeg",
        alt: "Front view while positioning the charger.",
        width: 768,
        height: 1020,
      },
      {
        src: "/gallery/c6-180kw-charger/05.jpeg",
        alt: "Charger connected to the distribution box for testing.",
        width: 768,
        height: 1020,
      },
      {
        src: "/gallery/c6-180kw-charger/06.jpeg",
        alt: "Commissioned KMC C6 charger with both connectors holstered.",
        width: 768,
        height: 1020,
      },
    ],
  },
];
