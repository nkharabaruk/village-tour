package ua.edu.lp.villagetour.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import ua.edu.lp.villagetour.domain.Tour;

@Repository
public interface TourRepository extends PagingAndSortingRepository<Tour, Long> {
}
