require 'test_helper'

class TestingFacilitiesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get testing_facilities_index_url
    assert_response :success
  end

  test "should get show" do
    get testing_facilities_show_url
    assert_response :success
  end

  test "should get new" do
    get testing_facilities_new_url
    assert_response :success
  end

  test "should get edit" do
    get testing_facilities_edit_url
    assert_response :success
  end

  test "should get destory" do
    get testing_facilities_destory_url
    assert_response :success
  end

end
