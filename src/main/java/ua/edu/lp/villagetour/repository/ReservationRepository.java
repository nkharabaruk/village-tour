package ua.edu.lp.villagetour.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import ua.edu.lp.villagetour.domain.Reservation;

@Repository
public interface ReservationRepository extends PagingAndSortingRepository<Reservation, Long> {
    @Override
    void deleteAll();
}
