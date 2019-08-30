STEAM APP FINDER

A react app that fetches data from Steam's API and displays it.

http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=*STEAMKEY*&format=json
For full app name/id list

https://store.steampowered.com/api/appdetails?appids=460790&appids=*APPID*
For detailed data

(http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=*APPID*&count=3&maxlength=300&format=json
For latest news on specified app, not currently used)

When loaded, the app first retrieves the full list of available Steam apps. When the user
starts typing in the search text box, it starts filtering the data. Once there are a thousand
matches or less, a list of app names and ids is displayed. If there are ten or less matches,
the detailed data of these apps is fetched and on top of names, short summaries are displayed.

In both versions of list view, apps can be clicked to display more detailed data, including 
descriptions and screenshots. If there is no detailed data, a notification is shown.

The app is available at http://salty-lowlands-59822.herokuapp.com/