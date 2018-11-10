
$(function() {
    /*Suite that contain the information about allFeeds variable*/
    describe('RSS Feeds', function() {
         /*it test to make sure that allFeeds variable has been defined 
         and it is not empty.Here, toBeDefined matcher is used to check
         that allFeeds is defined. not.toBe matcher is used to check that
         its length should not equal to 0;  
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* loops through each feed in the allFeeds object and ensures
         it has a URL defined and that the URL is not empty.
         */
        allFeeds.forEach(function(element){
         it('URL is defined and is not empty',function(){
            expect(element.url).toBeDefined();
            expect(element.url.length).not.toBe(0);
         })});
        /* loops through each feedin the allFeeds object and ensures
         it has a name defined and that the name is not empty.
         */
         allFeeds.forEach(function(element){
         it('Name is defined and is not empty',function(){
            expect(element.name).toBeDefined();
            expect(element.name.length).not.toBe(0);
         })});
    });

    /*Suite for the side bar menu*/
    describe('The menu',function(){
         /*it checks the menu is hidden by default*/
         it('hidden by default',function(){
            /*select the body element and then check that body conatin
             the class menu-hidden using hasClass and toBe matcher*/
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
          /*it ensures the menu changes visibility when menu 
          icon is clicked*/
          it('change the visibility when menu icon clicked',function(){
            //select the menu-icon-link
            var menuIcon=$('.menu-icon-link');
            //triggers the menuIcon
            menuIcon.trigger('click');
            //ensure that menu is not hidden when first time clicked
            expect($('body').hasClass('menu-hidden')).toBe(false);
             menuIcon.trigger('click');
             //ensure that menu is hidden when second time clicked
             expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    /*Suite for Initial Entries*/
    describe('Initial Entries',function(){
         //Because loadFeed() is asynchronous
         beforeEach(function(done){
            loadFeed(0,function(){
            done();
            });
         });
         //it ensure that  container is not empty
         it('atleast a single entry',function(done){
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
         });
    });

    /*Suite for the new feed selection*/
    describe('New  Feed Selection',function(){
         var firstEntry,secondEntry;
         //Because asynchronous
         beforeEach(function(done){
            loadFeed(0,function(){
                //select the first Entry
                firstEntry=$('.feed').text();
                loadFeed(1,function(){
                    //select the second entry
                    secondEntry=$('.feed').text();
                    done();
                });
            });
         });
         /*it ensure that the newly inserted entry is different from the
          first entry*/
         it('different content',function(done){
            expect(firstEntry).not.toBe(secondEntry);
            done();
         })
    })
       
}());
