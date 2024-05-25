"use client";
import Image from "next/image";
import { useState } from "react";

function Contack(props) {
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className="contack-button fixed right-10 top-8 px-6 py-3 w-max h-max bg-ownBlack rounded-full font-medium cursor-pointer z-[88888]"
        onClick={() => setShow(true)}
      >
        Contack Me
      </div>
      {show ? (
        <div
          className="fixed w-screen h-screen left-0 top-0 flex justify-center items-center"
          style={{ background: "rgba(14, 14, 15, 0.90)", zIndex: 99999 }}
        >
          <div
            className="contack-container bg-white h-max p-6 flex flex-col gap-6 items-end"
            style={{ width: 800 }}
          >
            <div
              className="contack-close w-max h-max cursor-pointer relative"
              onPointerMove={() => setHover(true)}
              onPointerLeave={() => setHover(false)}
              onClick={() => setShow(false)}
            >
              {hover && (
                <Image
                  src="/image/contack/close-bg.svg"
                  width={60}
                  height={60}
                  alt="contack-close-icon"
                  className="absolute top-0 left-0"
                />
              )}
              <Image
                src="/image/contack/close-icon.svg"
                width={60}
                height={60}
                alt="contack-close-icon"
                className="relative"
              />
            </div>
            <div
              className="contack-content w-full h-max p-6"
              style={{
                backgroundImage: "url('/image/contack/form/bg.svg')",
              }}
            >
              <form className="contack-form flex flex-col gap-6 text-lg text-ownBlack">
                <div
                  className="w-full h-max relative"
                  style={{
                    backgroundImage: "url('/image/contack/form/inputName.svg')",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Enter your name ..."
                    className="p-4 outline-none w-full bg-transparent"
                  />
                </div>
                <div
                  className="w-full h-max relative"
                  style={{
                    backgroundImage:
                      "url('/image/contack/form/inputEmail.svg')",
                  }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email ..."
                    className="p-4 outline-none w-full bg-transparent"
                  />
                </div>
                <div
                  className="w-full h-max relative"
                  style={{
                    height: 172,
                    backgroundImage:
                      "url('/image/contack/form/inputContent.svg')",
                  }}
                >
                  <textarea
                    rows={5}
                    placeholder="Say something ..."
                    className="p-4 outline-none w-full bg-transparent resize-none"
                  />
                </div>
                <div className="flex gap-6 mt-6">
                  <div
                    className="w-max h-max font-sans font-medium relative"
                    style={{
                      backgroundImage: "url('/image/contack/form/reset.svg')",
                    }}
                  >
                    <button style={{ width: 180, height: 80 }}>重置</button>
                  </div>
                  <div
                    className="w-max h-max font-sans font-medium relative"
                    style={{
                      backgroundImage: "url('/image/contack/form/submit.svg')",
                    }}
                  >
                    <button style={{ width: 500, height: 80 }}>提交</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="contack-other w-full h-max flex flex-col items-center p-6 gap-6 relative">
              <div
                className="absolute bg-cover bottom-0"
                style={{
                  width: 784,
                  height: 188,
                  backgroundImage: "url('/image/contack/other/bg.svg')",
                }}
              />
              <div
                className="bg-cover relative"
                style={{
                  width: 58,
                  height: 32,
                  backgroundImage: "url('/image/contack/other/or.png')",
                }}
              />
              <div className="w-full h-max flex gap-6 relative">
                <div
                  className="flex-1 bg-cover cursor-pointer"
                  style={{
                    height: 72,
                    backgroundImage: "url('/image/contack/other/wechat.png')",
                  }}
                />
                <div
                  className="flex-1 bg-cover cursor-pointer"
                  style={{
                    height: 72,
                    backgroundImage: "url('/image/contack/other/email.png')",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Contack;
