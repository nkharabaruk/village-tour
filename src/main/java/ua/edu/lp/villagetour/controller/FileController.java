package ua.edu.lp.villagetour.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.HandlerMapping;
import ua.edu.lp.villagetour.VillageTourApplication;
import ua.edu.lp.villagetour.domain.Reservation;
import ua.edu.lp.villagetour.repository.ReservationRepository;
import ua.edu.lp.villagetour.repository.RoomRepository;
import ua.edu.lp.villagetour.service.FileService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.Arrays;

@Controller
public class FileController {

    private FileService fileService;

    @Autowired
    private RoomRepository roomRepository;
    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @GetMapping("/files/**")
    public void getFile(HttpServletRequest request, HttpServletResponse response) throws IOException {
        this.addReservation();
        String path = request.getAttribute(HandlerMapping.PATH_WITHIN_HANDLER_MAPPING_ATTRIBUTE).toString().substring("/files/".length());
        byte[] imageBytes = fileService.getFile(path);
        response.setContentLength(imageBytes.length);
        response.getOutputStream().write(imageBytes);
    }

    public void addReservation() {
        Reservation reservation = new Reservation();
        reservation.setRoom(Arrays.asList(roomRepository.findAll().iterator().next()));
        reservation.setPersonCount(2);
        reservation.setCheckInDate(LocalDate.now());
        reservation.setCheckOutDate(LocalDate.now().plus(2, ChronoUnit.DAYS));
        reservation.setDescription("asdsafdg");
        reservationRepository.save(reservation);
    }
}
