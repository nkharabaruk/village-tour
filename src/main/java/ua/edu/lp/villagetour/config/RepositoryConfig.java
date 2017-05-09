package ua.edu.lp.villagetour.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.http.HttpMethod;
import ua.edu.lp.villagetour.domain.House;
import ua.edu.lp.villagetour.domain.Place;
import ua.edu.lp.villagetour.domain.Reservation;
import ua.edu.lp.villagetour.domain.Room;

@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.getCorsRegistry().addMapping("/rest/**")
                .allowedMethods(
                        HttpMethod.OPTIONS.name(),
                        HttpMethod.GET.name(),
                        HttpMethod.PUT.name(),
                        HttpMethod.POST.name(),
                        HttpMethod.DELETE.name());
        config.exposeIdsFor(Reservation.class, House.class, Room.class, Place.class);
    }
}