// Liskov Substitution Principle

// Функция использующая базовый тип должны уметь с ним взаимодействовать 
// а также уметь взаимодействовать с подтипами базового типа.

/*
//  1.  Нарушается принцип, так как функция openSecretDoor 
//      работает некорректно с классом Person в случае если в
//      функцию аргументом передать экзепляр класса PersonFromDifferentCompany,
//      что вызывает ошибку.

class Person {
    access() {
        console.log('У тебя есть доступ')
    }
}

class Frontend extends Person {
    canCreateFrontend() {}
}

class Backend extends Person {
    canCreateBackend() {}
}

class PersonFromDifferentCompany extends Person {
    access() {
        throw new Error('У тебя нет доступа');
    }
}

function openSecretDoor(person) {
    person.access();
}

openSecretDoor(new Frontend);
openSecretDoor(new Backend);
openSecretDoor(new PersonFromDifferentCompany);
*/


//  2.  Добавим еще один уровень абстракций Member и Guest
//      которые наследуются от Person

class Person {

}

class Member extends Person {
    access() {
        console.log('У тебя есть доступ')
    }
}

class Guest extends Person {
    isGuest = true;
}

class Frontend extends Member {
    canCreateFrontend() {}
}

class Backend extends Member {
    canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {}

function openSecretDoor(member) {
    member.access();
}

openSecretDoor(new Frontend);
openSecretDoor(new Backend);
//  3.  В функцию должн передоваться Member
// openSecretDoor(new PersonFromDifferentCompany); 

//===================================================

/*
class Component {
    render() {
        return '<div>Component</div>';
    }
}

class HeaderComponent extends Component {
    onInit() {}
}

class FooterComponent extends Component {
    afterInit() {}
}

class HOC extends Component {
    render() {
        throw new Error('Render is impossible here');
    }

    wrapComponent(component) {
        component.wrapped = true;
        return component;
    }
}

function renderComponent(component) {
    console.log(component.render());
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());
renderComponent(new HOC());
*/

class Component {
    isComponent = true;
}

class ComponentWithTemplate extends Component{
    render() {
        return '<div>Component</div>';
    }
}

class HigherOrderComponent extends Component{

}

class HeaderComponent extends ComponentWithTemplate {
    onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
    afterInit() {}
}

class HOC extends HigherOrderComponent {
    render() {
        throw new Error('Render is impossible here');
    }

    wrapComponent(component) {
        component.wrapped = true;
        return component;
    }
}

function renderComponent(component) {
    console.log(component.render());
}

renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());
