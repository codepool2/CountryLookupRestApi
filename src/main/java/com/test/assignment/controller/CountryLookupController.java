package com.test.assignment.controller;

import com.test.assignment.service.CountryLookupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryLookupController {

    private final CountryLookupService countryLookupService;

    @Autowired
    public CountryLookupController(CountryLookupService countryLookupService) {
        this.countryLookupService = countryLookupService;
    }

    @GetMapping("/countryName/{ipAddress}")
    public String getCountryNameByIp(@PathVariable("ipAddress") String ipAddress) {

        return countryLookupService.getCountryNameByIp(ipAddress);

    }

    @GetMapping("/countryCode/{ipAddress}")
    public String getCountryCodeByIp(@PathVariable("ipAddress") String ipAddress) {

        return countryLookupService.getCountryCodeByIp(ipAddress);

    }
}
