describe('Game index', function() {
  var player;
  var LocalStorage = require("../helper/LocalStorage.js");
  
  beforeEach(function(){
    player = require('../../bin/data/start_player.json');
  });

  it('should calculate total production', function() {
    // we need to load the page to set the player and load it again to load the save
    browser.get('http://localhost:9000/index.html');

    player.intro.banner = true;
    player.intro.menu = true;
    player.intro.content = true;
    
    player.elements.H.generators["Tier 1"].level = 10;
    player.elements.H.generators["Tier 2"].level = 10;
    player.elements.H.generators["Tier 5"].level = 5;
    LocalStorage.setValue(JSON.stringify(player));
    
    browser.get('http://localhost:9000/index.html');
    
    
    expect(element(by.id('production_total')).getText()).toEqual('13,110');
  });
});