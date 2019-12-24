package hellocucumber;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.*;

public class steps {
    @Given("today is Sunday")
    public void today_is_Sunday() {
        System.out.println("today is Sunday");
    }
    @Given("today is Friday")
    public void today_is_Friday() {
        System.out.println("today is Friday");
    }

    @When("I ask whether it's Friday yet")
    public void i_ask_whether_it_s_Friday_yet() {
        System.out.println("I ask whether it's Friday yet");
    }

    @Then("I should be told {string}")
    public void i_should_be_told(String result) {
        System.out.println(result);
    }

    @Given("today is Monday")
    public void today_is_Monday() {
        System.out.println("today is Monday");
    }

    @Before("@simpleDemo")
    public void beforeOperation(){
        System.out.println("before_tag");
    }

    @After("@simpleDemo")
    public void afterOperation(){
        System.out.println("after_tag");
    }

    @Given("this is background")
    public void backGround(){
        System.out.println("execute background operation");
    }


}
