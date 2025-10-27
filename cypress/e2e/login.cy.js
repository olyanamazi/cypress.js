describe('Проверка формы авторизации', function () {

    it('Правильный пароль и правильный логин', function () {
         cy.visit('https://login.qa.studio/');

         cy.get('#mail').type('german@dolnikov.ru');                    //вводим верный логин
         cy.get('#pass').type('qa_one_love1') ;                //вводим верный пароль
         cy.get('#loginButton') .click() ;                            //нажимаем кнопку войти
         cy.get('#messageHeader') .contains ('Авторизация прошла успешно') ; //проверяем наличие текста об успешной авторизации
         cy.get('#messageHeader') .should('be.visible');
         cy.get('#exitMessageButton > .exitIcon') .should('be.visible');
     })
  

    it('Проверка восстановления пароля', function () {
         cy.visit('https://login.qa.studio/') ;

         cy.get('#forgotEmailButton') .click() ;                            //нажимаем кнопку «Забыли пароль»
         cy.get('#mailForgot').type('german@dolnikov.ru');                             //вводим любой e-mail
         cy.get('#restoreEmailButton').click() ;                             // нажимаем кнопку оправить код
         cy.get('#messageHeader') .should('be.visible');                    //проверили что текст виден пользователю
         cy.get('#messageHeader') .contains ('Успешно отправили пароль на e-mail'); // текст об успешном отправлении кода
         cy.get('#exitMessageButton > .exitIcon') .should('be.visible');    // проверяем наличие крестика и что он виден пользователю

})

  it('Ввести правильный логин и НЕправильный пароль', function () {
         cy.visit('https://login.qa.studio/');

         cy.get('#mail').type('german@dolnikov.ru');                    //вводим верный логин
         cy.get('#pass').type('qa_one_love18') ;                //вводим неверный пароль
         cy.get('#loginButton') .click() ;                            //нажимаем кнопку войти
         cy.get('#messageHeader') .contains ('Такого логина или пароля нет') ; //проверяем наличие текста 
         cy.get('#messageHeader') .should('be.visible');
         cy.get('#exitMessageButton > .exitIcon') .should('be.visible'); //проверяем наличие крестика
     }) 



     it('Ввести неправильный логин и правильный пароль', function () {
         cy.visit('https://login.qa.studio/');

         cy.get('#mail').type('german@donikov.ru');                     //вводим неверный логин
         cy.get('#pass').type('qa_one_love1') ;                        //вводим верный пароль
         cy.get('#loginButton') .click() ;                            //нажимаем кнопку войти
         cy.get('#messageHeader') .contains ('Такого логина или пароля нет') ; //проверяем наличие текста 
         cy.get('#messageHeader') .should('be.visible');             // текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon') .should('be.visible');
     })

     it('Ввести логин без @ и правильный пароль', function () {
         cy.visit('https://login.qa.studio/');

         cy.get('#mail').type('germandonikov.ru');                     //вводим логин без @
         cy.get('#pass').type('qa_one_love1') ;                        //вводим верный пароль
         cy.get('#loginButton') .click() ;                            //нажимаем кнопку войти
         cy.get('#messageHeader') .contains ('Нужно исправить проблему валидации') ; //проверяем наличие текста 
         cy.get('#messageHeader') .should('be.visible'); //текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon') .should('be.visible'); //наличие крестика
     })

     it('Ввести логин cо строчными буквами и правильный пароль', function () {
         cy.visit('https://login.qa.studio/');

         cy.get('#mail').type('GerMan@Dolnikov.ru');                     //вводим логин со строчными буквами
         cy.get('#pass').type('qa_one_love1') ;                        //вводим верный пароль
         cy.get('#loginButton') .click() ;                            //нажимаем кнопку войти
         cy.get('#messageHeader') .contains ('Авторизация прошла успешно') ; //проверяем наличие текста 
         cy.get('#messageHeader') .should('be.visible'); //текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon') .should('be.visible'); //наличие крестика
     })

    })

//Напиши проверку на приведение к строчным буквам в логине:
//а) Ввести логин GerMan@Dolnikov.ru
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить, что авторизация успешна
//(текст именно «Авторизация прошла успешно» и наличие кнопки крестик)



