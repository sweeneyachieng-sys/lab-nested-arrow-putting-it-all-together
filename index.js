////////////////////
//each time the function is called the attemptcount increases by one.
function createLoginTracker(userInfo){
  let attemptCount = 0;
  return(passwordAttempt) => {
    attemptCount++;

    if (attemptCount > 3) {
return" account locked due to too many failed login attempts";
    }

if (passwordAttempt === userInfo.password && attemptCount <= 2){
    return "Login successful";
  } else {
    return `Attempt ${attemptCount}: Login failed`;
  }
};
}
createLoginTracker();
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })}