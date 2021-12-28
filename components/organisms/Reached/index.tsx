import ResponsiveLine from "../../atoms/ResponsiveLine";
import ReachedItem from "../../molecules/ReachedItem";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem text="290M+" subText="Players Top Up" />
          <ResponsiveLine />
          <ReachedItem text="12.500" subText="Games Available" />
          <ResponsiveLine />
          <ReachedItem text="99,9%" subText="Happy Players" />
          <ResponsiveLine />
          <ReachedItem text="4.7" subText="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
