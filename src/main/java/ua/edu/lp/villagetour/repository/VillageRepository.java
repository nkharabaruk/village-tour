package ua.edu.lp.villagetour.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import ua.edu.lp.villagetour.domain.Village;

@Repository
public interface VillageRepository extends PagingAndSortingRepository<Village, Long> {
}
