class ContactMailer < ApplicationMailer
  default to: 'chiara.paperini.pilates@gmail.com'

  def new_message
    @name = params[:name]
    @email = params[:email]
    @message = params[:message]

    mail(from: @email, subject: "Nouveau message de #{@name}")
  end
end
