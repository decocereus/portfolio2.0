import Image from "next/image";
import React, { FC } from "react";

const GridImage = ({ customClass }: { customClass?: string }) => {
  return (
    <Image
      src={"https://cdn.gamp.gg/landing/Welcome%20Page%20Illustration.svg"}
      alt="hi"
      width={50}
      height={50}
      id={"scroll-item"}
      className={`${customClass ?? ""} h-full`}
      style={{
        maxWidth: "1000%",
      }}
    />
  );
};

const ScrollGrid: FC = () => {
  return (
    <div className="content-wrap">
      <main id={"main-container"}>
        <section id={"special-scroll"}>
          <div className="main-content">
            <div className="scroll-grid">
              <div className="scroll-item-layer">
                <div>
                  <GridImage />
                </div>
                <div>
                  <GridImage />
                </div>
                <div>
                  <GridImage />
                </div>
                <div>
                  <GridImage />
                </div>
                <div>
                  <GridImage />
                </div>
                <div>
                  <GridImage />
                </div>
              </div>
              <div className="scroll-item-layer">
                <div>
                  <GridImage />
                </div>
                <div>
                  <GridImage />
                </div>
                <div>
                  <GridImage />
                </div>
                <div>
                  <GridImage />
                </div>
                <div>
                  <GridImage />
                </div>
                <div>
                  <GridImage />
                </div>
              </div>
              <div className="scroll-item-layer">
                <div>
                  <GridImage />
                </div>
                <div>
                  <GridImage />
                </div>
              </div>
              <div className="image-scaler">
                <GridImage customClass="special-element w-[100%]" />
              </div>
            </div>
          </div>
        </section>
        <section id={"spacer"} />
      </main>
    </div>
  );
};

export default ScrollGrid;
