package ua.edu.lp.villagetour.domain.projections;

import org.springframework.data.rest.core.config.Projection;
import ua.edu.lp.villagetour.domain.House;
import ua.edu.lp.villagetour.domain.Room;

import java.util.Collection;

@Projection(name = "houseWithRooms" , types = House.class)
public interface HouseProjection {
    Long getId();
    String getName();
    String getType();
    String getDescription();
    String getAddress();
    String getPhoto();
    Collection<Room> getRooms();
}
