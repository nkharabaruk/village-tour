package ua.edu.lp.villagetour.domain;

import lombok.Data;
import ua.edu.lp.villagetour.domain.enums.RoomType;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
}
