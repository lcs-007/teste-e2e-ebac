/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
      cy.get('.icon-user-unfollow').click()
      cy.get('#username').type('testeebac19@gmail.com')
      cy.get('#password').type('testeebac19')
      cy.get('.woocommerce-form > .button').click()
      cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
      cy.get('.products > .row')
      .contains('Argus All-Weather Tank').click()
      cy.get('.button-variable-item-M').click()
      cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
      cy.get('.single_add_to_cart_button').click()
      cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
      cy.get('.products > .row')
      .contains('Aero Daily Fitness Tee').click()
      cy.get('.button-variable-item-M').click()
      cy.get('.button-variable-item-Black').click()
      cy.get('.single_add_to_cart_button').click()
      cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
      cy.get('.products > .row')
      .contains('Arcadio Gym Short').click()
      cy.get('.button-variable-item-33').click()
      cy.get('.button-variable-item-Black').click()
      cy.get('.single_add_to_cart_button').click()
      cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
      cy.get('.products > .row')
      .contains('Aether Gym Pant').click()
      cy.get('.button-variable-item-34').click()
      cy.get('.button-variable-item-Brown').click()
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()
      cy.get('#billing_first_name').clear().type('lucas costa ')
      cy.get('#billing_last_name').clear().type('da silva')
      cy.get('#billing_city').clear().type('Osasco')
      cy.get('#select2-billing_state-container').type('são paulo')
      cy.get('body').click({ force: true })
      cy.get('#billing_postcode').clear({ force: true }).type('01011-100', { force: true })
      cy.get('#billing_phone').clear().type('2197279-5914')
      cy.get('#billing_address_1').clear().type('rua josé joaquim de oliveira')
      cy.get('#payment_method_cod').click()
      cy.get('#terms').click()
      cy.get('#place_order').click()
      cy.get('.woocommerce-notice', { timeout: 20000 }).should('contain', 'Obrigado. Seu pedido foi recebido.')
  });


})