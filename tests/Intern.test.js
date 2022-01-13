
const Intern = require('../lib/Intern');


test('creates an Intern object', () =>{
    const intern = new Intern('John', 5, 'john@fakemail.com', '2University');

    expect(intern.school).toEqual(expect.any(String));
});


test('gets employee school', () =>{
    const intern = new Intern('John', 5, 'john@fakemail.com', '2University');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


test('gets role of employee', () =>{
    const intern = new Intern('John', 5, 'john@fakemail.com', '2University');

    expect(intern.getRole()).toEqual("Intern");
});