package com.example.demo.controller.authentication;


import com.example.demo.repository.receive.EmployeeReceive;
import com.example.demo.service.EmployeeService;
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
@RequestMapping("/authenticate")
@CrossOrigin(origins = "http://localhost:8080", allowedHeaders = "*")
public class authentication {

    @Autowired
    EmployeeService employeeService;

    @PostMapping("/signup")
    public ResponseEntity<Void> signup(@RequestBody EmployeeReceive employeeReceive) throws Exception {
        log.info("EmployeeReceive" + employeeReceive.toString());

        employeeService.signup(employeeReceive);

        return new ResponseEntity<Void> (HttpStatus.OK);
    }



}
