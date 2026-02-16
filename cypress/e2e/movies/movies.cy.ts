describe("Movie Details Page", () => {
    it("should display the movies page correctly.", () => {
        cy.visit("/");
        //check if we are in the home page
        cy.location("pathname").should("eq", "/");
        //click movies on the header
        cy.getBySel("header").contains("Movies").click();
        //check if we are in the movies page
        cy.location("pathname").should("eq", "/movies");
        //check the movie cards
        cy.getBySel("movie-card").should("have.length", 8);
        
    });

    it("should display the card details correctly.", () => {
        cy.visit("/");
        //check if we are in the home page  
        cy.location("pathname").should("eq", "/");
        //click movies on the header
        cy.get("header").contains("Movies").click();
        //check if we are in the movies page
        cy.location("pathname").should("eq", "/movies");
        //click on the first movie card
        cy.getBySel("movie-card").first().click();
        //check if we are in the movie details page
        cy.location("pathname").should("eq", "/movies/1");
        
    });
    
    it("check if the first movie name is correct.", () => {
        cy.visit("/");
        //check if we are in the home page  
        cy.location("pathname").should("eq", "/");
        //click movies on the header
        cy.get("header").contains("Movies").click();
        //check if we are in the movies page
        cy.location("pathname").should("eq", "/movies");
        //check the first movie name
        cy.getBySel("movie-card").first().should("contain.text", "Inception");
    });
});