package com.example.demo.controller.authentication;


import com.example.demo.controller.authentication.session.UserInfo;
import com.example.demo.entity.Employee;
import com.example.demo.repository.*;
import com.example.demo.repository.receive.DeleteEmail;
import com.example.demo.repository.receive.EmployeeReceive;
import com.example.demo.service.CalendarService;
import com.example.demo.service.EmployeeService;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;

@Slf4j
@Controller
@RequestMapping("/authenticate")
@CrossOrigin(origins = "http://localhost:8080", allowedHeaders = "*")
public class Authentication {

    @Autowired
    EmployeeService employeeService;

    @Autowired
    AuthRepository authRepository;

    @Autowired
    CalendarRepository calendarRepository;

    @Autowired
    ScheduleRepository scheduleRepository;


    private HttpSession session;

    private UserInfo info;

    @PostMapping("/signup")
    public ResponseEntity<Void> signup(@RequestBody EmployeeReceive employeeReceive) throws Exception {
        log.info("EmployeeReceive" + employeeReceive.toString());

        employeeService.signup(employeeReceive);

        return new ResponseEntity<Void> (HttpStatus.OK);
    }

    @PostMapping("/signin")
    public ResponseEntity<UserInfo> jpaLogin(
            @RequestBody EmployeeReceive employeeReceive,
            HttpServletRequest request
    ) throws Exception {

        log.info("employeeReceive" + employeeReceive.toString());

        Integer isSuccess = employeeService.signin(employeeReceive);

        switch (isSuccess) {
            case 1:
            info.setErrorMessage(1);
                log.info("Login Failure");
                break;

            case 2:
            info.setErrorMessage(2);
                log.info("Login Failure");
                break;

                //보낼정보가 많아서 따로 만들필요가 없었던것같다 나중에 수정
            case 3:
                info = new UserInfo();
                Employee empInfo = employeeService.findInfo(employeeReceive.getEmail());
                info.setErrorMessage(3);
                log.info("Login Success");
                info.setEmail(empInfo.getEmail());
                info.setName(empInfo.getName());
                info.setTeam(empInfo.getTeam());
                
                Optional<Employee> empauth = employeeService.findByAuth(empInfo.getEmployeeNo());
                Employee emp = empauth.get();

                info.setAuth(emp.getAuthList().get(0).getAuth());
                log.info("auth" + info.getAuth());

               log.info("Session Info: " + info);
                session = request.getSession();
                session.setAttribute("emp", info);
                break;
        }
        return new ResponseEntity<UserInfo>(info, HttpStatus.OK);
    }

    @PostMapping("/logoutSession")
    public ResponseEntity<Optional> removeSession(HttpServletRequest request) throws Exception {

        Optional mustNull = null;

        log.info("Logout()" + mustNull);

        session.invalidate();

        return new ResponseEntity<Optional>(mustNull, HttpStatus.OK);
    }

    @PostMapping("/delete-account")
    public ResponseEntity<DeleteEmail> deleteEmployee(@RequestBody DeleteEmail deleteEmail) throws Exception {

        log.info("log" + deleteEmail.toString());

        Employee employeeEntity =  employeeService.findInfo(deleteEmail.getEmail());

        authRepository.deleteById(employeeEntity.getEmployeeNo());

        employeeService.deleteEmployee(employeeEntity.getEmployeeNo());

        return new ResponseEntity<DeleteEmail>(HttpStatus.OK);
    }
}
