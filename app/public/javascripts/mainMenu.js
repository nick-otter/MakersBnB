
MAIN_MENU = [
  {
    string: 'about',
    link: '/about',
    auth: false
  },
  {
    string: 'login',
    link: '/login',
    auth: false
  },
  {
    string: 'listings',
    link: '/listings',
    auth: true
  },
  {
  string: 'requests',
  link: '/requests',
  auth: true
  },
  {
  string: 'logout',
  link: '/logout',
  auth: true
  }
]

function buildmenu(auth) {
  config = MAIN_MENU
  html ='';
  for (var i = 0; i < config.length; i++) {
    item = config[i];
    if(item['auth'] === auth) {
    button = '<div class="main_menu_button_outer">' +
      '<button class="main_menu_button" onclick="location.href=\'' + item['link'] + '\'">' + item['string'] + '</button>' +
    '</div>';
    html += button;
    }
  }

  return html
}
