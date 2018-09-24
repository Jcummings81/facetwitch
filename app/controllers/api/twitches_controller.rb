class Api::TwitchesController < ApplicationController
  before_action :set_twitch, only: [:show, :update, :destroy]

  def index
    render json: Twitch.all.order(created_at: :desc)
  end

  def show
    render json: @twitch
  end

  def create
    twitch = Twitch.create(twitch_params)
    if twitch.save
      render json: twitch
    else
      render json: { errors: twitch.errors.full_messages.join(','), status: 422}
    end
  end

  def update
    if @twitch.update(twitch_params)
      render json: @twitch
    else
      render json: { errors: @twitch.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @twitch.destroy
  end

  private
  def set_twitch
    @twitch = Twitch.find(params[:id])
  end

  def twitch_params
    params.require(:twitch).permit(:post, :liked)
  end
end
