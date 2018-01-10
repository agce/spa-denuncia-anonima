class UserMailer < ApplicationMailer
   default from: "denunciaspabc@gmail.com"
   
   def notification_email(report)
        @report = report
        mail(to: 'hola@webshau.com', subject: 'Nuevo denuncia - Spabc') 
    end
    
end