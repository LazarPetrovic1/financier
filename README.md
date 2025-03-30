# MoneyTracker - Financier

**MoneyTracker - Financier** was developed with simplicity in mind - allowing the user to quickly and succinctly see where they stack up, when it comes to finances. This app isn't supposed to be the end-all be-all, but rather as a quick preview of one's current financial situation.

*While it has been shipped to production, the product has not been sufficiently tested, and it also uses a bit of hard-coded data, so it might not work as expected*

## Version 1.0.0

The project contains the following routes:

+ The *welcome page*, which states the purpose of the product *(optional part of the flow)*
+ The *search page*, which searches for countries and gives the lowdown of some useful data **(required part of the flow)**
+ The **tracker page**, which takes in your basic financial information and calculates your standing within the global socio-economic class system **(required part of the flow)**
+ The **results page**, which shows the calculated data with some general bare-bones advice ***(programmatic part of the flow)***

### Future work

+ Add *about page* [patch => 1.0.1]
+ Decouple the search and tracker pages [minor => 1.1.1]
+ Features per request (if they are found to be useful and insightful) [patch | minor | major]?

#### Developer information

You may fork the app if you wish. Below are the scripts added (written during v1.0.0, so it may change with newer patches):

`npm start` - Starts the application in **development mode**

`npm run start:react` - Starts the client in **development mode**

`npm run build` - Builds the client for **production mode**

`npm run package` - Builds the desktop for **production mode**

`npm run serve` - Serves the client build in **production mode**

`npm run patch` - Increments the semantic patch section of the version (rightmost part)

`npm run major` - Increments the semantic major section of the version (middle part)

`npm run minor` - Increments the semantic minor section of the version (leftmost part)

##### My SEMVER interpretation

+ Patches (0.0.*X*) will be used for bugfixes and very minor changes
+ Minors (0.*X*.0) will be used when reworking previous features using a different flow or engineering philosophy
+ Majors (*X*.0.0) will be used when doing a massive application rehaul, such as: a complete dependency version overhaul, full stylistic and layout diffs and adding completely foreign features, which were never planned or intended to be added (even though some of these may not be considered *breaking changes*)