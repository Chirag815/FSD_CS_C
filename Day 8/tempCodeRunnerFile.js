async function fetchdata() {
  try {
    let response = await fetch("https://api.github.com/users?per_page=10");
    let data = await response.json();
     console.log(login,id); //we want to only print login and id's of the 10 users 
  } catch (error) {
    console.error(error);
  }
}
fetchdata();
