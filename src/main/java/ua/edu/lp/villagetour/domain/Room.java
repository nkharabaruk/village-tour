package ua.edu.lp.villagetour.domain;

import lombok.Data;
import ua.edu.lp.villagetour.domain.enums.RoomType;

import javax.persistence.*;

@Data
@Entity
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    RoomType type;
    Integer placeCount;
    Double price;
    String photo;
    @ManyToOne
    House house;
}
