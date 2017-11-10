package widgets.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.testng.Assert;
import util.webElementUtils;
import widgets.pages.testForCall;
import widgets.pages.widgetBasePage;

/**
 * Created by paddy.zhong on 8/24/2017.
 */
public class MakeOutboundCallSteps {

//
//    @Test
//    public void defaultCall() throws InterruptedException {
//        testForCall testForCall = new testForCall();
//        testForCall.loginTest("18662135555", "Test!123");
//        Thread.sleep(5000);
//        testForCall.driver.findElement(widgetBasePage.DIALPAD_TAB).click();//点击dialpad tab
//        testForCall.driver.findElement(widgetBasePage.TO_FIELD).sendKeys("12055883333");
//        testForCall testForCall2 = new testForCall();
//        testForCall2.loginTest("18552026668", "Test!123");
//        testForCall.driver.findElement(widgetBasePage.CALL_BUTTON).click();
//        Boolean bl = webElementUtils.findElement(By.xpath("//div[contains(text(),'Answer')]"),testForCall2.driver).isDisplayed();
//        Assert.assertTrue(bl, "Check Answer button");
//
//
//    }

    @Given("^user has login CTI app$")
    public void iLoginPage() throws InterruptedException {
        testForCall testForCall = new testForCall();
        testForCall.loginTest("18662135555", "Test!123");
        Thread.sleep(5000);
    }

    @When("^user navigated to Dial Pad tab$")
    public void iGoToDialPage() {

        testForCall.driver.findElement(widgetBasePage.DIALPAD_TAB).click();//点击dialpad tab
    }

    @And("^user make an outbound call with \"18662135555\"$")
    public void iMakeACall() {
        testForCall.driver.findElement(widgetBasePage.TO_FIELD).sendKeys("12055883333");
    }

    @Then("^callee can receive the call$")
    public void iReceiveACall() throws InterruptedException {
        testForCall testForCall2 = new testForCall();
        testForCall2.loginTest("18552026668", "Test!123");
        Thread.sleep(3000);
        testForCall.driver.findElement(widgetBasePage.CALL_BUTTON).click();
        Boolean bl = webElementUtils.findElement(By.xpath("//div[contains(text(),'Answer')]"), testForCall2.driver).isDisplayed();
        Assert.assertTrue(bl, "Check Answer button");
    }

//    @Test
//    public void secondCall() throws InterruptedException {
//        testForCall testForCall = new testForCall();
//        testForCall.loginTest("18552026668", "Test!123");
//        Boolean bl = webElementUtils.findElement(By.xpath("//*[@id=\"viewport\"]/div/div[2]/div[2]/div[4]/svg[2]/svg/g/circle")).isDisplayed();
//        Assert.assertTrue(bl, "Check Answer button");
//
//    }
}
