package com.cognizant.ormlearn;

import com.cognizant.exception.CountryNotFoundException;
import com.cognizant.model.Country;
import com.cognizant.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.List;

@SpringBootApplication
@ComponentScan(basePackages = "com.cognizant")
@EnableJpaRepositories(basePackages = "com.cognizant.repository")
@EntityScan(basePackages = "com.cognizant.model")
public class OrmLearnApplication implements CommandLineRunner {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(OrmLearnApplication.class);

    @Autowired
    private CountryService countryService;

    public static void main(String[] args) {
        SpringApplication.run(OrmLearnApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        LOGGER.info("Inside Main");

        List<Country> countries = countryService.getAllCountries();
        countries.forEach(System.out::println);

        System.out.println(countryService.findCountryByCode("IN"));

        Country country = new Country("NP", "Nepal");
        countryService.addCountry(country);

        System.out.println(countryService.findCountryByCode("NP"));

        countryService.updateCountry("NP",
                "Federal Democratic Republic of Nepal");

        System.out.println(countryService.findCountryByCode("NP"));

        countryService.deleteCountry("NP");

        System.out.println("Country Deleted");
    }
}