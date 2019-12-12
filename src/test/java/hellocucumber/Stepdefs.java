package hellocucumber;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.*;

public class Stepdefs {
    @Given("today is Sunday")
    public void today_is_Sunday() {
        System.out.println("test1");
    }

    @When("I ask whether it's Friday yet")
    public void i_ask_whether_it_s_Friday_yet() {
        System.out.println("test2");
    }

    @Then("I should be told {string}")
    public void i_should_be_told(String string) {
        System.out.println("test3");
    }

    @Given("today is Monday")
    public void today_is_Monday() {
        System.out.println("Monday");
    }

    @Before("@simpleDemo")
    public void beforeOperation(){
        System.out.println("beforetag");
    }

    @After("@simpleDemo")
    public void afterOperation(){
        System.out.println("aftertag");
    }

    @Given("this is background")
    public void backGround(){
        System.out.println("backGroundtag");
    }


}
