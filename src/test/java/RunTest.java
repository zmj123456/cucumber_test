
import cucumber.api.CucumberOptions;
import cucumber.api.testng.*;



@CucumberOptions(
        features = "classpath:features",
        plugin = {"pretty",
                "json:target/cucumber.json",
        },
        glue = "widgets.steps"
)

public class RunTest extends AbstractTestNGCucumberTests{

    protected RunTest() {
    }

}