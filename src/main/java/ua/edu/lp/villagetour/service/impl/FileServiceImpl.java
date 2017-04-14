package ua.edu.lp.villagetour.service.impl;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import ua.edu.lp.villagetour.service.FileService;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

@Service
public class FileServiceImpl implements FileService {

    @Value("${local.files.dir}")
    private String filesDirPath;

    @Override
    public byte[] getFile(String relativePath) throws IOException {
        try (InputStream inputStream = new FileInputStream(filesDirPath + relativePath)) {
            byte[] fileBytes = new byte[inputStream.available()];
            inputStream.read(fileBytes);
            return fileBytes;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
