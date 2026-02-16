describe("Movie Details Page", () => {
    it("should display the movie details correctly.", () => {
        cy.visit("/");
        //check if we are in the home page
        cy.location("pathname").should("eq", "/");
        //click movies on the header
        cy.get("header").contains("Movies").click();
        
    });
});