const Employee = require ('../lib/Employee');



test('creates an employee name', ()=> {
    const employee = new Employee ('Alec', 2, 'alec@fakemail.com')
    expect(employee.name).toEqual(expect.any(String));
});


test('creates an employee id', ()=> {
    const employee = new Employee ('Alec', 2, 'alec@fakemail.com')
    expect(employee.id).toEqual(expect.any(Number));
});


test('creates an employee email', ()=> {
    const employee = new Employee ('Alec', 2, 'alec@fakemail.com')
    expect(employee.email).toEqual(expect.any(String));
});


test('gets employee name', ()=>{
    const employee = new Employee('Alec', 2, 'alec@fakemail.com');

    expect(employee.getName()).toEqual(expect.any(String));

});

test('gets employee ID', () => {
    const employee = new Employee('Alec', 2, 'alec@fakemail.com');

    expect (employee.getId()).toEqual(expect.any(Number));
});


test('gets employee email', ()=> {
    const employee =new Employee('Alec', 2, 'alec@fakemail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
})


test('gets role of employee', () =>{
    const employee = new Employee ('Alec', 2, 'alec@fakemail.com');

    expect(employee.getRole()).toEqual("Employee");
});