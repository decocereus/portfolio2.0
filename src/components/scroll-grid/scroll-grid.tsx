import Image from "next/image";
import React, { FC } from "react";

const GridImage: FC = () => {
  return (
    <Image
      src={"https://cdn.gamp.gg/landing/Welcome%20Page%20Illustration.svg"}
      alt="hi"
      width={100}
      height={100}
      id={"scroll-item"}
    />
  );
};

const ScrollGrid: FC = () => {
  return (
    <div className="content-wrap">
      <div id={"main-container"}>
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
                <GridImage />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="h-[80dvh]" id={"spacer"} />
    </div>
  );
};

export default ScrollGrid;
