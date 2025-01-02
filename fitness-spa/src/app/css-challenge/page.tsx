export default function Dashboard() {
  return (
    <div className="grid bg-fadish-cyan min-h-screen p-6 grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-[120px]">
      {/* first row */}

      <section className="grid grid-cols-1 gap-8">
        <div
          className={`
            col-span-1  row-span-1
            p-4 flex items-center justify-center
            bg-white
            `}
        >
          <h3 className="text-lg text-black font-semibold">Widget 1</h3>
        </div>

        <div
          className={`
            col-span-1  row-span-2 h-[350px]
            p-4 flex items-center justify-center
            bg-white
            `}
        >
          <h3 className="text-lg text-black font-semibold">Widget 4</h3>
        </div>

        <div
          className={`
            flex lg:col-span-2   h-[200px]
            p-4 lg:hidden items-center justify-center
            bg-fadish-orange
            `}
        >
          <h3 className="text-lg font-semibold">Widget 3</h3>
        </div>
      </section>

      {/* second row */}
      <section className="grid grid-cols-1 gap-8">
        <div
          className={`
            col-span-1  row-span-2 h-[300px]
            p-4 flex items-center justify-center
            bg-white
            `}
        >
          <h3 className="text-lg text-black font-semibold">Widget 2</h3>
        </div>

        {/* Widget 4 - Tall left */}
        <div
          className={`
            col-span-1  row-span-1
            p-4 flex  items-center justify-center
            bg-white
            `}
        >
          <h3 className="text-lg text-black font-semibold">Widget 5</h3>
        </div>

        <div
          className={`
            flex lg:hidden lg:col-span-2   h-[200px]
            p-4  items-center justify-center
            bg-fadish-orange
            `}
        >
          <h3 className="text-lg font-semibold">Widget 6</h3>
        </div>
      </section>

      {/* third row */}
      <section className="grid grid-cols-1 gap-8">
        <div
          className={`
            hidden lg:col-span-2   h-[200px]
            p-4 lg:flex items-center justify-center
            bg-fadish-orange
            `}
        >
          <h3 className="text-lg font-semibold">Widget 3</h3>
        </div>

        <div
          className={`
            hidden lg:flex lg:col-span-2   h-[200px]
            p-4  items-center justify-center
            bg-fadish-orange
            `}
        >
          <h3 className="text-lg font-semibold">Widget 6</h3>
        </div>
      </section>
    </div>
  );
}
