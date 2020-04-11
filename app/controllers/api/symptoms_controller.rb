class Api::SymptomsController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]

  def index
    render json: Symptom.all
  end

  def show
    render json: @symptom
  end

  #custom error for new creation
  def create
    symptom = Symptom.new(symptom_params)

    if symptom.save
      render json: symptom
    else
      render json: symptom.errors
    end
  end

  #custom error
  def update
    if @symptom.update(symptom_params)
      render json: @symptom
    else
      render json: symptom.errors, status: 445
    end
  end

  def destroy
    symptom.destroy
  end

  private

  def symptom_params
    params.require(:symptom).
    permit(
            :ill, 
            :pain, 
            :breathing_function, 
            :temperature, 
            :contact,
            :breathing, 
            :facility, 
            :location,
            :existing_dieseases
          )
  end
end
