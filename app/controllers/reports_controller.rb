class ReportsController < ApplicationController
   
   def index
       @reports = Report.all
   end
   
   
   def create
       @report = Report.new(recipe_params)
       if @report.save
         @bandera = 1
         UserMailer.notification_email(@report).deliver_now
         render :success
       else
         @bandera = 0
         render :new
       end
   end
   
   
   def new
       @bandera = 0
       @report = Report.new
   end
   
   
   def edit
   
   end
   
   
   def show
       @report = Report.find(params[:id])
   end
   
   
   def update
       
   end
   
   
   def destroy
       
   end
   
   def success
      if @bandera = 1
         @report = Report.find(params[:id])
      else
         render :new
      end
   end
    
   private
      def recipe_params
         params.require(:report).permit(:calle, :colonia, :municipio, :cp, :hechos, :referencias, :email, :coords)
      end
end