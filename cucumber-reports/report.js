$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CountryLookup.feature");
formatter.feature({
  "line": 1,
  "name": "Testing a CountryLookup API",
  "description": "Users should be able to submit GET requests to a web service,\r\nand should get CountryName and CountryCode associated with the given IpAddress",
  "id": "testing-a-countrylookup-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Getting CountryName and CountryCode associated the given IpAddress",
  "description": "",
  "id": "testing-a-countrylookup-api;getting-countryname-and-countrycode-associated-the-given-ipaddress",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "The user gives the following \"\u003cIpAddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user should get the country name as \"\u003cCountryName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user should get the country code as \"\u003cCountryCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "testing-a-countrylookup-api;getting-countryname-and-countrycode-associated-the-given-ipaddress;",
  "rows": [
    {
      "cells": [
        "IpAddress",
        "CountryName",
        "CountryCode"
      ],
      "line": 11,
      "id": "testing-a-countrylookup-api;getting-countryname-and-countrycode-associated-the-given-ipaddress;;1"
    },
    {
      "cells": [
        "151.38.39.114",
        "Italy",
        "IT"
      ],
      "line": 12,
      "id": "testing-a-countrylookup-api;getting-countryname-and-countrycode-associated-the-given-ipaddress;;2"
    },
    {
      "cells": [
        "12.25.205.51",
        "United States",
        "US"
      ],
      "line": 13,
      "id": "testing-a-countrylookup-api;getting-countryname-and-countrycode-associated-the-given-ipaddress;;3"
    },
    {
      "cells": [
        "64.81.104.131",
        "United States",
        "US"
      ],
      "line": 14,
      "id": "testing-a-countrylookup-api;getting-countryname-and-countrycode-associated-the-given-ipaddress;;4"
    },
    {
      "cells": [
        "200.21.225.82",
        "Colombia",
        "CO"
      ],
      "line": 15,
      "id": "testing-a-countrylookup-api;getting-countryname-and-countrycode-associated-the-given-ipaddress;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Getting CountryName and CountryCode associated the given IpAddress",
  "description": "",
  "id": "testing-a-countrylookup-api;getting-countryname-and-countrycode-associated-the-given-ipaddress;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "The user gives the following \"151.38.39.114\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user should get the country name as \"Italy\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user should get the country code as \"IT\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "151.38.39.114",
      "offset": 30
    }
  ],
  "location": "CountryLookupStepDefs.the_user_gives_the_following(String)"
});
formatter.result({
  "duration": 28707470138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Italy",
      "offset": 41
    }
  ],
  "location": "CountryLookupStepDefs.the_user_should_get_the_country_name_as(String)"
});
formatter.result({
  "duration": 291992550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IT",
      "offset": 41
    }
  ],
  "location": "CountryLookupStepDefs.the_user_should_get_the_country_code_as(String)"
});
formatter.result({
  "duration": 1863082,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Getting CountryName and CountryCode associated the given IpAddress",
  "description": "",
  "id": "testing-a-countrylookup-api;getting-countryname-and-countrycode-associated-the-given-ipaddress;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "The user gives the following \"12.25.205.51\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user should get the country name as \"United States\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user should get the country code as \"US\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12.25.205.51",
      "offset": 30
    }
  ],
  "location": "CountryLookupStepDefs.the_user_gives_the_following(String)"
});
formatter.result({
  "duration": 135560661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 41
    }
  ],
  "location": "CountryLookupStepDefs.the_user_should_get_the_country_name_as(String)"
});
formatter.result({
  "duration": 402681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 41
    }
  ],
  "location": "CountryLookupStepDefs.the_user_should_get_the_country_code_as(String)"
});
formatter.result({
  "duration": 455809,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Getting CountryName and CountryCode associated the given IpAddress",
  "description": "",
  "id": "testing-a-countrylookup-api;getting-countryname-and-countrycode-associated-the-given-ipaddress;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "The user gives the following \"64.81.104.131\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user should get the country name as \"United States\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user should get the country code as \"US\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "64.81.104.131",
      "offset": 30
    }
  ],
  "location": "CountryLookupStepDefs.the_user_gives_the_following(String)"
});
formatter.result({
  "duration": 109708131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 41
    }
  ],
  "location": "CountryLookupStepDefs.the_user_should_get_the_country_name_as(String)"
});
formatter.result({
  "duration": 484788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 41
    }
  ],
  "location": "CountryLookupStepDefs.the_user_should_get_the_country_code_as(String)"
});
formatter.result({
  "duration": 426831,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Getting CountryName and CountryCode associated the given IpAddress",
  "description": "",
  "id": "testing-a-countrylookup-api;getting-countryname-and-countrycode-associated-the-given-ipaddress;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "The user gives the following \"200.21.225.82\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "The user should get the country name as \"Colombia\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user should get the country code as \"CO\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "200.21.225.82",
      "offset": 30
    }
  ],
  "location": "CountryLookupStepDefs.the_user_gives_the_following(String)"
});
formatter.result({
  "duration": 224951174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Colombia",
      "offset": 41
    }
  ],
  "location": "CountryLookupStepDefs.the_user_should_get_the_country_name_as(String)"
});
formatter.result({
  "duration": 392418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CO",
      "offset": 41
    }
  ],
  "location": "CountryLookupStepDefs.the_user_should_get_the_country_code_as(String)"
});
formatter.result({
  "duration": 761896,
  "status": "passed"
});
});