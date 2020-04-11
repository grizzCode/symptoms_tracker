class Api::TestingFacilitiesController < ApplicationController
  before_action :set_testing_facility, only: [:show, :update, :destroy]

  def index
    render json: TestingFacility.all
  end

  def show
    render json: @testing_facility
  end

  def create
    testing_facility = TestingFacility.new(testing_falicility_params)

    if testing_facility.save
      render json: testing_facility
    else
      render json: testing_facility.errors, status: 444
    end
  end

  def update
    if @testing_facility.update(testing_falicility_params)
      render json: @testing_facility
    else
      render json: testing_facility.errors, status: 445
    end
  end

  def destroy
    @testing_facility.destroy
  end

  private

  def set_testing_facility
    @testing_facility = TestingFacility.find(params[:id])
  end

  def testing_falicility_params
    params.require(:testing_facility).
    permit(
            :name,
            :street,
            :zip,
            :county,
            :city,
          )
  end
end
