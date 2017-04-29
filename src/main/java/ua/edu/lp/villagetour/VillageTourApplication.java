package ua.edu.lp.villagetour;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import ua.edu.lp.villagetour.domain.Reservation;
import ua.edu.lp.villagetour.repository.ReservationRepository;
import ua.edu.lp.villagetour.repository.RoomRepository;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Arrays;

@SpringBootApplication
public class VillageTourApplication {

	public static void main(String[] args) {
		SpringApplication.run(VillageTourApplication.class, args);
	}
}
