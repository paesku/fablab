import getDataAttributes from './helper'

var target = $('#toggle')
var a = getDataAttributes(target)

target.on('click', (e) => {
  var el = '#' +  a['toggle']
  $(el).css({
    display: 'flex'
  });
})
