import Link from "next/link";
import styles from "./homeCard.module.css";
import CardButton from "../../components/cardButton/cardButton";

import TasRajut from "./kerajinan/tas-rajut/tas-rajut";
import BiskuitRomaKelapa from "./makanan/biskuit-roma-kelapa/biskuit-roma-kelapa";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MakananDetail from "./makanan/[makananId]/page";

export default function Makanan() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>Makanan</p>
        <Link href="/product/makanan">
          <CardButton />
        </Link>
      </div>
      <div className={styles.cardContainer}>
        <Carousel
          className="relative flex justify-center w-full max-w-7xl"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            <BiskuitRomaKelapa page="home" />
            <BiskuitRomaKelapa page="home" />
            <BiskuitRomaKelapa page="home" />
            <BiskuitRomaKelapa page="home" />
            <BiskuitRomaKelapa page="home" />
            <BiskuitRomaKelapa page="home" />
            <BiskuitRomaKelapa page="home" />
          </CarouselContent>

          <CarouselPrevious className="left-2 sm:left-4 w-8 h-8 bg-black/50 text-white rounded-full hover:bg-[#3d3ff6] hover:text-white" />
          <CarouselNext className="right-2 sm:right-4 w-8 h-8 bg-black/50 text-white rounded-full hover:bg-[#3d3ff6] hover:text-white" />
        </Carousel>
      </div>

      <div className={`${styles.titleContainer}  ${styles.section}`}>
        <p className={`${styles.title}`}>Kerajinan</p>
        <Link href="/product/kerajinan">
          <CardButton />
        </Link>
      </div>
      <div className={styles.cardContainer}>
        <Carousel
          className="relative flex justify-center w-full max-w-7xl"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            <TasRajut page="home" />
            <TasRajut page="home" />
            <TasRajut page="home" />
            <BiskuitRomaKelapa page="home" />
            <BiskuitRomaKelapa page="home" />
            <BiskuitRomaKelapa page="home" />
            <BiskuitRomaKelapa page="home" />
          </CarouselContent>

          <CarouselPrevious className="left-2 sm:left-4 w-8 h-8 bg-black/50 text-white rounded-full hover:bg-[#3d3ff6] hover:text-white" />
          <CarouselNext className="right-2 sm:right-4 w-8 h-8 bg-black/50 text-white rounded-full hover:bg-[#3d3ff6] hover:text-white" />
        </Carousel>
      </div>
    </div>
  );
}
