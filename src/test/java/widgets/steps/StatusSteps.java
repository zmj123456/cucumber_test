package widgets.steps;

import org.testng.annotations.Test;
import widgets.pages.StatusPage;
import widgets.pages.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

import java.util.Scanner;

/**
 * Created by paddy.zhong on 8/7/2017.
 */
public class StatusSteps {

    @Given("^user has login CTI app (.*) and (.*)$")
    public void setting(String username, String pwd) throws InterruptedException {
        LoginPage LoginPage = new LoginPage();
        LoginPage.login(username,pwd);
    }

    @When("^user change status in calling setting$")
    public void change() throws InterruptedException {
        StatusPage StatusPage = new StatusPage();
        StatusPage.changeStep();

    }

    @Then("^user change status successful$")
    public void succes(){
        Assert.assertTrue(true);
    }




}
