'use strict';

(function () {
  document.querySelector('header section > img').onclick = function () {
    document.querySelector('header nav').classList.toggle('nav-visible');
  }

  var leds = document.querySelectorAll('#arch-demo circle');
  var ledCount = leds.length;
  var effects = [
    {render: renderLine, from: 0, to: 1000, reverse: false, length: 20, color: '#f33'},
    {render: renderLine, from: 950, to: 1950, reverse: true, length: 20, color: '#6f2'},
    {render: renderLine, from: 1900, to: 2900, reverse: false, length: 20, color: '#07f'},
    {render: renderLine, from: 2850, to: 3850, reverse: true, length: 20, color: '#fe0'},
    {render: renderLine, from: 3800, to: 4800, reverse: false, length: 20, color: '#f7e'},
    {render: renderLine, from: 4750, to: 5750, reverse: true, length: 20, color: '#ffc'}
  ];
  
  var startTime = +new Date();

  if (window.requestAnimationFrame) {
    requestAnimationFrame(renderEffects);
  }

  function renderEffects() {
    var duration = effects[effects.length - 1].to;
    var time = (+new Date() - startTime) % duration;

    clearLeds();
    for (var i = 0; i < effects.length; i++) {
      var effect = effects[i];
      var progress = (time - effect.from) / (effect.to - effect.from);
      progress = effect.reverse ? 1 - progress : progress;
      if (effect.from <= time && effect.to >= time) {
        effect.render(effect, progress);
      }
    }

    requestAnimationFrame(renderEffects);
  }

  function clearLeds() {
    for (var i = 0; i < ledCount; i++) {
      fillLed(i, '#000');
    }
  }

  function renderLine(effect, progress) {
    var length = effect.length;
    var firstLitLed = Math.round((ledCount + length) * progress) - length;
    var lastLitLed = firstLitLed + length - 1;

     if (firstLitLed < ledCount && lastLitLed >= 0) {
         for (var i = constrain(firstLitLed, 0, ledCount - 1); i <= constrain(lastLitLed, 0, ledCount - 1); i++) {
             fillLed(i, effect.color);
         }
     }
  }

  function fillLed(index, color) {
    leds[index].style.fill = color;
    leds[index].style.r = color === '#000' ? 2 : 6;
  }

  function constrain(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

      // oid renderLine(RenderContext ctx, int startLed, int endLed, boolean mirror) {
      //    int ledCount = endLed - startLed + 1;
      //    int length = ParamUtils.getIntegerValue(ctx.getEffect(), ParamName.LENGTH);

      //    float progress = mirror ? 1 - ctx.getProgress() : ctx.getProgress();
      //    int firstLitLed = startLed + Math.round((ledCount + length) * progress) - length;
      //    int lastLitLed = firstLitLed + length - 1;

      //    if (firstLitLed <= endLed && lastLitLed >= 0) {
      //        for (int i = constrain(startLed, endLed, firstLitLed); i <= constrain(startLed, endLed, lastLitLed); i++) {
      //            FillUtils.fill(ctx, ctx.getFrame().getLed(i), 1f);

      //            if (mirror) {
      //                FillUtils.fill(ctx, ctx.getFrame().getLed((endLed * 2) + (1 - endLed % 2) - i), 1f);
      //            }
      //        }
      //    }
      

      // rivate int constrain(int min, int max, int value) {
      //    return Math.max(min, Math.min(max, value));
      

  function renderEffect(effect, progress) {
    leds[i].style.fill = '#ff0'
    leds[i].style.r = 4;

    var previous = i - 1;
    if (i == 0) {
       previous = 15;
    }

    leds[previous].style.fill = '#000'; 
    leds[previous].style.r = 2;

    i++;

    if (i == 16) {
      i = 0;
    }
  }
})();
    