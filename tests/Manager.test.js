
const Manager = require ('../lib/Manager');


test('creates a Manager object', () =>{
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () =>{
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 1);

    expect(manager.getRole()).toEqual("Manager");
});