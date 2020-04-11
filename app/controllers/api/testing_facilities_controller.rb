class Api::TestingFacilitiesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]

  def index
    render json: Testing_Facilities.all
  end

  def show
    render json: @testing_facility
  end

  def create
    testing_facility = Testing_Facility.new(testing_facility_params)

    if testing_facility.save
      render json: testing_facility
    else
      render json: testing_facility.errors, status: 444
    end
  end

  def update
    if @testing_facility.update(testing_facility_params)
      render json: @testing_facility
    else
      render json: testing_facility.errors, status: 445
    end
  end

  def destroy
    testing_facility.destroy
  end

  private

  def testing_falicility_params
    params.require(:symptom).
    permit(
            :name,
            :street,
            :zip,
            :county,
            :city,
          )
  end
end
