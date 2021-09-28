export default function Header() {
  return (
    <>
      <div className="relative">
        <img src="/assets/img/logo.png" alt="Terp Logo" className="max-h-20 absolute"></img>
        <div className="w-full h-20 bg-gray-400 flex items-center justify-center">
          <h1 className="section-title text-3xl">TERP Content 3D Model Viewer</h1>
        </div>
      </div>

    </>
  );
}