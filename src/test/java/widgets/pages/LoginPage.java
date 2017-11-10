package widgets.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;
import util.webElementUtils;

/**
 * Created by paddy.zhong on 7/18/2017.
 */
public class LoginPage {

    WebDriver driver ;


    public LoginPage(){
        System.out.println("Init driver");
        this.driver = initDriver();
    }

    @BeforeTest
    public void openChrome() throws InterruptedException {
        loginStep();

    }

    public void loginStep() throws InterruptedException {
        driver.get("chrome-extension://pgjpmeckehbghpkamdammcgmmmbojbdi/background.html"); //open Google
        Thread.sleep(3000);
        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("toggleEnv()");
        Thread.sleep(3000);
        WebElement element = webElementUtils.findElement(widgetBasePage.SERVER_BOX);
        element.clear();
        element.sendKeys("https://api-up.lab.rcch.ringcentral.com");
        webElementUtils.findElement(widgetBasePage.ENABLE_BUTTON).click();
        webElementUtils.findElement(widgetBasePage.SAVE_BUTTON).click(); // change environment
        webElementUtils.findElement(widgetBasePage.SINGIN_BUTTON).click();
    }

    private WebDriver initDriver() {
        System.setProperty("webdriver.chrome.driver", ".\\drivers\\chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        String path = System.getProperty("user.dir");
        options.addArguments("load-extension=" + path + ".//extension//rc");
//        final DesiredCapabilities capabilities = new DesiredCapabilities();
//        capabilities.setCapability(ChromeOptions.CAPABILITY, options);
        driver = new ChromeDriver(options);
        webElementUtils.driver = driver;
        return driver;
    }



    @Test
    public void login(String username, String pwd) throws InterruptedException {
        openChrome();
        String handle = driver.getWindowHandle();
        for (String handles : driver.getWindowHandles()){
            if(handles.equals(handle)){
                continue;
            }
            driver.switchTo().window(handles);
        }
        new WebDriverWait(driver,60).until(ExpectedConditions.numberOfElementsToBe(By.id("rc-login-number"),1));
        WebElement element2 = webElementUtils.findElement(widgetBasePage.USERNAME_BOX);
        element2.clear();
        element2.sendKeys(username);
        WebElement element1 = webElementUtils.findElement(widgetBasePage.PASSWORD_BOX);
        element1.clear();
        element1.sendKeys(pwd);
        webElementUtils.findElement(widgetBasePage.POPUPSINGIN_BUTTON).click();
        driver.switchTo().window(handle);
        webElementUtils.findElement(widgetBasePage.SETTING_BUTTON).click();
        Thread.sleep(3000);
    }


    public static void success() throws InterruptedException {
        webElementUtils.findElement(widgetBasePage.COMPOSE_TEXT).click();
        Thread.sleep(3000);
    }
}
