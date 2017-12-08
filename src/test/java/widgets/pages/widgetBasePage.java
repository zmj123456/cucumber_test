package widgets.pages;

import org.openqa.selenium.By;

/**
 * Created by paddy.zhong on 8/2/2017.
 */
public class widgetBasePage {
     public static final By SERVER_BOX = By.xpath("//div[contains(text(),'Server')]//input");
     public static final By ENABLE_BUTTON = By.cssSelector("[class*='slider']");
     public static final By SAVE_BUTTON = By.xpath("//div[contains(text(),'Save')]");
     public static final By SINGIN_BUTTON = By.xpath("//*[text()='Sign In']");
     public static final By FIRST_USERNAME_BOX = By.xpath("//*[@id=\"credential\"]");
     public static final By NEXT_BUTTON = By.xpath("//*[text()='Next']");
     public static final By SECOND_USERNAME_BOX = By.xpath("//*[@name='LoginName']");
     public static final By PASSWORD_BOX = By.xpath("//*[@id=\"password\"]");
     public static final By SING_BUTTON = By.xpath("//*[@type=\'submit\']");
     public static final By POPUPSINGIN_BUTTON = By.xpath("//*[@id=\"pageContent\"]/div/div/div/div/div/div[2]/div[2]/form/div/div[5]/button");
     protected static final By MORE_OPTIONS_SELECTOR = By.xpath("//div[contains(@title,'More')]");
     public static final By SETTING_BUTTON = By.xpath("//div[@title='Settings']");
     public static final By COMPOSE_TEXT = By.xpath("//div[@title='Compose Text']");
     public static final By STATUS_BUTTON = By.xpath("*//div[contains(@class,'PresenceSettingSection')][contains(@class,'clickable')]");
     public static final By BUSY_BUTTON = By.xpath("*//span[text()='Busy']");
     public static final By one_BUTTON = By.xpath("//*[@id=\"viewport\"]/div/div/div/div[1]/div[2]/div[1]/div[1]/div[1]/svg/g/circle");
     public static final By two_BUTTON = By.xpath("//*[@id=\"viewport\"]/div/div/div/div[1]/div[2]/div[1]/div[1]/div[2]/svg/g/circle");
     public static final By three_BUTTON = By.xpath("//*[@id=\"viewport\"]/div/div/div/div[1]/div[2]/div[1]/div[1]/div[3]/svg/g/circle");
     public static final By four_BUTTON = By.xpath("//*[@id=\"viewport\"]/div/div/div/div[1]/div[2]/div[1]/div[2]/div[1]/svg/g/circle");
     public static final By five_BUTTON = By.xpath("//*[@id=\"viewport\"]/div/div/div/div[1]/div[2]/div[1]/div[2]/div[2]/svg/g/circle");
     public static final By six_BUTTON = By.xpath("//*[@id=\"viewport\"]/div/div/div/div[1]/div[2]/div[1]/div[2]/div[3]/svg/g/circle");
     public static final By seven_BUTTON = By.xpath("//*[@id=\"viewport\"]/div/div/div/div[1]/div[2]/div[1]/div[3]/div[1]/svg/g/circle");
     public static final By eight_BUTTON = By.xpath("//*[@id=\"viewport\"]/div/div/div/div[1]/div[2]/div[1]/div[3]/div[2]/svg/g/circle");
     public static final By nine_BUTTON = By.xpath("//*[@id=\"viewport\"]/div/div/div/div[1]/div[2]/div[1]/div[3]/div[3]/svg/g/circle");
     public static final By zero_BUTTON = By.xpath("//*[@id=\"viewport\"]/div/div/div/div[1]/div[2]/div[1]/div[4]/div[2]/svg/g/circle");
     public static final By CALL_BUTTON = By.cssSelector("div[class*='callBtn']");
     public static final By DIALPAD_TAB = By.xpath("//div[@title='Dial Pad']");
     public static final By TO_FIELD = By.cssSelector("input");
     public static final By ANSWER_BUTTON = By.xpath("//*[@id=\"viewport\"]/div/div[2]/div[2]/div[4]/svg[2]/svg/g/circle");
     public static final By CALLHISTORY = By.xpath("//div[@title='History']");
}

