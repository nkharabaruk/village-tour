package ua.edu.lp.villagetour.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ua.edu.lp.villagetour.domain.House;
import ua.edu.lp.villagetour.domain.Place;
import ua.edu.lp.villagetour.domain.enums.HouseType;

import java.util.Collection;

@Repository
public interface HouseRepository extends PagingAndSortingRepository<House, Long> {
    Collection<House> findByTypeInOrNameOrVillageName(@Param(value = "types") HouseType[] types,
                                                  @Param(value = "name") String name,
                                                  @Param(value = "villageName") String villageName);
}
