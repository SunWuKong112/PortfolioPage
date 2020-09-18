var $window = $(window), win_height_padded = $window.height() * 1.1, isTough = modernizr.tough;
$window.on('Scroll', revealOnScroll);
function revealOnScroll()
{
     var scrolled = $window.scrollTop(), win_height_padded = $window.height() * 1.1;
     $('.revealOnScroll:not(.animated)').each(function()
     {
          var $this = $(this), offsetTop = $this.offset().top;
          if(scrolled + win_height_padded > offsetTop)
          {
               if ($this.data('timeout'))
               {
                    window.setTimeout(function()
                    {
                         $this.addClass('animated ' + $this.data('animation'));
                    }, parseInt($this.data('timeout'), 10));
               }
               else
               {
                    $this.addClass('animated ' + $this.data('animated'));
               }
          }
     }
});
$('revealOnScroll.animated').each(function (index)
{
     var $this = $this, offsetTop = $this.offset().top;
     if (scrolled +win_height_padded < offsetTop)
     {
          $(this).removeClass('animated fadInUp flipInX lightSpeedIn');
     }
});