package widgets.pages;

import util.webElementUtils;

/**
 * Created by paddy.zhong on 8/8/2017.
 */
public class StatusPage {
    public void changeStep() throws InterruptedException {
        webElementUtils.findElement(widgetBasePage.MORE_OPTIONS_SELECTOR).click();
        webElementUtils.findElement(widgetBasePage.SETTING_BUTTON).click();
        webElementUtils.findElement(widgetBasePage.STATUS_BUTTON).click();
        webElementUtils.findElement(widgetBasePage.BUSY_BUTTON).click();
        Thread.sleep(5000);
    }
}
