package com.test.automation.screens;

import com.test.automation.helpers.NUMBERS;
import com.test.automation.helpers.SYMBOLS;
import org.openqa.selenium.By;

public class AppHomeScreen extends BaseScreen {

    public static AppHomeScreen getInstance() {
        return new AppHomeScreen();
    }

   public void addTwoNumbers(String numberOne, String numberTwo) {
       waitForElementToBeClickableAndClickOnElement(By.name(numberOne));
       waitForElementToBeClickableAndClickOnElement(By.name("Plus"));
       waitForElementToBeClickableAndClickOnElement(By.name(numberTwo));
   }
}
