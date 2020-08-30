const add = function(a, b) {
    // if pass in add(1,2,3), though it takes a and b, 3 will be printed out as well. wont work for arrow func
    console.log(arguments) 
    return a + b;
};

console.log(add(1, 2));

const user = {
    name: 'Mike',
    cities: ['c1', 'c2'],
    printPlacesLived: function() {
        console.log(this.name);

        this.cities.forEach(
            function(city) {
                console.log(city); // this.name wont work
            }
        )

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        })

        // map returnes a new array
        const cityMessages = this.cities.map(
            (city) => {
                return this.name + ' has lived in ' + city
            }
        )
        // return cityMessages

        return this.cities.map(
            (city) => this.name + ' has lived in ' + city
        )
    }
}
console.log(user.printPlacesLived())
