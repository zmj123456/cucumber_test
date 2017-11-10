package widgets.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.Test;
import util.webElementUtils;
import widgets.pages.widgetBasePage;

/**
 * Created by paddy.zhong on 9/8/2017.
 */
public class testForCall {

    public static WebDriver driver;

    public static WebDriver secondDriver;

    @Test
    public void loginTest(String username, String pwd) throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", ".\\drivers\\chromedriver.exe");
        ChromeOptions first = new ChromeOptions();
        String path = System.getProperty("user.dir");
        first.addArguments("--use-fake-ui-for-media-stream");
        first.addArguments("--use-fake-device-for-media-stream");
        first.addArguments("load-extension=" + path + ".//extension//rc");
        final DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(ChromeOptions.CAPABILITY, first);
        WebDriver newWebdriver = new ChromeDriver(first);
        if (null == driver)
            driver = newWebdriver;
        else
            secondDriver = newWebdriver;
        webElementUtils.driver = newWebdriver;

        newWebdriver.get("chrome-extension://pgjpmeckehbghpkamdammcgmmmbojbdi/background.html"); //open Google
        Thread.sleep(3000);
        JavascriptExecutor js = (JavascriptExecutor) newWebdriver;
        js.executeScript("toggleEnv()");
        Thread.sleep(3000);
        WebElement element = webElementUtils.findElement(widgetBasePage.SERVER_BOX);
        element.clear();
        element.sendKeys("https://api-up.lab.rcch.ringcentral.com");
        webElementUtils.findElement(widgetBasePage.ENABLE_BUTTON).click();
        webElementUtils.findElement(widgetBasePage.SAVE_BUTTON).click(); // change environment
        webElementUtils.findElement(widgetBasePage.SINGIN_BUTTON).click();

        String handle = newWebdriver.getWindowHandle();
        for (String handles : newWebdriver.getWindowHandles()) {
            if (handles.equals(handle)) {
                continue;
            }
            newWebdriver.switchTo().window(handles);
        }
        new WebDriverWait(newWebdriver, 60).until(ExpectedConditions.numberOfElementsToBe(By.id("rc-login-number"), 1));
        WebElement element2 = webElementUtils.findElement(widgetBasePage.USERNAME_BOX);
        element2.clear();
        element2.sendKeys(username);
        WebElement element1 = webElementUtils.findElement(widgetBasePage.PASSWORD_BOX);
        element1.clear();
        element1.sendKeys(pwd);
        webElementUtils.findElement(widgetBasePage.POPUPSINGIN_BUTTON).click();
        newWebdriver.switchTo().window(handle);
        webElementUtils.findElement(widgetBasePage.SETTING_BUTTON).click();
        Thread.sleep(3000);
    }

    @Test
    public void secondLogin() throws InterruptedException {
        System.setProperty("webdriver.chrome.driver", ".\\drivers\\chromedriver.exe");
        ChromeOptions second = new ChromeOptions();
        second.addArguments("--use-fake-ui-for-media-stream");
        second.addArguments("--use-fake-device-for-media-stream");
        String path = System.getProperty("user.dir");
        second.addArguments("load-extension=" + path + ".//extension//rc");
        final DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability(ChromeOptions.CAPABILITY, second);
        driver = new ChromeDriver(second);
        webElementUtils.driver = driver;

        driver.get("chrome-extension://pgjpmeckehbghpkamdammcgmmmbojbdi/background.html"); //open Google
        Thread.sleep(3000);
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("toggleEnv()");
        Thread.sleep(3000);
        WebElement element = webElementUtils.findElement(widgetBasePage.SERVER_BOX);
        element.clear();
        element.sendKeys("https://api-up.lab.rcch.ringcentral.com");
        webElementUtils.findElement(widgetBasePage.ENABLE_BUTTON).click();
        webElementUtils.findElement(widgetBasePage.SAVE_BUTTON).click(); // change environment
        webElementUtils.findElement(widgetBasePage.SINGIN_BUTTON).click();
    }


}
