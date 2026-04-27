import Hero from '../../components/hero/Hero';
import Filter from '../../components/filter/Filter';
import Tours from '../../components/Tours/Tours';

function HomePage({ filteredTours, onFilterChange }) {
  return (
    <>
      <Hero />
      <Filter onFilterChange={onFilterChange} />
      <Tours items={filteredTours} />
    </>
  );
}

export default HomePage;