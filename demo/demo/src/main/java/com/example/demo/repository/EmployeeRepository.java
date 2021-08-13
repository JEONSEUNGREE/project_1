package com.example.demo.repository;

import com.example.demo.entity.Employee;
import com.example.demo.repository.receive.EmployeeMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Query("select e from Employee e where e.email = :email")
    Optional<Employee> findByEmail(String email);

    @Query("select m from Employee m where m.email = :email")
    Employee findInfo(String email);


}
