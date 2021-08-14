package com.example.demo.service;

import com.example.demo.entity.Employee;
import com.example.demo.repository.receive.EmployeeReceive;

import java.util.Optional;

public interface EmployeeService {

    public void signup(EmployeeReceive employeeReceive) throws Exception;

    public Integer signin(EmployeeReceive employeeReceive) throws Exception;

    public Optional<Employee> findByAuth(Long employeeNo);

    public Employee findInfo(String email) throws Exception;



}
