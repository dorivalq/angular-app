package com.silva.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
@RestController
@CrossOrigin()
public class Application {
    static Map<Integer, byte[]> imageDB = new HashMap<>();

    @RequestMapping("/")
    public String home() {
        return "Hello Docker World.";
    }

    @RequestMapping(value = "/image" , produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
    public byte[] image() throws IOException {
        BufferedImage bim = ImageIO.read(new File("/media/dorival/2ADCC067DCC02EBF/dev/torq/devops/aws/spring-boot-docker/src/main/java/com/silva/app/youtube-img.jpeg"));
        ByteArrayOutputStream bo = new ByteArrayOutputStream();
        ImageIO.write(bim, "jpeg", bo);
        return  bo.toByteArray();
    }

    @RequestMapping(value = "/image/{id}" , produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
    public byte[] imageDB(@PathVariable Integer id) throws IOException {
        ByteArrayInputStream bis = new ByteArrayInputStream(imageDB.get(id));
        BufferedImage bim = ImageIO.read(bis);

        ByteArrayOutputStream bo = new ByteArrayOutputStream();
        ImageIO.write(bim, "jpeg", bo);
        return  bo.toByteArray();
    }

//    @CrossOrigin(origins ="http://localhost" )
    @RequestMapping(method = RequestMethod.POST, value = "/image/{id}")
    public ResponseEntity saveImage(@RequestBody byte [] bytes, @PathVariable Integer id) throws IOException {
        imageDB.put(id,bytes);

        FileOutputStream fos = new FileOutputStream("new-image.jpg");

        fos.write(bytes);
        return ResponseEntity.ok().build();
    }
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
