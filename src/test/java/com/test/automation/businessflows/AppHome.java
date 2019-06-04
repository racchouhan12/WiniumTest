package com.test.automation.businessflows;

import com.test.automation.screens.AppHomeScreen;
import org.junit.Assert;

public class AppHome {

    public void addTwoNumbers(String numberOne, String numberTwo) {
         AppHomeScreen.getInstance().addTwoNumbers(numberOne, numberTwo);
    }
}
