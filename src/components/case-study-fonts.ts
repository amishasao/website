import { Instrument_Serif, Raleway } from "next/font/google";

// Heading fonts borrowed from the original presentation decks
export const fontRaleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const fontInstrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});
