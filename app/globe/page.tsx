import MapBoxGlobe from "@/components/mapbox-globe";

const GlobePage = () => {
  return (
    <div>
      <h1 className="text-[steelblue] font-bold font-[Tangerine] text-center text-4xl lg:text-8xl my-16">
        Everything is Connected!
      </h1>
      <MapBoxGlobe />
    </div>
  );
};

export default GlobePage;
