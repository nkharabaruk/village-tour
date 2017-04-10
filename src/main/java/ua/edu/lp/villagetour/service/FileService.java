package ua.edu.lp.villagetour.service;

import java.io.IOException;

public interface FileService {

    byte[] getFile(String path) throws IOException;
}
