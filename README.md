# Brastlewark - AXA frontend code assessment
by @leandroercoli

This web application was written as a frontend code assessment for AXA. 

## See it running
http://brastlewark-leandroercoli.herokuapp.com/

## Libs and tools used 
- React
- React-redux and @reduxjs/toolkit
- Node-sass
- Axios

## Walkthrough
The application displays a list of gnomes on the city, allowing the user to search for a gnome by name or profession. A pill option is also available to filter the search by friend status.

To avoid sluggishness, the list is displayed by batches of 20 items, showing a "Load more" button, at the end of the last visible item, to expand the list. A custom hook was written for this. 

On the list, each gnome card displays their picture, name, username and list of professions. A "Follow" button allows the user to become friends with the gnome (this information is saved on Redux and lost on refresh). A click on a gnome card opens a sliding sidebar with more information about them, like weight, height, age and hair color. The gnome's friends list is also available (the gnome card component was reused for this list). The sidebar is responsive and should be full width on smaller screens. 

A user badge is shown on the header to emulate a signed in user. By clicking on it, a sliding sidebar is opened with their information and a list of friends.

## Testing
Different types of tests were included: unit and integration testing of some key components with API mocking, and snapshot tests for basic UI components (alerts, loader, badges). 

## Installation and use

Clone this repository:
```
git clone git@github.com:leandroercoli/AxaTest.git
```
Install npm packages:
```
npm install
```
Start working:
```
npm start
```
Run tests:
```
npm test
```
