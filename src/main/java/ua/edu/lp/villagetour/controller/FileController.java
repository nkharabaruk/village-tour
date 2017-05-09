package ua.edu.lp.villagetour.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.HandlerMapping;
import ua.edu.lp.villagetour.service.FileService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class FileController {

    private FileService fileService;

    @Autowired
    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @GetMapping("/files/**")
    public void getFile(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String path = request.getAttribute(HandlerMapping.PATH_WITHIN_HANDLER_MAPPING_ATTRIBUTE).toString().substring("/files/".length());
        byte[] imageBytes = fileService.getFile(path);
        response.setContentLength(imageBytes.length);
        response.getOutputStream().write(imageBytes);
    }
}
