package com.silva.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.HashMap;
import java.util.Map;

@RestController
//@CrossOrigin(origins ="http://localhost:4200")
@CrossOrigin(origins ="http://localhost")
public class RegistrationController {

//    static Map<Integer, byte[]> imageDB = new HashMap<>();
//
//    @RequestMapping("/")
//    public String home() {
//        return "Hello Docker World.";
//    }
//
//    @RequestMapping(value = "/image" , produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
//    public byte[] image() throws IOException {
//        BufferedImage bim = ImageIO.read(new File("/media/dorival/2ADCC067DCC02EBF/dev/torq/devops/aws/spring-boot-docker/src/main/java/hello/youtube-img.jpeg"));
//        ByteArrayOutputStream bo = new ByteArrayOutputStream();
//        ImageIO.write(bim, "jpeg", bo);
//        return  bo.toByteArray();
//    }
//
//    @RequestMapping(value = "/image-db/{id}" , produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
//    public byte[] imageDB(Integer id) throws IOException {
//        ByteArrayInputStream bis = new ByteArrayInputStream(imageDB.get(id));
//        BufferedImage bim = ImageIO.read(bis);
//
//        ByteArrayOutputStream bo = new ByteArrayOutputStream();
//        ImageIO.write(bim, "jpeg", bo);
//        return  bo.toByteArray();
//    }
//
//    @CrossOrigin(origins ="http://localhost:4200" )
//    @RequestMapping(method = RequestMethod.POST, value = "/save-image/{id}")
//    public ResponseEntity saveImage(@RequestBody byte [] bytes, @PathVariable Integer id) throws IOException {
//        imageDB.put(id,bytes);
//
//        FileOutputStream fos = new FileOutputStream("new-image.jpg");
//
//        fos.write(bytes);
//
//        return ResponseEntity.ok().build();
//    }

}
