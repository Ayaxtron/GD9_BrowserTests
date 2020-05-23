describe('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', () => {
    describe('Page loads', () => {
        it('Should load the page', () => {
            cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do')
        })
    })
})

describe('Fecha de disposicion', () => {
    describe('Page loads', () => {
        it('Should load text and select inputs', () => {
            cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do')

            cy.get('#dispDate')
                .clear()
                .type('05/05/2020')
                .type('{enter}');
            
            cy.get('#creditAmount')
                .clear()
                .type(20000);

            cy.get('#paymentMethod')
                .select('Mensual');

            cy.get('#period')
                .select('2 años');

            cy.get('#rate')
                .clear()
                .type(15.0);

        })
    })
})

describe('Calcular', () => {
    describe('Click on the button', () => {
        it('Should click in the button Calculate', () => {
            //cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do')

            cy.contains('Calcular').click()
                
            cy.contains('Ahora no').click()

        })
    })
})

describe('Table loads', () => {
    describe('Check the amount of rows in the table', () => {
        it('Should check the rows in the table', () => {
            //cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do')

            cy.get('#resultadosSimulador').get('tbody').find('tr').should('have.length', 24)
        })
    })
})