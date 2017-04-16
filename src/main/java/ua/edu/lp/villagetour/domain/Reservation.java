package ua.edu.lp.villagetour.domain;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    LocalDate operationDate;
    @OneToOne
    Room room;
    LocalDate checkInDate;
    LocalDate checkOutDate;
    Integer personCount;
    String description;
}
