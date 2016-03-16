if (Meteor.isClient) {
  Template.BTNjoinnow.events({
    'submit form': function(event, template){
      event.preventDefault();
      var emailvar = template.find('#email').value;
      var unamevar = template.find('#UName').value;
      var fnamevar = template.find('#FName').value;
      var lnamevar = template.find('#LName').value;
      var passwordvar = template.find('#password').value;
      Accounts.createUser({
        email: emailvar,
        password: passwordvar
      });
      console.log("Form submitted");
    }
  });
  
  Template.BTNsignin.events({
    'submit form': function(event, template){
      event.preventDefault();
      var emailvar = template.find('#login-email').value;
      var passwordvar = template.find('#login-password').value;
      Meteor.loginWithPassword(emailvar, passwordvar);
    }
  });
  
  
  Template.showroom.events({
    'click.logout': function(event){
      event.preventDefault();
      Meteor.logout();
    }
  });
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
