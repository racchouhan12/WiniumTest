package com.test.automation.stepdefinitions;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"./src/test/resources/feature"},
        glue = {"com.test.automation.stepdefinitions"},
        plugin = {"pretty", "html:reports/html", "json:reports/cucumber.json"},
        tags = {"foo"}
        )

public class Runcukes {
}
