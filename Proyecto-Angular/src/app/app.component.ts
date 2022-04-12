import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/styles.css','../assets/noscript.css']
})
export class AppComponent {
  title = 'Proyecto-Angular';
  
  constructor() { }

  ngOnInit(): void {
    $.fn._parallax = function(intensity:any) {

      var	$window = $(window),
        $this = $(this);
  
      if (this.length == 0 || intensity === 0)
        return $this;
  
      if (this.length > 1) {
  
        for (var i=0; i < this.length; i++)
          $(this[i])._parallax(intensity);
  
        return $this;
  
      }
  
      if (!intensity)
        intensity = 0.25;
  
      $this.each(function() {
  
        var $t = $(),
          $bg = $('<div class="bg"></div>').appendTo($t),
          on, off;
  
        on = function() {
  
          $bg
            .removeClass('fixed')
            .css('transform', 'matrix(1,0,0,1,0,0)');
  
          $window
            .on('scroll._parallax', function() {
  
              var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);
  
              $bg.css('transform', 'matrix(1,0,0,1,0,' + (pos * intensity) + ')');
  
            });
  
        };
  
        off = function() {
  
          $bg
            .addClass('fixed')
            .css('transform', 'none');
  
          $window
            .off('scroll._parallax');
  
        };
  
    
  
        // Enable everywhere else.
         
  
      });
  
      $window
        .off('load._parallax resize._parallax')
        .on('load._parallax resize._parallax', function() {
          $window.trigger('scroll');
        });
  
      return $(this);
  
    };
  
  }
}
