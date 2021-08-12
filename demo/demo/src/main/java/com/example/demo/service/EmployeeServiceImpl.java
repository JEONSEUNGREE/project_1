package com.example.demo.service;


import com.example.demo.entity.Auth;
import com.example.demo.entity.Employee;
import com.example.demo.repository.EmployeeAuth;
import com.example.demo.repository.EmployeeRepository;
import com.example.demo.repository.receive.EmployeeReceive;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private EmployeeAuth employeeAuth;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void signup(EmployeeReceive employeeReceive) throws Exception {
        String encodedPassword = passwordEncoder.encode(employeeReceive.getPassword());
        employeeReceive.setPassword(encodedPassword);

        Auth authEntity = new Auth(employeeReceive.getAuth());
        Employee employeeEntity = new Employee(
                employeeReceive.getEmail(), employeeReceive.getPassword(), employeeReceive.getPhoneNumber(), employeeReceive.getTeam());
        employeeEntity.addAuth(authEntity);

        employeeRepository.save(employeeEntity);

    }
}
