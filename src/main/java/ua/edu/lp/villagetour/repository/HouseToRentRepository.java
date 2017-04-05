package ua.edu.lp.villagetour.repository;

import org.springframework.data.repository.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import ua.edu.lp.villagetour.domain.RentHouse;

@RepositoryRestResource
public interface HouseToRentRepository extends Repository<RentHouse, Long> {
}
