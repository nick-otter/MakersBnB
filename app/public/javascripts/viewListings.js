
function buildListings (listings) { console.log(listings);
  string = '';
listings.forEach(function(item) {
  opener = '<tr class="listing">'
  content = '<h4 class="listing">' + item.name + '</h4>' + '<br />' +
  '<p class="listing">' +
    item.description +
  '</p>'
  closer = '</tr>'
  string += (opener + content + closer)
}
  return string;
};

//
//   for (var i = 0; i < listings.length; i++) {
//     item = listings[i]
//     opener = '<tr class="listing">'
//     content = '<h4 class="listing">' + item.name + '</h4>' + '<br />' +
//     '<p class="listing">' +
//       item.description +
//     '</p>'
//     closer = '</tr>'
//     string += (opener + content + closer)
//   }
//
//   return string;
// };
