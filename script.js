 var rule = CSSRulePlugin.getRule("span:after");

/*gsap.from('.anim1', {opacity: 0, duration: 2, y: -50, stagger: 0.5});
gsap.from('aside', {duration: 1, delay: 2, backgroundPosition: '100px 0px', opacity: 0});
gsap.to(rule, {cssRule: {scaleY: 0}, duration: 1});
*/

var tl = gsap.timeline({defaults: {duration: 1}})
   tl.from(".anim1", {y: -50, stagger: 0.6, opacity: 0})
      .to(rule, {duration: 1.8, cssRule: {scaleY:0}}, "-=1-5")
      .from("aside", {backgroundPosition: '200px 0px', opacity: 0}, "-=1-5")
      .from(".name", {y: 10, opacity: 0}, "-=1")

      document.getElementById('cta').addEventListener('click', function () {
        tl.reversed() ? tl.play() : tl.reverse() 
      })