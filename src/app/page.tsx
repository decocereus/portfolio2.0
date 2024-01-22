export default function Home() {
  return (
    <main className="h-full w-[65%] flex items-center justify-center flex-col">
      <div className="w-full flex justify-between min-h-[15em] border border-solid border-white">
        <div className="w-[50%]">
          <div className="w-full">
            <p className="text-md py-1 pl-1">Hi, my name is</p>
            <p className="text-5xl">Amartya Singh</p>
            <p className="text-3xl pt-2 pl-1">I am a Full Stack Developer</p>
          </div>
          <div>
            <p>
              I am 23 years old. I am proficient in React, Next Js and Node Js.
            </p>
          </div>
        </div>
        <div className="w-[50%]">Image</div>
      </div>
    </main>
  );
}
