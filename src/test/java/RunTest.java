
import cucumber.api.CucumberOptions;
import cucumber.api.testng.*;



@CucumberOptions(
        features = "classpath:login.feature",
        plugin = {"pretty",
                "json:target/cucumber.json",
        },
        glue = "widgets.steps",
        tags = {"@google"}
)

public class RunTest extends AbstractTestNGCucumberTests{

    protected RunTest() {
    }

}