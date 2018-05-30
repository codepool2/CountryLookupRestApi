package com.test.assignment.service;/* CountryLookupService.java */

/* Only works with GeoIP Country Edition */
/* For Geoip City Edition, use CityLookupTest.java */

import com.maxmind.geoip.LookupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CountryLookupService {

    private final LookupService lookupService;

    @Autowired
    public CountryLookupService(LookupService lookupService) {
        this.lookupService = lookupService;
    }

    public String getCountryNameByIp(String ipAddress) {

        return lookupService.getCountry(ipAddress).getName();
    }

    public String getCountryCodeByIp(String ipAddress) {

        return lookupService.getCountry(ipAddress).getCode();

    }
}
