import React from "react";
import imgSection1 from "../assets/img/map.png";
import imgSection2 from "../assets/img/Ran.png";

function About() {
  return (
    <div className="section-body">
      <div className="section-maps">
        <div className="bg-section p-4 rounded-5">
          <img
            src={imgSection1}
            alt="Maps Sudirman Run 2023"
            className="section-img"
          />
          <h1 className="text-white tag-section-maps">10K FUN RUN</h1>
          <p className="px-5 text-white">
            Dimulai pukul 6 pagi, nikmati pemandangan kota di pagi hari dimulai
            dari Bundaran HI hingga Patung Pemuda Membangun di Senayan lalu
            kembali lagi ke Bundaran HI!
          </p>
        </div>
        <div className="section-event">
          <div className="bg-section2 rounded-5">
            <h1 className="text-white fw-bold fonts-1">GRATIS DAN BERHADIAH</h1>
            <p className="banner-text1">
              Pendaftaran gratis! Ajak keluarga anda dan menangkan hadiah total
              puluhan juta rupiah doorprize menarik!
            </p>
          </div>
          <div className="bg-section2 rounded-5">
            <h1 className="fonts-1 text-white fw-bold">50+ TENANT BAZZAR</h1>
            <p className="banner-text1">
              Dapatkan promo menarik pada booth-booth tenant bazzar Sudirman Run
              2023 mulai dari F&B hingga fashion
            </p>
          </div>
          <div className="bg-section2 rounded-5 d-flex section-konser">
            <img src={imgSection2} alt="" />
            <div>
              <h1 className="fonts-2 text-white fw-bold">
                SPECIAL PERFORMANCE
              </h1>
              <p className="banner-text1">
                Saksikan penampilan dari RAN, Ayu Ting Ting, Diskoria, serta
                hiburan lainnya!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center btn-about">
        <button className="btn-about2 fw-bold text-white">
          DAFTAR SEKARANG
        </button>
      </div>
    </div>
  );
}

export default About;
