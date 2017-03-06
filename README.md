This React project is fetching users on input from Github API 
and renders some of users details.


The mainView:
 - fetches github users on a given input
 - users info is saved in store
 - throttling of requests set for 1 sec
 - renders login, name, company, gravatar, following and followers
 - if user not found, app displays an appropriate message
 - if user info exists in store, another request is blocked and app displays an appropriate message
 - routing enables the view of a table with users
 
TO DO:
 - gravatar is not displayed as an image because I haven't found any a with gravatar.