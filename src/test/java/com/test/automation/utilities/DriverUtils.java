package com.test.automation.utilities;

import com.test.automation.helpers.KEYS;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.winium.DesktopOptions;
import org.openqa.selenium.winium.WiniumDriver;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.*;

public class DriverUtils {

    private WebDriver driver;

    private ThisRun thisRun = ThisRun.getInstance();

    private static Logger logger = LogManager.getLogger(DriverUtils.class.getName());
    public String browser;

    public DriverUtils(String browser) {
        this.browser = browser;
    }

    private WebDriver instantiateWiniumDriver() throws MalformedURLException {
        DesktopOptions options = new DesktopOptions();
        options.setApplicationPath(thisRun.getAsString(KEYS.APP_URI.toString()));
        driver = new WiniumDriver(new URL("http://localhost:9999"), options);
        return driver;
    }

    public WebDriver getDriver() throws MalformedURLException {
        logger.info("Instantiating Driver for browser: "+browser);
        switch (browser.toLowerCase()) {
            case "windows":
                return instantiateWiniumDriver();
            default:
                throw new InputMismatchException("Invalid browser type");
        }
    }

    public void quitBrowser() {
        driver = null;
    }
}
