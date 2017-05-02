package ua.edu.lp.villagetour.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.Collection;

@Data
@Entity
public class Village {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    String name;
    @OneToMany
    Collection<Place> places;
}
