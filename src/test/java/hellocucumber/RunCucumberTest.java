package hellocucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(tags = {"@simpleDemo"},features = "src/test//resources/hellocucumber/feature",plugin = {"pretty","html:target/cucumber","json:target/cucumber.json"})
public class RunCucumberTest {
}
