
To run this:
1.Open the folder
2.Open index.html


My Steps to complete this project
TO DO 1:
	Loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
	toBeDefined matcher is used to check that allFeeds is defined & not.toBe matcher is used to check that its length should not equal to 0; 
TO DO 2:
	Loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty. Follow TO DO 1 to achieve this.
TO DO 3:
	Write new suite for the side bar menu using describe.
TO DO 4:
	Here, it checks the menu is hidden by default.
	Select the body element and then check that body conatin the class menu-hidden using hasClass and toBe matcher.
TO DO 5:
	Again write new it, here it ensures the menu changes visibility when menu icon is clicked.
	First select the menu-icon-link and then call trigger method on the menuIcon, ensures that menu is not hidden when first time clicked 
	again call the trigger method & ensure that menu is hidden when second time clicked.
TO DO 6:
	Write new suite for Initial Entries using describe.
TO DO 7:
	Since loadFeed is asynnchronous because of this write beforeEach.
	Here, it ensure that  container is not empty.
TO Do 8:
	Write new suite for feed Selection using describe.
TO DO 9:
	Since loadFeed is asynnchronous because of this write beforeEach.
	Here, first time call the loadFeed and select first entry from the container and store it into a variable named firstEntry & again call the
	loadFeed and select second entry from the container and store it into a variable named secondEntry & then into expect check that both the entries
	are different.: 
 		
	 