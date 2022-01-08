 class BasePage{

    launchPage(url:string){
        return browser.url(url);
    }

    getTitle(){
        return  browser.getTitle();
    }
}

export default new BasePage();