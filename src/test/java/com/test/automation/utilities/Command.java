package com.test.automation.utilities;

import com.test.automation.helpers.KEYS;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.IOException;

public class Command {

    private static Logger logger = LogManager.getLogger(Command.class.getName());
    private static Runtime runtime = Runtime.getRuntime();
    private static ThisRun thisRun = ThisRun.getInstance();
    private Command() {

    }

    public static void execCommand(String command) throws IOException, InterruptedException {
        logger.debug("Command generated------------------------------" +command);
        Process process = runtime.exec(command);
        process.waitFor();
        thisRun.waitFor(2);

        logger.debug("Process exit value: " +process.exitValue());

    }
}
