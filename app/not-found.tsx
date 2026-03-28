export default function NotFound() {
  return (
    <div className="fixed top-16 left-0 lg:left-64 right-0 bottom-0 bg-black flex items-center justify-center text-white z-30">
      <div className="flex items-center">
        <h1 className="text-3xl md:text-4xl font-semibold border-r border-slate-700 pr-6 mr-6 tracking-wider">
          404
        </h1>
        <h2 className="text-sm font-normal tracking-wide text-slate-300">
          This page could not be found.
        </h2>
      </div>
    </div>
  );
}