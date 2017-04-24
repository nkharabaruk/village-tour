package ua.edu.lp.villagetour.domain;

import lombok.Data;
import ua.edu.lp.villagetour.domain.enums.HouseType;

import javax.persistence.*;
import java.util.Collection;

@Data
@Entity
public class House {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    HouseType type;
    String name;
    @ManyToOne
    Locality locality;
    String address;
    String description;
    @OneToMany(mappedBy = "house")
    Collection<Room> rooms;
    String photo;
}