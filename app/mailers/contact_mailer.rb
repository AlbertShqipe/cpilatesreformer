class ContactMailer < ApplicationMailer
  default to: 'chiara.paperini.pilates@gmail.com'

  def new_message
    @name = params[:name]
    @email = params[:email]
    @message = params[:message]

    mail( subject: "Nouveau message de #{@name}, #{@email}", bcc: "albert_nikolli@icloud.com")
  end
end
