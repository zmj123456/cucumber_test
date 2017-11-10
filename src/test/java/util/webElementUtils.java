package util;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

/**
 * Created by paddy.zhong on 8/7/2017.
 */
public class webElementUtils {

    public static WebDriver driver;
    public static WebElement findElement(final By by){
       return findElement(by,driver);
    }

    public static WebElement findElement(final By by,WebDriver runningDriver){
        WebElement webElement = null;
        try {
            webElement = new WebDriverWait(runningDriver,10).until(new ExpectedCondition<WebElement>() {
                public WebElement apply(WebDriver runningDriver) {
                    return driver.findElement(by);
                }
            });
        }catch (Exception e){
            System.out.println("元素:"+ by + "没找着");
            e.printStackTrace();
        }
        return webElement;
    }


    public static List<WebElement> findElements(final By by){
        List<WebElement>  webElement = null;
        try {
            webElement = new WebDriverWait(driver,10).until(new ExpectedCondition<List<WebElement>>() {
                public List<WebElement> apply(WebDriver webDriver) {
                    return driver.findElements(by);
                }
            });
        }catch (Exception e){
            System.out.println("元素:"+ by + "没找着");
        }
        return webElement;
    }
}
