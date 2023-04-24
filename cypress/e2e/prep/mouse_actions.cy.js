describe('Mouse actions tests', () => {

    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html ');
    });

    it('Double click test', () => {
        cy.get('div#double-click').dblclick();
    });

    it('Click and hold test', () => {
        cy.get('#click-box').trigger('mousedown')
        cy.wait(1000)
        cy.get('#click-box').trigger('mouseup')
    });

    it('Drag and drop tests', () => {
        cy.get('#draggable').trigger('mousedown', {which: 1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
    });

    it('Real hover tests', () => {
        cy.get('.hover > .dropbtn').realHover().then(($hoveredElement) => {
            cy.wait(2000)
            cy.get('#div-hover > div.dropdown.hover > div > a').click();
        })
    });

});