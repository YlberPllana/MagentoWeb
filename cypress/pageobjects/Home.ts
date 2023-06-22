class Home_POM {
    homePageUrl = 'https://magento.softwaretestingboard.com/';

    checkIfUserIsLocatedOnHomePageUrl(): void {
        cy.checkCurrentPageUrl(this.homePageUrl);
    }

}
export default Home_POM;