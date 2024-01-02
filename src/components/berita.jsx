import React, { useState } from "react";
import { CartBerita, CartTime } from "./cartBerita";

import berita1 from "../assets/img/thumbnail-artikel-1.png";
import berita2 from "../assets/img/thumbnail-artikel-2.png";
import berita3 from "../assets/img/thumbnail-artikel-3.png";
import berita4 from "../assets/img/thumbnail-artikel-4.png";
import berita5 from "../assets/img/thumbnail-artikel-5.png";
import berita6 from "../assets/img/thumbnail-artikel-6.png";
import BgBerita from "../assets/img/Berita-bg.jpg";

const Berita = () => {
  const [selectedCategory, setSelectedCategory] = useState("artikel");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="berita-section">
      <img
        src={BgBerita}
        alt=""
        className="w-100 z-n1 position-absolute top-50 start-50 translate-middle"
      />
      <div
        className={`berita-container mx-auto  ${selectedCategory}-container`}
      >
        <h5 className="berita-title">ARTIKEL TERKAIT</h5>
        <div className="berita-konten">
          <div className="justify-content-center d-flex">
            <div className="rounded-pill navmenu-berita">
              <a
                href="#"
                onClick={() => handleCategoryChange("artikel")}
                className={selectedCategory === "artikel" ? "active" : ""}
              >
                Artikel
              </a>
              <a
                href="#"
                onClick={() => handleCategoryChange("foto")}
                className={selectedCategory === "foto" ? "active" : ""}
              >
                Foto
              </a>
              <a
                href="#"
                onClick={() => handleCategoryChange("video")}
                className={selectedCategory === "video" ? "active" : ""}
              >
                Video
              </a>
            </div>
          </div>
          <div
            className={`berita-content d-flex flex-wrap mt-2  ${selectedCategory}-content`}
          >
            {selectedCategory === "artikel" && (
              // Konten artikel
              <>
                <div className="col-md-4 mb-3">
                  <CartBerita
                    src={berita1}
                    title="Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme Beberkan Prosesnya"
                    description="Sabtu, 25 Nov 2023 20:00 WIB"
                    className="card-text-artikel"
                    classNameTitle="card-title-artikel"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <CartBerita
                    src={berita2}
                    title="Edukasi Lingkungan Hidup Bonus Sehat di 'Misi Lestari 2023: See Nature"
                    description="Selasa, 28 Nov 2023 07:42 WIB"
                    className="card-text-artikel"
                    classNameTitle="card-title-artikel"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <CartBerita
                    src={berita3}
                    title="Gokil! Puluhan Ribu Orang Ramaikan Pertamina Eco RunFest 2023"
                    description="Selasa, 28 Nov 2023 07:42 WIB"
                    className="card-text-artikel"
                    classNameTitle="card-title-artikel"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <CartBerita
                    src={berita4}
                    title="Kelar Lari di CT Arsa Charity Fun Run, 'Recharge' Energi Nonton Maliq & D'essentials"
                    description="Sabtu, 18 Nov 2023 17:39 WIB"
                    className="card-text-artikel"
                    classNameTitle="card-title-artikel"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <CartBerita
                    src={berita5}
                    title="CT Arsa Charity Fun Run 2023 Bertabur Emas dan penuh kejutan"
                    description="Kamis, 16 Nov 2023 16:34 WIB"
                    className="card-text-artikel"
                    classNameTitle="card-title-artikel"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <CartBerita
                    src={berita6}
                    title="BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta"
                    description="Minggu, 12 Nov 2023 11:55 WIB"
                    className="card-text-artikel"
                    classNameTitle="card-title-artikel"
                  />
                </div>
              </>
            )}
            {selectedCategory === "foto" && (
              // Konten foto
              <>
                <div className="col-md-4 mb-3">
                  <CartTime
                    src={berita1}
                    timestampIcon={CameraIcon}
                    timestampText="5 FOTO"
                    className="card-text-timestamp"
                    classNameTitle="card-title-timestamp"
                    title="Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme Beberkan Prosesnya"
                    description="Sabtu, 25 Nov 2023 20:00 WIB"
                    onClick={() => console.log("Kartu diklik")}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <CartTime
                    src={berita2}
                    title="Edukasi Lingkungan Hidup Bonus Sehat di 'Misi Lestari 2023: See Nature"
                    description="Selasa, 28 Nov 2023 07:42 WIB"
                    timestampIcon={CameraIcon}
                    timestampText="5 FOTO"
                    onClick={() => console.log("Kartu diklik")}
                    className="card-text-timestamp"
                    classNameTitle="card-title-timestamp"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <CartTime
                    src={berita3}
                    title="Edukasi Lingkungan Hidup Bonus Sehat di 'Misi Lestari 2023: See Nature"
                    description="Selasa, 28 Nov 2023 07:42 WIB"
                    timestampIcon={CameraIcon}
                    timestampText="5 FOTO"
                    onClick={() => console.log("Kartu diklik")}
                    className="card-text-timestamp"
                    classNameTitle="card-title-timestamp"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <CartTime
                    src={berita4}
                    title="Kelar Lari di CT Arsa Charity Fun Run, 'Recharge' Energi Nonton Maliq & D'essentials"
                    description="Sabtu, 18 Nov 2023 17:39 WIB"
                    timestampIcon={CameraIcon}
                    timestampText="5 FOTO"
                    onClick={() => console.log("Kartu diklik")}
                    className="card-text-timestamp"
                    classNameTitle="card-title-timestamp"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <CartTime
                    src={berita5}
                    title="CT Arsa Charity Fun Run 2023 Bertabur Emas dan penuh kejutan"
                    description="Kamis, 16 Nov 2023 16:34 WIB"
                    timestampIcon={CameraIcon}
                    timestampText="5 FOTO"
                    onClick={() => console.log("Kartu diklik")}
                    className="card-text-timestamp"
                    classNameTitle="card-title-timestamp"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <CartTime
                    src={berita6}
                    title="BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta"
                    description="Minggu, 12 Nov 2023 11:55 WIB"
                    timestampIcon={CameraIcon}
                    timestampText="5 FOTO"
                    onClick={() => console.log("Kartu diklik")}
                    className="card-text-timestamp"
                    classNameTitle="card-title-timestamp"
                  />
                </div>
              </>
            )}
            {selectedCategory === "video" && (
              // Konten video
              <>
                <div className="col-md-4 mb-3">
                  <CartTime
                    src={berita1}
                    title="Sukses Finish Marathon di Jakarta, Osha Penyandang Autisme Beberkan Prosesnya"
                    description="Sabtu, 25 Nov 2023 20:00 WIB"
                    timestampIcon={PlayIcon}
                    timestampText="01:45"
                    onClick={() => console.log("Kartu diklik")}
                    className="card-text-timestamp"
                    classNameTitle="card-title-timestamp"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <CartTime
                    src={berita2}
                    title="Edukasi Lingkungan Hidup Bonus Sehat di 'Misi Lestari 2023: See Nature"
                    description="Selasa, 28 Nov 2023 07:42 WIB"
                    timestampIcon={PlayIcon}
                    timestampText="01:45"
                    onClick={() => console.log("Kartu diklik")}
                    className="card-text-timestamp"
                    classNameTitle="card-title-timestamp"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <CartTime
                    src={berita3}
                    title="Edukasi Lingkungan Hidup Bonus Sehat di 'Misi Lestari 2023: See Nature"
                    description="Selasa, 28 Nov 2023 07:42 WIB"
                    timestampIcon={PlayIcon}
                    timestampText="01:45"
                    onClick={() => console.log("Kartu diklik")}
                    className="card-text-timestamp"
                    classNameTitle="card-title-timestamp"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <CartTime
                    src={berita4}
                    title="Kelar Lari di CT Arsa Charity Fun Run, 'Recharge' Energi Nonton Maliq & D'essentials"
                    description="Sabtu, 18 Nov 2023 17:39 WIB"
                    timestampIcon={PlayIcon}
                    timestampText="01:45"
                    onClick={() => console.log("Kartu diklik")}
                    className="card-text-timestamp"
                    classNameTitle="card-title-timestamp"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <CartTime
                    src={berita5}
                    title="CT Arsa Charity Fun Run 2023 Bertabur Emas dan penuh kejutan"
                    description="Kamis, 16 Nov 2023 16:34 WIB"
                    timestampIcon={PlayIcon}
                    timestampText="01:45"
                    onClick={() => console.log("Kartu diklik")}
                    className="card-text-timestamp"
                    classNameTitle="card-title-timestamp"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <CartTime
                    src={berita6}
                    title="BTN Jakarta Run 2023 Dorong dan Geliatkan Sport Tourism Jakarta"
                    description="Minggu, 12 Nov 2023 11:55 WIB"
                    timestampIcon={PlayIcon}
                    timestampText="01:45"
                    onClick={() => console.log("Kartu diklik")}
                    className="card-text-timestamp"
                    classNameTitle="card-title-timestamp"
                  />
                </div>
              </>
            )}
          </div>
        </div>
        <div className=" d-flex justify-content-center">
          <div className="btn-berita">
            <a
              href="https://www.detik.com/search/searchall?query=fun+run&siteid=2"
              target="_blank"
              className="btn-berita-icon"
            >
              Lihat Lebih Banyak
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berita;
