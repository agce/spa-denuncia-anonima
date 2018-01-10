class ApplicationMailer < ActionMailer::Base
   default from: "denuncias@spabc.gob.mx"
   layout 'notification_email'
end