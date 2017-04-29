package ua.edu.lp.villagetour.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import ua.edu.lp.villagetour.domain.House;
import ua.edu.lp.villagetour.domain.Place;
import ua.edu.lp.villagetour.domain.Reservation;
import ua.edu.lp.villagetour.domain.Room;

@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.getCorsRegistry().addMapping("/rest/**");
        config.exposeIdsFor(Reservation.class, House.class, Room.class, Place.class);
    }
}