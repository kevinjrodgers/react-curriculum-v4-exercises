//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  let aboutMeName = 'Kevin Rodgers';
  let aboutMeAge = 33;
  let aboutMeHobbiesArray = [
    'Board Games',
    'Video Games',
    'Bouldering',
    'Reading',
    'Golf',
  ];
  return (
    <div>
      {/* add JSX here */}
      {/*<p> Student output will go here </p>*/}
      <h1>Kevin Rodgers</h1>
      <p>
        My name is {aboutMeName}. I am {aboutMeAge}. I live in California and
        much of my time revolves around spending time with family and golfing
        with my friends. I'm currently trying to catch up on the Marvel movies
        and series just to stay updated so I can also watch the upcoming
        Avengers and Spider-Man movies.
      </p>
      <p>My hobbies include:</p>
      {aboutMeHobbiesArray.map((hobby) => (
        <p>- {hobby}</p>
      ))}
    </div>
  );
}
