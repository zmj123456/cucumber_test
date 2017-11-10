package util;

import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

/**
 * Created by paddy.zhong on 8/8/2017.
 */
public class CucumberHooks {

    public static WebDriver driver;


//    @Before
//    public void initDriver(){
//        System.out.println("before scenario");
//        System.setProperty("webdriver.chrome.driver", ".\\drivers\\chromedriver.exe");
//        ChromeOptions options = new ChromeOptions();
//        String path = System.getProperty("user.dir");
//        options.addArguments("load-extension=" + path + ".//extension//rc");
//        final DesiredCapabilities capabilities = new DesiredCapabilities();
//        capabilities.setCapability(ChromeOptions.CAPABILITY, options);
//        driver = new ChromeDriver(options);
//    }
}
