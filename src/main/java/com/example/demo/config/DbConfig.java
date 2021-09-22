package com.example.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;

@Configuration
public class DbConfig {

    @Autowired
    DataSource dataSource;

    @Bean(name="jdbcTemp")
    public JdbcTemplate getJdbsTemplate()
    {
        return new JdbcTemplate(dataSource);

    }

}
