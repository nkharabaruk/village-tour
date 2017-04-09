package ua.edu.lp.villagetour.domain;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    String name;
    String description;
    @OneToOne
    Reservation reservation;
}
