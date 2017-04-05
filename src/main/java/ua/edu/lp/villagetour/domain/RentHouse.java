package ua.edu.lp.villagetour.domain;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class RentHouse {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @OneToOne
    House house;
    String description;
}
