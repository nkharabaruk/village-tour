package ua.edu.lp.villagetour.domain;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Collection;

@Data
@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    LocalDate operationDate;
    @OneToMany
    Collection<Room> room;
    LocalDate checkInDate;
    LocalDate checkOutDate;
    Integer personCount;
    String description;

    Long getDayCount() {
        return checkInDate.until(checkOutDate, ChronoUnit.DAYS);
    }
}
