import  BasePage  from "../../pages/google/basePage";

describe('Test Google', () => {
    it('should have title "Google"', async () => {
        BasePage.launchPage("https://www.google.com/")
        BasePage.getTitle().then(function(title){
            expect(BasePage.getTitle).toBe("Google");
        })
    });
});