package com.example.demo.controller.authentication;


import com.example.demo.repository.BoardRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
@RequestMapping("/board")
@CrossOrigin(origins = "http://localhost:8080", allowedHeaders = "*")
public class Board {

    @Autowired
    BoardRepository boardRepository;

    @PostMapping("/post")
    public ResponseEntity<Void> signup(@RequestBody Board board) throws Exception {
        log.info("Board Posting : " + board.toString());


        return new ResponseEntity<Void> (HttpStatus.OK);
    }

}
