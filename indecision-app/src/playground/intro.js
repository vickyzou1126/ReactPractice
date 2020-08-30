console.log('App.js is running')

// JSX -JS XML
var template =  (
    <div>
        <h1>Indecision-App</h1>
        <p>This is JSX from app.js.</p>
    </div>
);
  
var userNmae = 'Mike';
var userAge = 20;
var userLocation = 'Sydney';
var template2 =  (
    <div>
        <h1>{userNmae + '!'}</h1>
        <p>Age: {userAge}</p>
        <p>Location: {userLocation}</p>
    </div>
);

var user = {
    name: 'Mike',
    age: 26,
    location: 'AU'
}
function getLocation(location) {
    if (location) {
        return <p>Location: {getLocation(location)}</p>;
    }
}

var template3 =  (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>} 
        {getLocation(user.location)}
    </div>
); 
