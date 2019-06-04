package com.test.automation.stepdefinitions;

import com.test.automation.businessflows.AppHome;
import cucumber.api.PendingException;
import cucumber.api.java8.En;

public class AppHomeSteps implements En {

    public AppHomeSteps() {

        Given("^I add two numbers \"([^\"]*)\" and \"([^\"]*)\"$", (String numberOne, String numberTwo) -> {
            new AppHome().addTwoNumbers(numberOne, numberTwo);
        });
    }
}
