class ContactsController < ApplicationController
  def create
    name = params[:name]
    email = params[:email]
    message = params[:message]

    # Example: send to email or store temporarily
    ContactMailer.with(name:, email:, message:).new_message.deliver_now

    flash[:notice] = "Merci pour votre message !"
    redirect_to root_path(anchor: 'contact')
  rescue => e
    flash[:alert] = "Erreur lors de l'envoi du message : #{e.message}"
    redirect_to root_path(anchor: 'contact')
  end
end
