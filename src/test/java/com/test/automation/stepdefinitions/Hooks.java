package com.test.automation.stepdefinitions;

import com.test.automation.helpers.*;
import com.test.automation.utilities.Command;
import com.test.automation.utilities.DriverUtils;
import com.test.automation.utilities.ScreenShotUtils;
import com.test.automation.utilities.ThisRun;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.WebDriver;

import java.io.FileInputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.Properties;

public class Hooks {

    private ThisRun thisRun  = ThisRun.getInstance();
    private static Logger logger = LogManager.getLogger(Hooks.class.getName());
    DriverUtils driverUtils;
    WebDriver driver;

    @Before
    public void setup(Scenario scenario) throws IOException {
        logger.info("Running scenario : "+ scenario.getName());
        loadFromPropertiesFile();
        addDriverProperties();
        thisRun.waitFor(2);
    }

    private void loadFromPropertiesFile() throws IOException {
        FileInputStream fileStream =
                new FileInputStream(thisRun.get(KEYS.TEST_RESOURCES.toString()) + "/CommonProperties.properties");
        Properties commonProperties = new Properties();
        commonProperties.load(fileStream);
        thisRun.add(KEYS.BROWSER, commonProperties.getProperty(KEYS.BROWSER.toString()));
        thisRun.add(KEYS.APP_URI, commonProperties.getProperty(KEYS.APP_URI.toString()));

    }

    private void addDriverProperties() throws MalformedURLException {
        driverUtils = new DriverUtils(thisRun.getAsString(KEYS.BROWSER.toString()));
        driver = driverUtils.getDriver();
        thisRun.add(KEYS.DRIVER, driver);
    }

    @After
    public void tearDown(Scenario scenario) throws IOException, InterruptedException {
        logger.info("Inside teardown(), now Browser will quit.....");
        ScreenShotUtils.embedScreenShotInReport(scenario, scenario.getName());
        String cmd = thisRun.getAsString(KEYS.OS_NAME.toString()).contains("Windows") ? "taskkill /IM \"Calculator.exe\" /F": null;
        Command.execCommand(cmd);
        driverUtils.quitBrowser();
    }

}
