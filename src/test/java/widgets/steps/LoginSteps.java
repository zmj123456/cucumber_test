package widgets.steps;

import util.webElementUtils;
import widgets.pages.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import widgets.pages.widgetBasePage;

/**
 * Created by paddy.zhong on 7/19/2017.
 */
public class LoginSteps {


    @Given("^user has valid account$")
    public void validAccount(){
        System.out.println("user vaid account====>");
    }

    @When("^user login with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userLoginWithAnd(String username, String pwd) throws InterruptedException {
        LoginPage LoginPage = new LoginPage();
        LoginPage.login(username,pwd);

    }


    @Then("^user can login successuflly$")
    public void loginSuccess() throws InterruptedException {
        LoginPage.success();
        System.out.println("+++++++++++");
    }



}
