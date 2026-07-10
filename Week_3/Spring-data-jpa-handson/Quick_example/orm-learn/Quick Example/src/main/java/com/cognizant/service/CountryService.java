package com.cognizant.service;

import com.cognizant.exception.CountryNotFoundException;
import com.cognizant.model.Country;
import com.cognizant.repository.CountryRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    @Autowired
    private CountryRepository repository;

    @Transactional
    public List<Country> getAllCountries() {
        return repository.findAll();
    }

    @Transactional
    public Country findCountryByCode(String code)
            throws CountryNotFoundException {

        return repository.findById(code)
                .orElseThrow(() ->
                        new CountryNotFoundException("Country Not Found"));
    }

    @Transactional
    public void addCountry(Country country) {
        repository.save(country);
    }

    @Transactional
    public void updateCountry(String code, String name)
            throws CountryNotFoundException {

        Country country = findCountryByCode(code);

        country.setName(name);

        repository.save(country);
    }

    @Transactional
    public void deleteCountry(String code) {
        repository.deleteById(code);
    }
}