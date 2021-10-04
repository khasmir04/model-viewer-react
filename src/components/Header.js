export default function Header() {
  return (
    <>
      <div className="relative">
        <img src="/assets/img/logo.png" alt="Terp Logo" className="max-h-10 md:max-h-20 absolute top-5 md:top-0"></img>
        <div className="w-full h-20 bg-gray-400 flex items-center justify-center">
          <h1 className="section-title text-lg md:text-3xl">TERP Content 3D Model Viewer</h1>
        </div>
      </div>
    </>
  );
}