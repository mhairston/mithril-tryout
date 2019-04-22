/* global require */

var m = require("mithril").default;

var UserList = require("./views/UserList");
var UserForm = require("./views/UserForm");

m.route(document.body, "/list", {
  "/list": UserList,
  "/edit/:id": UserForm
})
