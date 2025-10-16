import React from "react";
import image2 from "./image-2.png";
import image from "./image.png";

interface Props {
  mode: "dark" | "light";
  className?: string;
}

export const HeroLayout = ({ mode, className }: Props): JSX.Element => {
  return (
    <div
      className={`w-[1440px] flex left-20 items-center h-[546px] justify-center relative ${
        mode === "dark" ? "top-[666px]" : "top-20"
      } ${className}`}
    >
      <div
        className={`w-[720px] flex self-stretch flex-col items-center gap-2.5 p-[120px] justify-center relative ${
          mode === "dark" ? "bg-colorsfontprimary" : "bg-white"
        }`}
      >
        <div className="w-full flex self-stretch flex-col items-center gap-6 flex-[0_0_auto] justify-center relative">
          <div className="w-full flex self-stretch flex-col items-center gap-4 flex-[0_0_auto] justify-center relative">
            <div
              className={`[font-family:'Inter-Bold',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-base font-bold text-center leading-6 relative ${
                mode === "dark"
                  ? "text-colorsbrandprimary-20"
                  : "text-colorsbrandprimary-60"
              }`}
            >
              {mode === "light" && <>Full stack</>}
              {mode === "dark" && <>Full-stack</>}
            </div>

            <p
              className={`[font-family:'Inter-SemiBold',Helvetica] self-stretch tracking-[0] text-2xl font-semibold text-center leading-[30px] relative ${
                mode === "dark" ? "text-white" : "text-colorsfontprimary"
              }`}
            >
              Build full-stack web and mobile apps in hours. Easy to start, easy
              to scale
            </p>

            <p
              className={`[font-family:'Inter-Regular',Helvetica] self-stretch tracking-[0.16px] text-base font-normal text-center leading-6 relative ${
                mode === "dark" ? "text-white" : "text-colorsfontsecondary"
              }`}
            >
              AWS Amplify is a complete solution that lets frontend web and
              mobile developers easily build, ship, and host full-stack
              applications on AWS, with the flexibility to leverage the breadth
              of AWS services as use cases evolve. No cloud expertise needed.
            </p>
          </div>

          {/* ボタンはまだ未定なのでコメントアウト中 */}
          {/* <Button
            className="!flex-[0_0_auto] !left-[unset] !top-[unset]"
            isDisabled={false}
            label="Get started"
            size="large"
            variation="primary"
          /> */}
        </div>
      </div>

      <div className="w-[720px] flex self-stretch flex-col items-center gap-2.5 justify-center relative">
        <img
          className={`grow flex-1 relative ${
            mode === "dark" ? "w-full" : "w-[720px]"
          } ${mode === "dark" ? "self-stretch" : ""}`}
          alt="Image"
          src={mode === "dark" ? image2 : image}
        />
      </div>
    </div>
  );
};